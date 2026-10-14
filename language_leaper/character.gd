extends CharacterBody2D
@onready var player_attack = get_tree().root.find_child("ataque", true, false).find_child("PlayerAttack", true, false)
@onready var sprite = $AnimatedSprite2D
@onready var jumpscare = $CanvasLayer/Jumpscare
@onready var jumpscare_sound = $CanvasLayer/Som

var dead = false
const speed = 200
const jump_force = -500
const gravity = 1000

func _ready():
	add_to_group("player")
	sprite.play("idle")
	jumpscare.visible = false


func take_damage():
	if dead:
		return

	dead = true
	print("morreu mesmo")

	jumpscare.visible = true

	if jumpscare_sound.stream != null:
		jumpscare_sound.play()

	await get_tree().create_timer(3).timeout

	get_tree().reload_current_scene()

func _physics_process(delta: float):
	var dir = Input.get_axis("move_left", "move_right")
	velocity.x = dir * speed
	
	velocity.y += gravity * delta
	
	move_and_slide()
	
	if dir != 0:
		sprite.flip_h = dir < 0

	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = jump_force
	
	if Input.is_action_just_pressed("attack"):
		var offset = 80

		player_attack.global_position = global_position + Vector2(
			offset if not sprite.flip_h else -offset,
			0
		)

		player_attack.atacar(-1 if sprite.flip_h else 1)
	update_animation(dir)

func update_animation(dir):
	if not is_on_floor():
		sprite.play("jump")
	elif dir != 0:
		sprite.play("walk")
	else:
		sprite.play("idle")

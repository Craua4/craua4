extends CharacterBody2D

@onready var sprite = $AnimatedSprite2D

const speed = 200
const jump_force = -400
const gravity = 1000

func _ready():
	sprite.play("idle")

func take_damage():
	print('morreu mesmo')
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
	
	update_animation(dir)

func update_animation(dir):
	if not is_on_floor():
		sprite.play("jump")
	elif dir != 0:
		sprite.play("walk")
	else:
		sprite.play("idle")

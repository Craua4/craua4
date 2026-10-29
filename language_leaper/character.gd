extends CharacterBody2D
@onready var player_attack = get_tree().root.find_child("ataque", true, false).find_child("PlayerAttack", true, false)
@onready var shuriken = get_tree().root.find_child("shuriken", true, false).find_child("PlayerShuriken", true, false)

@onready var sprite = $AnimatedSprite2D
@onready var jumpscare = $CanvasLayer/Jumpscare
@onready var jumpscare_sound = $CanvasLayer/Som

var dead = false
const speed = 200
const jump_force = -500
const gravity = 1000

const MAX_AMMO = 3
const SHURIKEN_COOLDOWN = 0.75

const ATTACK_COOLDOWN = 0.4
var attack_cooldown_left = 0.0

var ammo = MAX_AMMO
var cooldown_left = 0.0
var ammo_label: Label

func _ready():
	add_to_group("player")
	sprite.play("idle")
	jumpscare.visible = false

	ammo_label = Label.new()
	ammo_label.position = Vector2(20, 20)
	ammo_label.add_theme_font_size_override("font_size", 32)
	$CanvasLayer.add_child(ammo_label)
	update_ammo_label()

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
	cooldown_left = max(cooldown_left - delta, 0.0)
	attack_cooldown_left = max(attack_cooldown_left - delta, 0.0)

	var dir = Input.get_axis("move_left", "move_right")
	velocity.x = dir * speed
	velocity.y += gravity * delta
	move_and_slide()

	if dir != 0:
		sprite.flip_h = dir < 0

	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = jump_force

	if Input.is_action_just_pressed("attack") and attack_cooldown_left <= 0.0:
		var offset = 80
		player_attack.global_position = global_position + Vector2(
			offset if not sprite.flip_h else -offset,
			0
		)
		player_attack.atacar(-1 if sprite.flip_h else 1)
		attack_cooldown_left = ATTACK_COOLDOWN

	# the ONLY shuriken block
	if Input.is_action_just_pressed("shuriken"):
		if can_throw_shuriken():
			throw_shuriken()
		else:
			print("Shuriken blocked. ammo=", ammo, " cooldown=", cooldown_left)

	update_animation(dir)

func throw_shuriken():
	var offset = 80
	shuriken.global_position = global_position + Vector2(
		offset if not sprite.flip_h else -offset,
		0
	)
	shuriken.shuriken(-1 if sprite.flip_h else 1)

	ammo -= 1
	cooldown_left = SHURIKEN_COOLDOWN
	update_ammo_label()

func can_throw_shuriken() -> bool:
	return ammo > 0 and cooldown_left <= 0.0

func add_ammo(amount: int = 1):
	ammo = min(ammo + amount, MAX_AMMO)
	update_ammo_label()

func update_ammo_label():
	ammo_label.text = "Shuriken: %d/%d" % [ammo, MAX_AMMO]

func update_animation(dir):
	if not is_on_floor():
		sprite.play("jump")
	elif dir != 0:
		sprite.play("walk")
	else:
		sprite.play("idle")

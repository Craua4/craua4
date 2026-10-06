extends CharacterBody2D

@onready var sprite = $Sprite2D
@onready var health_label: Label = $hud/health

const speed = 200
const jump_force = -400
const gravity = 1000

func take_damage():
	print('morreu mesmo')
	get_tree().reload_current_scene()

func _physics_process(delta: float):
	var dir = Input.get_axis("move_left", "move_right")
	velocity.x = dir * speed

	velocity.y += gravity * delta

	move_and_slide()

	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = jump_force
		
		

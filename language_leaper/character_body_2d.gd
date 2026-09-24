extends CharacterBody2D


@onready var sprite = $Sprite2D

const speed = 200
const jump_force = -400
const gravity = 1000

func _physics_process(delta: float):
	
	var dir = Input.get_axis("move_left", "move_right")
	velocity.x = dir * speed
	
	velocity.y += gravity * delta
	
	move_and_slide()

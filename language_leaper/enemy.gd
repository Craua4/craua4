extends CharacterBody2D

var gravity = 1000
@onready var sprite = $Sprite2D
var direction = -1
var facing = -1
var speed = 100
var health = 1
@onready var player = get_node("../../Character")

func _physics_process(delta):
	velocity.x = direction * speed
	velocity.y += gravity * delta

func set_facing(new_direction):
	
	if new_direction == 0:
		return
	
	facing = new_direction
	sprite.flip_h = facing == 1

func face_player():
	if not is_instance_valid(player):
		return
	if player.global_position.x < global_position.x:
		set_facing(-1)
	elif player.global_position.x > global_position.x:
		set_facing(1)

func take_damage():
	health -= -1
	
	if health <= 0:
		queue_free()

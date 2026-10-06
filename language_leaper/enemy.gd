#extends CharacterBody2D
#
#var gravity = 1000
#@onready var sprite = $Sprite2D
#var direction = -1
#var facing = -1
#var speed = 100
#var health = 1
#@onready var player = get_node("../../Character")
#
#func _physics_process(delta):
	#velocity.x = direction * speed
	#velocity.y += gravity * delta
#
#func set_facing(new_direction):
	#
	#if new_direction == 0:
		#return
	#
	#facing = new_direction
	#sprite.flip_h = facing == 1
#
#func face_player():
	#if not is_instance_valid(player):
		#return
	#if player.global_position.x < global_position.x:
		#set_facing(-1)
	#elif player.global_position.x > global_position.x:
		#set_facing(1)
#
#func take_damage():
	#health -= -1
	#
	#if health <= 0:
		#queue_free()

extends CharacterBody2D

const gravity = 1000
const speed = 100

@onready var sprite = $Sprite2D
# The real moving body is the CharacterBody2D inside the Character scene
@onready var player = get_node("../../Character/CharacterBody2D")

var facing = -1
var health = 1

func _physics_process(delta):
	velocity.y += gravity * delta

	var direction = get_direction_to_player()
	velocity.x = direction * speed
	set_facing(direction)

	move_and_slide()

func get_direction_to_player() -> int:
	if not is_instance_valid(player):
		return 0
	var dx = player.global_position.x - global_position.x
	# Dead zone so it doesn't jitter when it's right on top of you
	if abs(dx) < 5:
		return 0
	return sign(dx)

func set_facing(new_direction):
	if new_direction == 0:
		return
	facing = new_direction
	sprite.flip_h = facing == 1

func take_damage():
	health -= 1
	if health <= 0:
		queue_free()

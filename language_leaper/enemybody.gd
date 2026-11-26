extends CharacterBody2D

const gravity = 1000
const speed = 100

@onready var sprite = $Sprite2D
# The real moving body is the CharacterBody2D inside the Character scene
@onready var player = get_node("../../Character/Player")

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
	queue_free()

func _ready():
	add_to_group("enemy")

func _on_area_2d_body_entered(body: Node2D) -> void:
	print('inimigando')
	if body.is_in_group("player"):
		body.take_damage()
		print('morreu')

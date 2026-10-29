#extends Area2D
#
#var speed = 1000
#@onready var sprite = $Sprite2D
#
#func _ready():
#	monitoring = false
#	visible = false
#
#func _physics_process(delta: float) -> void:
#	global_position.x += speed * delta
#
#func shuriken(direcao:int):
#	print("Shuriken ativado!")
#	sprite.flip_h = direcao <0
#	monitoring = true
#	visible = true
#
#	await get_tree().create_timer(1.0).timeout
#
#	monitoring = false
#	visible = false
#
#func _on_body_entered(body: Node2D):
#	print("O ataque encostou em: ", body.name)
#
#	if body.is_in_group("enemy"):
#		print("Inimigo atingido!")
#		body.take_damage()

extends Area2D

const SPEED = 1000
var direction = 1
var shot_id = 0
@onready var sprite = $Sprite2D

func _ready():
	_hide()

func _physics_process(delta: float) -> void:
	global_position.x += direction * SPEED * delta

func shuriken(direcao: int):
	shot_id += 1
	var my_shot = shot_id        # remember which throw this is

	direction = direcao
	sprite.flip_h = direcao < 0
	monitoring = true
	visible = true
	set_physics_process(true)

	await get_tree().create_timer(1.0).timeout

	# a newer throw happened meanwhile, so leave it alone
	if my_shot != shot_id:
		return
	_hide()

func _hide():
	set_deferred("monitoring", false)
	visible = false
	set_physics_process(false)

func _on_body_entered(body: Node2D):
	if body.is_in_group("enemy"):
		body.take_damage()
		_hide()

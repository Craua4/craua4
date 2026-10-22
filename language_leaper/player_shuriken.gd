extends Area2D

var speed = 1000
@onready var sprite = $Sprite2D

func _ready():
	monitoring = false
	visible = false

func _physics_process(delta: float) -> void:
	global_position.x += speed * delta

func shuriken(direcao:int):
	print("Shuriken ativado!")
	sprite.flip_h = direcao <0
	monitoring = true
	visible = true

	await get_tree().create_timer(1.0).timeout

	monitoring = false
	visible = false

func _on_body_entered(body: Node2D):
	print("O ataque encostou em: ", body.name)

	if body.is_in_group("enemy"):
		print("Inimigo atingido!")
		body.take_damage()

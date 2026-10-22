extends Area2D

@onready var sprite = $Sprite2D

func _ready():
	monitoring = false
	visible = false


func atacar(direcao:int):
	print("Ataque ativado!")
	sprite.flip_h = direcao <0
	monitoring = true
	visible = true

	await get_tree().create_timer(0.2).timeout

	monitoring = false
	visible = false

func _on_body_entered(body: Node2D):
	print("O ataque encostou em: ", body.name)

	if body.is_in_group("enemy"):
		print("Inimigo atingido!")
		body.take_damage()

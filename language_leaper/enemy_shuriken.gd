extends Area2D

const SPEED = 350.0

var direction = Vector2.ZERO

func _ready():
	body_entered.connect(_on_body_entered)

func _physics_process(delta):
	position += direction * SPEED * delta

func _on_body_entered(body):
	body.queue_free()

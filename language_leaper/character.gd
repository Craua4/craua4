extends CharacterBody2D


@onready var sprite = $Sprite2D

const speed = 200
const jump_force = -400
const gravity = 1000

var health := 3   # ":" é usado para definir como int automaticamente

func _ready():
	$hud/health.text = "Health: " + str(health)

func take_damage():
	health -= 1
	$hud/health.text = "Health: " + str(health)
	if health <= 0:
		get_tree().reload_current_scene()  # restart the level

# A cada atualização da física, calcula o que o personagem deve fazer
func _physics_process(delta: float):
	
	var dir = Input.get_axis("move_left", "move_right")
	velocity.x = dir * speed
	
	velocity.y += gravity * delta
	
	move_and_slide()
	
	if Input.is_action_just_pressed("jump") and is_on_floor():
		velocity.y = jump_force

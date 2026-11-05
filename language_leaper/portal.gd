extends Area2D

func _ready():
	body_entered.connect(_on_body_entered)

func _on_body_entered(body: Node2D):
	if body.name == "Player":
		get_tree().change_scene_to_file("res://level_2.tscn")

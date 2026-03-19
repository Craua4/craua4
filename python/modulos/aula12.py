class Csgo():
    # gender = "First-person-shooter"
    # monitor = "540hz"
    # fps = "540fps"
    def __init__(self,gender,monitor,fps):
        self.gender = gender
        self.monitor = monitor
        self.fps = fps

    def relatoriodecaracteristicas(self):
        return f"Gênero: {self.gender}; Monitor em uso: {self.monitor}; Taxa de quadros p/ segundo: {self.fps}"


csgo1 = Csgo()
# print(type(csgo1))
# print(csgo1.monitor)
print(csgo1.relatoriodecaracteristicas())
#Filename: main.py
#License: MIT
# Copyright 2020 Sidings Media

# Import packages
# Note: Pygame 2.0.0.dev10 is required as a minimum.
import ctypes
myappid = 'sidingsmedia.railwaycontroller.windowsclient.01' # arbitrary string
ctypes.windll.shell32.SetCurrentProcessExplicitAppUserModelID(myappid)
import os,sys
# Hide pygame welcome message
#os.environ['PYGAME_HIDE_SUPPORT_PROMPT'] = "hide"# make sure that this is before import pygame
import pygame
from pygame.locals import *
#can't use __file__ in frozen programs.
if getattr(sys, 'frozen', False):
    # frozen
    currentPath = os.path.dirname(sys.executable)
else:
    # unfrozen
    currentPath = os.path.dirname(os.path.realpath(__file__))
#currentPath = os.path.dirname(__file__)
# define colours
WHITE = (255, 255, 255)


class App:
    def __init__(self):
        self._running = True
        self._display_surf = None
        self.size = self.weight, self.height = 960, 540

    def on_init(self):
        pygame.init()
        self.fps = 60
        self.fpsClock = pygame.time.Clock()
        # Set window to size defined in __init__ and allows window to be resized
        self._display_surf = pygame.display.set_mode(self.size, RESIZABLE)
        pygame.display.set_caption('Railway Controller')  # Sets window title
        # Setting icon
        self.programIcon = pygame.image.load(os.path.join(currentPath, 'images', 'Logos', "favicon-32x32bg.png"))
        pygame.display.set_icon(self.programIcon)
        self._running = True

    def on_event(self, event):  # Checks events
        if event.type == pygame.QUIT:
            self._running = False

    def on_loop(self):
        pass

    def on_render(self):
        pass

    def on_cleanup(self):
        pygame.quit()

    def on_execute(self):
        if self.on_init() == False:
            self._running = False
        # main loop
        while(self._running):  # Will only run if _running = true
            self._display_surf.fill(WHITE)
            for event in pygame.event.get():
                self.on_event(event)
            self.on_loop()
            self.on_render()

            pygame.display.update()
            self.fpsClock.tick(self.fps)
        self.on_cleanup()


if __name__ == "__main__":
    theApp = App()
    theApp.on_execute()

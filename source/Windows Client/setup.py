import sys
from cx_Freeze import setup, Executable
build_exe_options = {"packages": ["os","sys","pygame","ctypes"], "excludes": ["tkinter","numpy"], 'include_files':['images/']}

base = "Win32GUI"

    

setup(  name = "Railway Controller",
        version = "0.1",
        description = "A simple system to control your model railway",
        options = {"build_exe": build_exe_options},
        executables = [Executable("main.py",icon='favicon.ico', base=base,targetName='railwaycontroller.exe')])# 
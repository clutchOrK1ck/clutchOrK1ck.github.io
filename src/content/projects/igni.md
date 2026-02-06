---
title: Igni
description: >-
  Igni brings game assets of "The Witcher" game into Unreal Engine! It consists of a console application and several utility scripts
  for easy imports into Unreal Engine
preview:
  type: image
  src: /project-previews/igni/01_sample_scene.png
gallery:
  - type: image
    source: /project-galleries/igni/01_sample_scene.png
    caption: A sample scene that consists of the assets imported from "The Witcher" using Igni
  - type: image
    source: /project-galleries/igni/02_imported_assets.png
    caption: Material instances for the imported assets are auto-generated with Python, based on the shader information retrieved from the game files
startDate: 2022-12-01
skills:
  - Python
  - Autodesk FBX SDK
  - Unreal Engine 5 Python
  - kaitai
sourceLink: https://github.com/clutchOrK1ck/IGNI
featured: true
prio: 2
---
## Background

Witcher 1 is one of my favorite games of all times. After several playthroughs, I came to an ambitious idea of rebuilding it in Unreal Engine 5. Not a real remake - just a 'transport' of game assets from Witcher's binaries into the engine. That's how *Igni* (inspired by the name of one of the witcher's signs) was born. *Igni* combines a mutli-processed Python console application and a number of Python utility scripts to be executed in Unreal Engine. 

## Features

- a multi-processed application - entire game models are converted to `.fbx` within minutes on an average PC
- so far, the implementation is limited to transport of static models and materials but I plan to extend it in the future

## Technology

- `kaitai` - to parse Witcher's binary models with declarative schemas instead of authoring the parser code
- official Autodesk Python FBX SDK - to convert the game models into `fbx` files
- Unreal's Python API - to assist with model imports and generation of materials and material instances
---
title: Igni - Witcher 1-to-Unreal game assets bridge
description: >-
  Igni is a multi-processed Python console application that converts Witcher 1 assets into format that can be imported to Unreal.
preview:
  type: video
  src: /project-previews/evil-dwarves/20220611_190317.mp4
  poster: /project-previews/evil-dwarves/poster.png
  autoplay: true
  loop: true
  muted: true
startDate: 2022-12-01
skills:
  - Python
  - Autodesk FBX SDK
  - kaitai
sourceLink: https://portal.astro.build/themes/templix-professional-marketplace-template/
itchLink: https://clutchorkick.itch.io/evil-dwarves
featured: true
---
## Background

Witcher 1 is one of my favorite games of all times. After several playthroughs, I came to an ambitious idea of rebuilding it in Unreal Engine 5. Not a real remake - just a 'transport' of game assets from Witcher's binaries into the engine. That's how *Igni* (inspired by the name of one of the witcher signs) was born. *Igni* combines a mutli-processed Python console application and a number of Python utility scripts to be executed in Unreal Engine. 

## Features

- a multi-processed application - entire game models are converted to `.fbx` within minutes on an average PC
- so far, the implementation is limited to transport of static models and materials but I plan to extend it in the future

## Technology

- `kaitai` - to parse Witcher's binary models with declarative schemas instead of authoring the parser code
- official Autodesk Python FBX SDK - to convert the game models into `fbx` files
- Unreal's Python API - to assist with model imports and generation of materials and material instances
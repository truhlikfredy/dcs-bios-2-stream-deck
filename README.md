# Description

The original Stream deck software runs only on Windows 10, this project is built on top of the NodeJS reverse engineered package which can communicate directly to the stream deck and therefore it works on Windows 7 just fine. This acts as glue logic between DCS-BIOS protocol and Stream Deck protocol. Because this is 2way communication it is possible to achieve better experience, it allows to see states of lamps, displays and allows more accurate button press feedback. It is possible to hardcode button presses and activate the given button straight away, but in practice, the button's lamp, or state might have different behavior under certain conditions (that subsystem is not powered or damaged) and thank's to the 2-way communication more true representation is shown on the Stream deck.

It is possible to supply to it custom images for all buttons and they will be used (when config.js 'forceImageRecreation' set to false, images named correctly, and placed to the /img folder). However, this package is designed to work completely without images and able to generate it's own on the fly. Graphically they are not as amazing as dedicated photos of buttons, but they are still functional and allow a much faster process where 300+ buttons can be added in less time.

# Bundled DCS module as examples:
- KA-50 cockpit (over 300 buttons), mainly buttons and only a few lamps (for lamps I have a different project for that)

- Possibility to add more modules

# Known issues/limitations

- Some functions which are not clickable might not be reachable through this package as these are not exposed to the LUA scripts in the DCS BIOS

- If the KA-50 cockpit interior light is not working, then update the DCS BIOS plugin as this got fixed recently thanks to @WarLord211

- The stream deck will be somewhat interactive even without DCS BIOS connection, of course it will not communicate to the DCS and some states/buttons will not display as expected (before or after they were pressed).

- Tested only on 15 button Stream deck, with some modifications it should be usable with bigger/smaller Stream deck. It's a TODO for the future.

- Button image caching is disabled. Simpler buttons/functions have only a few states and have dedicated image for each combination, however more dynamic content such as 7 segment displays would create a lot of unique images and therefore they are reusing just one single image. The content of these images can be updated frequently and caching might not recognize the changes and keep reusing stale content. But so far the performance impact is not bad as the images are not updated frequently and do not need rescaling or other features.

- Some display readouts (PVI-800 for example) are updated fairly slowish (DCS-BIOS side) and take few update iterations to be a correct value (suspecting the Node.js package dcs-bios-api might not be parsing the multi-digit values properly). Another TODO which I want to address. In few places for the KA-50, I made workarounds, for example the R-800-L1 frequency 1 and 4 are calculated from the knob/wheel position instead of reading the display values.


# Installation

## Windows

Here are the versions I exactly tested, however, it's possible that other versions will work as well. The links after a while might become outdated, I will try to check them from time to time, but please report any dead links.

**Note:** Admin privileges are required for some of these steps.

Download and install these packages:

- Node.js 12.14.0 https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi (used the installer with the default options, which will be adding node.js to the paths)

- DCS BIOS v0.10.0 https://github.com/dcs-bios/dcs-bios/releases/download/v0.10.0/DCS-BIOS-Hub-Setup-v0.10.0.msi

 Run the DCS BIOS hub, install plugins for whatever modules are needed and enable the virtual cockpit connection and autostart feature (or learn how to start it manually).

 **Note:** If you have DCS BIOS v0.10.0 already installed, you might want to check for plugin updates. Because by doing this project I found some issues in the KA-50 module, some of them got fixed by @WarLord211 very quickly after I reported them.


 Then run these

- npm install --global --production windows-build-tools
- <go_for_a_tea_break>
- npm install -g node-gyp

## Windows extra steps (only if above is not enough)

In one case I had to follow extra steps, but I do not fully understand why and I can't replicate it. So I'm adding these for full completion, but in the recent installs/tests I **did not need them** (testing could improve as well). n
Had to follow the Canvas package wiki https://github.com/Automattic/node-canvas/wiki/Installation:-Windows

- Download and install libjpeg-turbo-2.0.3-vc64.exe https://sourceforge.net/projects/libjpeg-turbo/files/2.0.3/libjpeg-turbo-2.0.3-vc64.exe/download
- Download a GTK2 with cairo library and unzip it directly to the C:\GTK (if a different directory is used then gyp needs extra arguments to find it) http://ftp.gnome.org/pub/GNOME/binaries/win64/gtk+/2.22/gtk+-bundle_2.22.1-20101229_win64.zip 

# Running

Make sure the installation steps above are finished

```
cd dcs-bios-2-stream-deck
npm install
npm test
```

The npm test is just doing some sanity test, DCS-BIOS/Stream-deck doesn't have to be present. However, for the next step the Stream deck has to be connected.

```
npm start
```

Run DCS with the DCS-BIOS enabled autostart option (or run it by hand). And enjoy.


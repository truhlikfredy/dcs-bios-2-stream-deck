# Description

The original Stream deck software runs only on Windows 10, this project is build on top of the NodeJS reverse engineered package which can communicate directly to the stream deck and therefore it works on Windows 7 just fine. This acts as glue logic between DCS-BIOS protocol and Stream Deck protocol. Because this is 2way communication it is possible achieve better expirence, it allows to see states of lamps, displays and allows more accurate button press feedback. It is possible to harcode button presses and activate the given button straight away, but in practice the button's lamp, or state might have different behviour under certain conditions (that subsytem is not powered or damaged) and thank's to the 2 way communication more true representation is shown on the Stream deck.

It is possible to supply custom images for all buttons and they will be used (when config.js 'forceImageRecreation' set to false, images named correctly,  and placed to the /img folder). However this package is designed to work completely without images and able to generete it's own on the fly. Graphically they are not as amazing as dedicated photos of buttons, however they are still functional and allow much faster process where 300+ buttons can be added in less time.

# Bundled DCS module as examples:
- KA-50 cockpit (over 300 buttons), mainly buttons and only few lamps (for lamps I have different project for that)
- Possibility to add more modules

# Known issues/limitations

- Some functions which are not clickable might not be rechable through this package
 - Some buttons (i'm aware of one, the cockpit aux light) are clickable but still not rechable through this package. A ticket was opened on the DCS BIOS.
- The stream deck will be somewhat interactive even without DCS BIOS connection, they of course will not communicate to the DCS and some states/buttons will not display as expected (before or after they were pressed).
- Tested only on 15 button Stream deck
- Button image caching is disabled. Simpler buttons/functions have only few states and have dedicated image for each combination, however more dynamic content such as 7 segment displays would create a lot of unique images and therefore they are reusing just one single image. The content of these images can be updated frequently and caching might not recognize the changes and keep reusing stale content.


# Installation

# Windows

Here are the version I exactly tested, however it's possible that other versions will work as well. The links after while might become outdated, I will try to check them from time to time, but please report any dead links.

Download and install these packages:

- NodeJS 12.14.0 https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi (used the installer with the default options, which will be adding nodejs to the paths)

- Python 3.8.1 https://www.python.org/ftp/python/3.8.1/python-3.8.1-amd64.exe (mostly default options, but I had to check the checkbox for python to be added to the paths). Note any process has to be restarted for the path changes, to be applied. This means that existing 'cmd' prompt will not see the new paths, nor running 'cmd' from the 'Start + R' (as the explorer process which is starting the command did not update his paths yet). Either kill all explorer processes and invoke them by hand, or just do simple relog/reboot.

- DCS BIOS v0.10.0 https://github.com/dcs-bios/dcs-bios/releases/download/v0.10.0/DCS-BIOS-Hub-Setup-v0.10.0.msi

 Run the DCS BIOS hub, install plugins for whatever modules are needed and enable the virtual cockpit connection and autostart feature.

 **Note:** If you have DCS BIOS v0.10.0 already installed, you might want to check for plugin updates, because by doing this project I found some bugs, which they got fixed very quickly by @WarLord211 after I reported them.


Then run these

- npm install --global --production windows-build-tools
- <go_for_a_tea_break>
- npm install -g node-gyp

# Running

Make sure the installation steps above are finished

- cd <dcs-bios-2-stream-deck>
- npm install
- npm test
- <just to do some sanity test, DCS-BIOS/Stream-deck doesn't have to be present>
- <Connect your Stream deck>
- npm start
- <Run DCS with DCS-BIOS with the autostart option (or run it by hand)>




In one case I had to folloow these steps:
- https://github.com/Automattic/node-canvas/wiki/Installation:-Windows
- libjpeg-turbo-2.0.3-vc64.exe
- http://ftp.gnome.org/pub/GNOME/binaries/win64/gtk+/2.22/gtk+-bundle_2.22.1-20101229_win64.zip unzip it directly to the C:\GTK (if different directory is used then gyp needs extra arguments to find it) 
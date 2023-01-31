/*
 * README from http://www.greywyvern.com/code/javascript/keyboard.js
 * ------
 *
 * - Lay out each keyboard in rows of sub-arrays.  Each sub-array
 *   represents one key.
 *
 * - Each sub-array consists of four slots described as follows:
 *     example: ["a", "A", "\u00e1", "\u00c1"]
 *
 *          a) Normal character
 *          A) Character + Shift/Caps
 *     \u00e1) Character + Alt/AltGr/AltLk
 *     \u00c1) Character + Shift/Caps + Alt/AltGr/AltLk
 *
 *   You may include sub-arrays which are fewer than four slots.
 *   In these cases, the missing slots will be blanked when the
 *   corresponding modifier key (Shift or AltGr) is pressed.
 *
 * - If the second slot of a sub-array matches one of the following
 *   strings:
 *     "Tab", "Caps", "Shift", "Enter", "Bksp",
 *     "Alt" OR "AltGr", "AltLk"
 *   then the function of the key will be the following,
 *   respectively:
 *     - Insert a tab
 *     - Toggle Caps Lock (technically a Shift Lock)
 *     - Next entered character will be the shifted character
 *     - Insert a newline (textarea), or close the keyboard
 *     - Delete the previous character
 *     - Next entered character will be the alternate character
 *     - Toggle Alt/AltGr Lock
 *
 *   The first slot of this sub-array will be the text to display
 *   on the corresponding key.  This allows for easy localisation
 *   of key names.
 *
 * - Layout dead keys (diacritic + letter) should be added as
 *   property/value pairs of objects with hash keys equal to the
 *   diacritic.  See the "this.VKI_deadkey" object below the layout
 *   definitions.  In each property/value pair, the value is what
 *   the diacritic would change the property name to.
 *
 * - Note that any characters beyond the normal ASCII set should be
 *   entered in escaped Unicode format.  (eg \u00a3 = Pound symbol)
 *   You can find Unicode values for characters here:
 *     http://unicode.org/charts/
 *
 * - To remove a keyboard, just delete it, or comment it out of the
 *   source code. If you decide to remove the US International
 *   keyboard layout, make sure you change the default layout
 *   (this.VKI_kt) above so it references an existing layout.
 *
 * CREDITS
 * -------
 *
 * See http://www.greywyvern.com/code/javascript/keyboard for examples
 * and usage instructions.
 *
 * Version 1.49 - November 8, 2011
 *   - Don't display language drop-down if only one keyboard available
 *
 *   See full changelog at:
 *     http://www.greywyvern.com/code/javascript/keyboard.changelog.txt
 *
 * Keyboard Credits
 *   - Yiddish (Yidish Lebt) keyboard layout by Simche Taub (jidysz.net)
 *   - Urdu Phonetic keyboard layout by Khalid Malik
 *   - Yiddish keyboard layout by Helmut Wollmersdorfer
 *   - Khmer keyboard layout by Sovann Heng (km-kh.com)
 *   - Dari keyboard layout by Saif Fazel
 *   - Kurdish keyboard layout by Ara Qadir
 *   - Assamese keyboard layout by Kanchan Gogoi
 *   - Bulgarian BDS keyboard layout by Milen Georgiev
 *   - Basic Japanese Hiragana/Katakana keyboard layout by Damjan
 *   - Ukrainian keyboard layout by Dmitry Nikitin
 *   - Macedonian keyboard layout by Damjan Dimitrioski
 *   - Pashto keyboard layout by Ahmad Wali Achakzai (qamosona.com)
 *   - Armenian Eastern and Western keyboard layouts by Hayastan Project (www.hayastan.co.uk)
 *   - Pinyin keyboard layout from a collaboration with Lou Winklemann
 *   - Kazakh keyboard layout by Alex Madyankin
 *   - Danish keyboard layout by Verner KjÃ¦rsgaard
 *   - Slovak keyboard layout by Daniel Lara (www.learningslovak.com)
 *   - Belarusian and Serbian Cyrillic keyboard layouts by Evgeniy Titov
 *   - Bulgarian Phonetic keyboard layout by Samuil Gospodinov
 *   - Swedish keyboard layout by HÃ¥kan Sandberg
 *   - Romanian keyboard layout by Aurel
 *   - Farsi (Persian) keyboard layout by Kaveh Bakhtiyari (www.bakhtiyari.com)
 *   - Burmese keyboard layout by Cetanapa
 *   - Bosnian/Croatian/Serbian Latin/Slovenian keyboard layout by Miran Zeljko
 *   - Hungarian keyboard layout by Antal Sall 'Hiromacu'
 *   - Arabic keyboard layout by Srinivas Reddy
 *   - Italian and Spanish (Spain) keyboard layouts by dictionarist.com
 *   - Lithuanian and Russian keyboard layouts by Ramunas
 *   - German keyboard layout by QuHno
 *   - French keyboard layout by Hidden Evil
 *   - Polish Programmers layout by moose
 *   - Turkish keyboard layouts by offcu
 *   - Dutch and US Int'l keyboard layouts by jerone
 *
 */
import { InjectionToken } from '@angular/core';
import { KeyboardClassKey } from '../enums/keyboard-class-key.enum';
const MAT_KEYBOARD_LAYOUTS = new InjectionToken('keyboard-layouts.config');
const keyboardLayouts = {
    '\u0627\u0644\u0639\u0631\u0628\u064a\u0629': {
        'name': 'Arabic',
        'keys': [
            [
                ['\u0630', '\u0651 '],
                ['1', '!', '\u00a1', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a4', '\u00a3'],
                ['5', '%', '\u20ac'],
                ['6', '^', '\u00bc'],
                ['7', '&', '\u00bd'],
                ['8', '*', '\u00be'],
                ['9', '(', '\u2018'],
                ['0', ')', '\u2019'],
                ['-', '_', '\u00a5'],
                ['=', '+', '\u00d7', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u064e'],
                ['\u0635', '\u064b'],
                ['\u062b', '\u064f'],
                ['\u0642', '\u064c'],
                ['\u0641', '\u0644'],
                ['\u063a', '\u0625'],
                ['\u0639', '\u2018'],
                ['\u0647', '\u00f7'],
                ['\u062e', '\u00d7'],
                ['\u062d', '\u061b'],
                ['\u062c', '<'],
                ['\u062f', '>'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u0650'],
                ['\u0633', '\u064d'],
                ['\u064a', ']'],
                ['\u0628', '['],
                ['\u0644', '\u0644'],
                ['\u0627', '\u0623'],
                ['\u062a', '\u0640'],
                ['\u0646', '\u060c'],
                ['\u0645', '/'],
                ['\u0643', ':'],
                ['\u0637', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0626', '~'],
                ['\u0621', '\u0652'],
                ['\u0624', '}'],
                ['\u0631', '{'],
                ['\u0644', '\u0644'],
                ['\u0649', '\u0622'],
                ['\u0629', '\u2019'],
                ['\u0648', ','],
                ['\u0632', '.'],
                ['\u0638', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ar']
    },
    '\u0985\u09b8\u09ae\u09c0\u09df\u09be': {
        'name': 'Assamese',
        'keys': [
            [
                ['+', '?'],
                ['\u09E7', '{', '\u09E7'],
                ['\u09E8', '}', '\u09E8'],
                ['\u09E9', '\u09CD\u09F0', '\u09E9'],
                ['\u09EA', '\u09F0\u09CD', '\u09EA'],
                ['\u09EB', '\u099C\u09CD\u09F0', '\u09EB'],
                ['\u09EC', '\u0995\u09CD\u09B7', '\u09EC'],
                ['\u09ED', '\u0995\u09CD\u09F0', '\u09ED'],
                ['\u09EE', '\u09B6\u09CD\u09F0', '\u09EE'],
                ['\u09EF', '(', '\u09EF'],
                ['\u09E6', ')', '\u09E6'],
                ['-', ''],
                ['\u09C3', '\u098B', '\u09E2', '\u09E0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u09CC', '\u0994', '\u09D7'],
                ['\u09C8', '\u0990'],
                ['\u09BE', '\u0986'],
                ['\u09C0', '\u0988', '\u09E3', '\u09E1'],
                ['\u09C2', '\u098A'],
                ['\u09F1', '\u09AD'],
                ['\u09B9', '\u0999'],
                ['\u0997', '\u0998'],
                ['\u09A6', '\u09A7'],
                ['\u099C', '\u099D'],
                ['\u09A1', '\u09A2', '\u09DC', '\u09DD'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u09CB', '\u0993', '\u09F4', '\u09F5'],
                ['\u09C7', '\u098F', '\u09F6', '\u09F7'],
                ['\u09CD', '\u0985', '\u09F8', '\u09F9'],
                ['\u09BF', '\u0987', '\u09E2', '\u098C'],
                ['\u09C1', '\u0989'],
                ['\u09AA', '\u09AB'],
                ['\u09F0', '', '\u09F0', '\u09F1'],
                ['\u0995', '\u0996'],
                ['\u09A4', '\u09A5'],
                ['\u099A', '\u099B'],
                ['\u099F', '\u09A0'],
                ['\u09BC', '\u099E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u09CE', '\u0983'],
                ['\u0982', '\u0981', '\u09FA'],
                ['\u09AE', '\u09A3'],
                ['\u09A8', '\u09F7'],
                ['\u09AC', '"'],
                ['\u09B2', '\''],
                ['\u09B8', '\u09B6'],
                [',', '\u09B7'],
                ['.', ';'],
                ['\u09AF', '\u09DF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['as']
    },
    '\u0410\u0437\u04d9\u0440\u0431\u0430\u0458\u04b9\u0430\u043d\u04b9\u0430': {
        'name': 'Azerbaijani Cyrillic',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0458', '\u0408'],
                ['\u04AF', '\u04AE'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u04BB', '\u04BA'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u04B9', '\u04B8'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u049D', '\u049C'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['\u04D9', '\u04D8'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u0493', '\u0492'],
                ['\u0431', '\u0411'],
                ['\u04E9', '\u04E8'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['az-CYRL']
    },
    'Az\u0259rbaycanca': {
        'name': 'Azerbaijani Latin',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2166'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['\u00FC', '\u00DC'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', '\u0130'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00F6', '\u00D6'],
                ['\u011F', '\u011E'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u0131', 'I'],
                ['\u0259', '\u018F'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                ['\u00E7', '\u00C7'],
                ['\u015F', '\u015E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['az']
    },
    '\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f': {
        'name': 'Belarusian',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043a', '\u041a'],
                ['\u0435', '\u0415'],
                ['\u043d', '\u041d'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u045e', '\u040e'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\'', '\''],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044b', '\u042b'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043f', '\u041f'],
                ['\u0440', '\u0420'],
                ['\u043e', '\u041e'],
                ['\u043b', '\u041b'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044d', '\u042d'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['/', '|'],
                ['\u044f', '\u042f'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043c', '\u041c'],
                ['\u0456', '\u0406'],
                ['\u0442', '\u0422'],
                ['\u044c', '\u042c'],
                ['\u0431', '\u0411'],
                ['\u044e', '\u042e'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['be']
    },
    'Belgische / Belge': {
        'name': 'Belgian',
        'keys': [
            [
                ['\u00b2', '\u00b3'],
                ['&', '1', '|'],
                ['\u00e9', '2', '@'],
                ['"', '3', '#'],
                ['\'', '4'],
                ['(', '5'],
                ['\u00a7', '6', '^'],
                ['\u00e8', '7'],
                ['!', '8'],
                ['\u00e7', '9', '{'],
                ['\u00e0', '0', '}'],
                [')', '\u00b0'],
                ['-', '_'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['a', 'A'],
                ['z', 'Z'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['^', '\u00a8', '['],
                ['$', '*', ']'],
                ['\u03bc', '\u00a3', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['q', 'Q'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['m', 'M'],
                ['\u00f9', '%', '\u00b4'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['w', 'W'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                [',', '?'],
                [';', '.'],
                [':', '/'],
                ['=', '+', '~'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['nl-BE', 'fr-BE']
    },
    '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0424\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u043d': {
        'name': 'Bulgarian Phonetic',
        'keys': [
            [
                ['\u0447', '\u0427'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u044F', '\u042F'],
                ['\u0432', '\u0412'],
                ['\u0435', '\u0415'],
                ['\u0440', '\u0420'],
                ['\u0442', '\u0422'],
                ['\u044A', '\u042A'],
                ['\u0443', '\u0423'],
                ['\u0438', '\u0418'],
                ['\u043E', '\u041E'],
                ['\u043F', '\u041F'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u044E', '\u042E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0430', '\u0410'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0444', '\u0424'],
                ['\u0433', '\u0413'],
                ['\u0445', '\u0425'],
                ['\u0439', '\u0419'],
                ['\u043A', '\u041A'],
                ['\u043B', '\u041B'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0437', '\u0417'],
                ['\u044C', '\u042C'],
                ['\u0446', '\u0426'],
                ['\u0436', '\u0416'],
                ['\u0431', '\u0411'],
                ['\u043D', '\u041D'],
                ['\u043C', '\u041C'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['bg']
    },
    '\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438': {
        'name': 'Bulgarian BDS',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '?'],
                ['3', '+'],
                ['4', '"'],
                ['5', '%'],
                ['6', '='],
                ['7', ':'],
                ['8', '/'],
                ['9', '_'],
                ['0', '\u2116'],
                ['-', '\u0406'],
                ['=', 'V'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                [',', '\u044b'],
                ['\u0443', '\u0423'],
                ['\u0435', '\u0415'],
                ['\u0438', '\u0418'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u043a', '\u041a'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0437', '\u0417'],
                ['\u0446', '\u0426'],
                [';', '\u00a7'],
                ['(', ')']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u044c', '\u042c'],
                ['\u044f', '\u042f'],
                ['\u0430', '\u0410'],
                ['\u043e', '\u041e'],
                ['\u0436', '\u0416'],
                ['\u0433', '\u0413'],
                ['\u0442', '\u0422'],
                ['\u043d', '\u041d'],
                ['\u0412', '\u0412'],
                ['\u043c', '\u041c'],
                ['\u0447', '\u0427'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u042e', '\u044e'],
                ['\u0439', '\u0419'],
                ['\u044a', '\u042a'],
                ['\u044d', '\u042d'],
                ['\u0444', '\u0424'],
                ['\u0445', '\u0425'],
                ['\u043f', '\u041f'],
                ['\u0440', '\u0420'],
                ['\u043b', '\u041b'],
                ['\u0431', '\u0411'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ]
    },
    '\u09ac\u09be\u0982\u09b2\u09be': {
        'name': 'Bengali',
        'keys': [
            [
                [''],
                ['1', '', '\u09E7'],
                ['2', '', '\u09E8'],
                ['3', '\u09CD\u09B0', '\u09E9'],
                ['4', '\u09B0\u09CD', '\u09EA'],
                ['5', '\u099C\u09CD\u09B0', '\u09EB'],
                ['6', '\u09A4\u09CD\u09B7', '\u09EC'],
                ['7', '\u0995\u09CD\u09B0', '\u09ED'],
                ['8', '\u09B6\u09CD\u09B0', '\u09EE'],
                ['9', '(', '\u09EF'],
                ['0', ')', '\u09E6'],
                ['-', '\u0983'],
                ['\u09C3', '\u098B', '\u09E2', '\u09E0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u09CC', '\u0994', '\u09D7'],
                ['\u09C8', '\u0990'],
                ['\u09BE', '\u0986'],
                ['\u09C0', '\u0988', '\u09E3', '\u09E1'],
                ['\u09C2', '\u098A'],
                ['\u09AC', '\u09AD'],
                ['\u09B9', '\u0999'],
                ['\u0997', '\u0998'],
                ['\u09A6', '\u09A7'],
                ['\u099C', '\u099D'],
                ['\u09A1', '\u09A2', '\u09DC', '\u09DD'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u09CB', '\u0993', '\u09F4', '\u09F5'],
                ['\u09C7', '\u098F', '\u09F6', '\u09F7'],
                ['\u09CD', '\u0985', '\u09F8', '\u09F9'],
                ['\u09BF', '\u0987', '\u09E2', '\u098C'],
                ['\u09C1', '\u0989'],
                ['\u09AA', '\u09AB'],
                ['\u09B0', '', '\u09F0', '\u09F1'],
                ['\u0995', '\u0996'],
                ['\u09A4', '\u09A5'],
                ['\u099A', '\u099B'],
                ['\u099F', '\u09A0'],
                ['\u09BC', '\u099E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0982', '\u0981', '\u09FA'],
                ['\u09AE', '\u09A3'],
                ['\u09A8'],
                ['\u09AC'],
                ['\u09B2'],
                ['\u09B8', '\u09B6'],
                [',', '\u09B7'],
                ['.', '{'],
                ['\u09AF', '\u09DF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['bn']
    },
    'Bosanski': {
        'name': 'Bosnian',
        'keys': [
            [
                ['\u00B8', '\u00A8'],
                ['1', '!', '~'],
                ['2', '"', '\u02C7'],
                ['3', '#', '^'],
                ['4', '$', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '&', '\u02DB'],
                ['7', '/', '`'],
                ['8', '(', '\u02D9'],
                ['9', ')', '\u00B4'],
                ['0', '=', '\u02DD'],
                ['\'', '?', '\u00A8'],
                ['+', '*', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u0161', '\u0160', '\u00F7'],
                ['\u0111', '\u0110', '\u00D7'],
                ['\u017E', '\u017D', '\u00A4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K', '\u0142'],
                ['l', 'L', '\u0141'],
                ['\u010D', '\u010C'],
                ['\u0107', '\u0106', '\u00DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '\u00A7'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['-', '_', '\u00A9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['bs']
    },
    'Canadienne-fran\u00e7aise': {
        'name': 'Canadian French',
        'keys': [
            [
                ['#', '|', '\\'],
                ['1', '!', '\u00B1'],
                ['2', '"', '@'],
                ['3', '/', '\u00A3'],
                ['4', '$', '\u00A2'],
                ['5', '%', '\u00A4'],
                ['6', '?', '\u00AC'],
                ['7', '&', '\u00A6'],
                ['8', '*', '\u00B2'],
                ['9', '(', '\u00B3'],
                ['0', ')', '\u00BC'],
                ['-', '_', '\u00BD'],
                ['=', '+', '\u00BE'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O', '\u00A7'],
                ['p', 'P', '\u00B6'],
                ['^', '^', '['],
                ['\u00B8', '\u00A8', ']'],
                ['<', '>', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':', '~'],
                ['`', '`', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u00AB', '\u00BB', '\u00B0'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00B5'],
                [',', '\'', '\u00AF'],
                ['.', '.', '\u00AD'],
                ['\u00E9', '\u00C9', '\u00B4'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fr-CA']
    },
    '\u010cesky': {
        'name': 'Czech',
        'keys': [
            [
                [';', '\u00b0', '`', '~'],
                ['+', '1', '!'],
                ['\u011B', '2', '@'],
                ['\u0161', '3', '#'],
                ['\u010D', '4', '$'],
                ['\u0159', '5', '%'],
                ['\u017E', '6', '^'],
                ['\u00FD', '7', '&'],
                ['\u00E1', '8', '*'],
                ['\u00ED', '9', '('],
                ['\u00E9', '0', ')'],
                ['=', '%', '-', '_'],
                ['\u00B4', '\u02c7', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00FA', '/', '[', '{'],
                [')', '(', ']', '}'],
                ['\u00A8', '\'', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u016F', '"', ';', ':'],
                ['\u00A7', '!', '\u00a4', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|', '', '\u02dd'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '?', '<', '\u00d7'],
                ['.', ':', '>', '\u00f7'],
                ['-', '_', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['cs']
    },
    'Dansk': {
        'name': 'Danish',
        'keys': [
            [
                ['\u00bd', '\u00a7'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '\u00a4', '$'],
                ['5', '%', '\u20ac'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?'],
                ['\u00b4', '`', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e5', '\u00c5'],
                ['\u00a8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00e6', '\u00c6'],
                ['\u00f8', '\u00d8'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u03bc', '\u039c'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['da']
    },
    'Deutsch': {
        'name': 'German',
        'keys': [
            [
                ['^', '\u00b0'],
                ['1', '!'],
                ['2', '"', '\u00b2'],
                ['3', '\u00a7', '\u00b3'],
                ['4', '$'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['\u00df', '?', '\\'],
                ['\u00b4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '@'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00fc', '\u00dc'],
                ['+', '*', '~'],
                ['#', '\'']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f6', '\u00d6'],
                ['\u00e4', '\u00c4'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\u00a6'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00b5'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['de']
    },
    'Dingbats': {
        'name': 'Dingbats',
        'keys': [
            [
                ['\u2764', '\u2765', '\u2766', '\u2767'],
                ['\u278a', '\u2780', '\u2776', '\u2768'],
                ['\u278b', '\u2781', '\u2777', '\u2769'],
                ['\u278c', '\u2782', '\u2778', '\u276a'],
                ['\u278d', '\u2783', '\u2779', '\u276b'],
                ['\u278e', '\u2784', '\u277a', '\u276c'],
                ['\u278f', '\u2785', '\u277b', '\u276d'],
                ['\u2790', '\u2786', '\u277c', '\u276e'],
                ['\u2791', '\u2787', '\u277d', '\u276f'],
                ['\u2792', '\u2788', '\u277e', '\u2770'],
                ['\u2793', '\u2789', '\u277f', '\u2771'],
                ['\u2795', '\u2796', '\u274c', '\u2797'],
                ['\u2702', '\u2704', '\u2701', '\u2703'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u2714', '\u2705', '\u2713'],
                ['\u2718', '\u2715', '\u2717', '\u2716'],
                ['\u271a', '\u2719', '\u271b', '\u271c'],
                ['\u271d', '\u271e', '\u271f', '\u2720'],
                ['\u2722', '\u2723', '\u2724', '\u2725'],
                ['\u2726', '\u2727', '\u2728', '\u2756'],
                ['\u2729', '\u272a', '\u272d', '\u2730'],
                ['\u272c', '\u272b', '\u272e', '\u272f'],
                ['\u2736', '\u2731', '\u2732', '\u2749'],
                ['\u273b', '\u273c', '\u273d', '\u273e'],
                ['\u2744', '\u2745', '\u2746', '\u2743'],
                ['\u2733', '\u2734', '\u2735', '\u2721'],
                ['\u2737', '\u2738', '\u2739', '\u273a']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u2799', '\u279a', '\u2798', '\u2758'],
                ['\u27b5', '\u27b6', '\u27b4', '\u2759'],
                ['\u27b8', '\u27b9', '\u27b7', '\u275a'],
                ['\u2794', '\u279c', '\u27ba', '\u27bb'],
                ['\u279d', '\u279e', '\u27a1', '\u2772'],
                ['\u27a9', '\u27aa', '\u27ab', '\u27ac'],
                ['\u27a4', '\u27a3', '\u27a2', '\u279b'],
                ['\u27b3', '\u27bc', '\u27bd', '\u2773'],
                ['\u27ad', '\u27ae', '\u27af', '\u27b1'],
                ['\u27a8', '\u27a6', '\u27a5', '\u27a7'],
                ['\u279f', '\u27a0', '\u27be', '\u27b2'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u270c', '\u270b', '\u270a', '\u270d'],
                ['\u274f', '\u2750', '\u2751', '\u2752'],
                ['\u273f', '\u2740', '\u2741', '\u2742'],
                ['\u2747', '\u2748', '\u274a', '\u274b'],
                ['\u2757', '\u2755', '\u2762', '\u2763'],
                ['\u2753', '\u2754', '\u27b0', '\u27bf'],
                ['\u270f', '\u2710', '\u270e', '\u2774'],
                ['\u2712', '\u2711', '\u274d', '\u274e'],
                ['\u2709', '\u2706', '\u2708', '\u2707'],
                ['\u275b', '\u275d', '\u2761', '\u2775'],
                ['\u275c', '\u275e', '\u275f', '\u2760'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ]
    },
    '\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0': {
        'name': 'Divehi',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u07ab', '\u00d7'],
                ['\u07ae', '\u2019'],
                ['\u07a7', '\u201c'],
                ['\u07a9', '/'],
                ['\u07ad', ':'],
                ['\u078e', '\u07a4'],
                ['\u0783', '\u079c'],
                ['\u0789', '\u07a3'],
                ['\u078c', '\u07a0'],
                ['\u0780', '\u0799'],
                ['\u078d', '\u00f7'],
                ['[', '{'],
                [']', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u07a8', '<'],
                ['\u07aa', '>'],
                ['\u07b0', '.', ',', ','],
                ['\u07a6', '\u060c'],
                ['\u07ac', '"'],
                ['\u0788', '\u07a5'],
                ['\u0787', '\u07a2'],
                ['\u0782', '\u0798'],
                ['\u0786', '\u079a'],
                ['\u078a', '\u07a1'],
                ['\ufdf2', '\u061b', ';', ';'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['\u0792', '\u0796'],
                ['\u0791', '\u0795'],
                ['\u0790', '\u078f'],
                ['\u0794', '\u0797', '\u200D'],
                ['\u0785', '\u079f', '\u200C'],
                ['\u078b', '\u079b', '\u200E'],
                ['\u0784', '\u079D', '\u200F'],
                ['\u0781', '\\'],
                ['\u0793', '\u079e'],
                ['\u07af', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['dv']
    },
    'Dvorak': {
        'name': 'Dvorak',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['[', '{'],
                [']', '}'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\'', '"'],
                [',', '<'],
                ['.', '>'],
                ['p', 'P'],
                ['y', 'Y'],
                ['f', 'F'],
                ['g', 'G'],
                ['c', 'C'],
                ['r', 'R'],
                ['l', 'L'],
                ['/', '?'],
                ['=', '+'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['o', 'O'],
                ['e', 'E'],
                ['u', 'U'],
                ['i', 'I'],
                ['d', 'D'],
                ['h', 'H'],
                ['t', 'T'],
                ['n', 'N'],
                ['s', 'S'],
                ['-', '_'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [';', ':'],
                ['q', 'Q'],
                ['j', 'J'],
                ['k', 'K'],
                ['x', 'X'],
                ['b', 'B'],
                ['m', 'M'],
                ['w', 'W'],
                ['v', 'V'],
                ['z', 'Z'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ]
    },
    '\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac': {
        'name': 'Greek',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a3'],
                ['5', '%', '\u00a7'],
                ['6', '^', '\u00b6'],
                ['7', '&'],
                ['8', '*', '\u00a4'],
                ['9', '(', '\u00a6'],
                ['0', ')', '\u00ba'],
                ['-', '_', '\u00b1'],
                ['=', '+', '\u00bd'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                [';', ':'],
                ['\u03c2', '^'],
                ['\u03b5', '\u0395'],
                ['\u03c1', '\u03a1'],
                ['\u03c4', '\u03a4'],
                ['\u03c5', '\u03a5'],
                ['\u03b8', '\u0398'],
                ['\u03b9', '\u0399'],
                ['\u03bf', '\u039f'],
                ['\u03c0', '\u03a0'],
                ['[', '{', '\u201c'],
                [']', '}', '\u201d'],
                ['\\', '|', '\u00ac']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u03b1', '\u0391'],
                ['\u03c3', '\u03a3'],
                ['\u03b4', '\u0394'],
                ['\u03c6', '\u03a6'],
                ['\u03b3', '\u0393'],
                ['\u03b7', '\u0397'],
                ['\u03be', '\u039e'],
                ['\u03ba', '\u039a'],
                ['\u03bb', '\u039b'],
                ['\u0384', '\u00a8', '\u0385'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['\u03b6', '\u0396'],
                ['\u03c7', '\u03a7'],
                ['\u03c8', '\u03a8'],
                ['\u03c9', '\u03a9'],
                ['\u03b2', '\u0392'],
                ['\u03bd', '\u039d'],
                ['\u03bc', '\u039c'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['el']
    },
    'Eesti': {
        'name': 'Estonian',
        'keys': [
            [
                ['\u02C7', '~'],
                ['1', '!'],
                ['2', '"', '@', '@'],
                ['3', '#', '\u00A3', '\u00A3'],
                ['4', '\u00A4', '$', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{', '{'],
                ['8', '(', '[', '['],
                ['9', ')', ']', ']'],
                ['0', '=', '}', '}'],
                ['+', '?', '\\', '\\'],
                ['\u00B4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00FC', '\u00DC'],
                ['\u00F5', '\u00D5', '\u00A7', '\u00A7'],
                ['\'', '*', '\u00BD', '\u00BD']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0161', '\u0160'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00F6', '\u00D6'],
                ['\u00E4', '\u00C4', '^', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|', '|'],
                ['z', 'Z', '\u017E', '\u017D'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['et']
    },
    'Espa\u00f1ol': {
        'name': 'Spanish',
        'keys': [
            [
                ['\u00ba', '\u00aa', '\\'],
                ['1', '!', '|'],
                ['2', '"', '@'],
                ['3', '\'', '#'],
                ['4', '$', '~'],
                ['5', '%', '\u20ac'],
                ['6', '&', '\u00ac'],
                ['7', '/'],
                ['8', '('],
                ['9', ')'],
                ['0', '='],
                ['\'', '?'],
                ['\u00a1', '\u00bf'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['`', '^', '['],
                ['+', '*', ']'],
                ['\u00e7', '\u00c7', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f1', '\u00d1'],
                ['\u00b4', '\u00a8', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['es']
    },
    '\u062f\u0631\u06cc': {
        'name': 'Dari',
        'keys': [
            [
                ['\u200D', '\u00F7', '~'],
                ['\u06F1', '!', '`'],
                ['\u06F2', '\u066C', '@'],
                ['\u06F3', '\u066B', '#'],
                ['\u06F4', '\u060B', '$'],
                ['\u06F5', '\u066A', '%'],
                ['\u06F6', '\u00D7', '^'],
                ['\u06F7', '\u060C', '&'],
                ['\u06F8', '*', '\u2022'],
                ['\u06F9', ')', '\u200E'],
                ['\u06F0', '(', '\u200F'],
                ['-', '\u0640', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u0652', '\u00B0'],
                ['\u0635', '\u064C'],
                ['\u062B', '\u064D', '\u20AC'],
                ['\u0642', '\u064B', '\uFD3E'],
                ['\u0641', '\u064F', '\uFD3F'],
                ['\u063A', '\u0650', '\u0656'],
                ['\u0639', '\u064E', '\u0659'],
                ['\u0647', '\u0651', '\u0655'],
                ['\u062E', ']', '\''],
                ['\u062D', '[', '"'],
                ['\u062C', '}', '\u0681'],
                ['\u0686', '{', '\u0685'],
                ['\\', '|', '?']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u0624', '\u069A'],
                ['\u0633', '\u0626', '\u06CD'],
                ['\u06CC', '\u064A', '\u0649'],
                ['\u0628', '\u0625', '\u06D0'],
                ['\u0644', '\u0623', '\u06B7'],
                ['\u0627', '\u0622', '\u0671'],
                ['\u062A', '\u0629', '\u067C'],
                ['\u0646', '\u00BB', '\u06BC'],
                ['\u0645', '\u00AB', '\u06BA'],
                ['\u06A9', ':', ';'],
                ['\u06AF', '\u061B', '\u06AB'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0638', '\u0643', '\u06D2'],
                ['\u0637', '\u0653', '\u0691'],
                ['\u0632', '\u0698', '\u0696'],
                ['\u0631', '\u0670', '\u0693'],
                ['\u0630', '\u200C', '\u0688'],
                ['\u062F', '\u0654', '\u0689'],
                ['\u067E', '\u0621', '\u0679'],
                ['\u0648', '>', ','],
                ['.', '<', '\u06C7'],
                ['/', '\u061F', '\u06C9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fa-AF']
    },
    '\u0641\u0627\u0631\u0633\u06cc': {
        'name': 'Farsi',
        'keys': [
            [
                ['\u067e', '\u0651 '],
                ['1', '!', '\u00a1', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a4', '\u00a3'],
                ['5', '%', '\u20ac'],
                ['6', '^', '\u00bc'],
                ['7', '&', '\u00bd'],
                ['8', '*', '\u00be'],
                ['9', '(', '\u2018'],
                ['0', ')', '\u2019'],
                ['-', '_', '\u00a5'],
                ['=', '+', '\u00d7', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u064e'],
                ['\u0635', '\u064b'],
                ['\u062b', '\u064f'],
                ['\u0642', '\u064c'],
                ['\u0641', '\u0644'],
                ['\u063a', '\u0625'],
                ['\u0639', '\u2018'],
                ['\u0647', '\u00f7'],
                ['\u062e', '\u00d7'],
                ['\u062d', '\u061b'],
                ['\u062c', '<'],
                ['\u0686', '>'],
                ['\u0698', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u0650'],
                ['\u0633', '\u064d'],
                ['\u064a', ']'],
                ['\u0628', '['],
                ['\u0644', '\u0644'],
                ['\u0627', '\u0623'],
                ['\u062a', '\u0640'],
                ['\u0646', '\u060c'],
                ['\u0645', '\\'],
                ['\u06af', ':'],
                ['\u0643', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0638', '~'],
                ['\u0637', '\u0652'],
                ['\u0632', '}'],
                ['\u0631', '{'],
                ['\u0630', '\u0644'],
                ['\u062f', '\u0622'],
                ['\u0626', '\u0621'],
                ['\u0648', ','],
                ['.', '.'],
                ['/', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['fa']
    },
    'F\u00f8royskt': {
        'name': 'Faeroese',
        'keys': [
            [
                ['\u00BD', '\u00A7'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00A3'],
                ['4', '\u00A4', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?'],
                ['\u00B4', '`', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00E5', '\u00C5', '\u00A8'],
                ['\u00F0', '\u00D0', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00E6', '\u00C6'],
                ['\u00F8', '\u00D8', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00B5'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fo']
    },
    'Fran\u00e7ais': {
        'name': 'French',
        'keys': [
            [
                ['\u00b2', '\u00b3'],
                ['&', '1'],
                ['\u00e9', '2', '~'],
                ['"', '3', '#'],
                ['\'', '4', '{'],
                ['(', '5', '['],
                ['-', '6', '|'],
                ['\u00e8', '7', '`'],
                ['_', '8', '\\'],
                ['\u00e7', '9', '^'],
                ['\u00e0', '0', '@'],
                [')', '\u00b0', ']'],
                ['=', '+', '}'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['a', 'A'],
                ['z', 'Z'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['^', '\u00a8'],
                ['$', '\u00a3', '\u00a4'],
                ['*', '\u03bc']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['q', 'Q'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['m', 'M'],
                ['\u00f9', '%'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['w', 'W'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                [',', '?'],
                [';', '.'],
                [':', '/'],
                ['!', '\u00a7'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fr']
    },
    'Gaeilge': {
        'name': 'Irish / Gaelic',
        'keys': [
            [
                ['`', '\u00AC', '\u00A6', '\u00A6'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u00A3'],
                ['4', '$', '\u20AC'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u00E9', '\u00C9'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y', '\u00FD', '\u00DD'],
                ['u', 'U', '\u00FA', '\u00DA'],
                ['i', 'I', '\u00ED', '\u00CD'],
                ['o', 'O', '\u00F3', '\u00D3'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['#', '~']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00E1', '\u00C1'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '@', '\u00B4', '`'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ga', 'gd']
    },
    '\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0': {
        'name': 'Gujarati',
        'keys': [
            [
                [''],
                ['1', '\u0A8D', '\u0AE7'],
                ['2', '\u0AC5', '\u0AE8'],
                ['3', '\u0ACD\u0AB0', '\u0AE9'],
                ['4', '\u0AB0\u0ACD', '\u0AEA'],
                ['5', '\u0A9C\u0ACD\u0A9E', '\u0AEB'],
                ['6', '\u0AA4\u0ACD\u0AB0', '\u0AEC'],
                ['7', '\u0A95\u0ACD\u0AB7', '\u0AED'],
                ['8', '\u0AB6\u0ACD\u0AB0', '\u0AEE'],
                ['9', '(', '\u0AEF'],
                ['0', ')', '\u0AE6'],
                ['-', '\u0A83'],
                ['\u0AC3', '\u0A8B', '\u0AC4', '\u0AE0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0ACC', '\u0A94'],
                ['\u0AC8', '\u0A90'],
                ['\u0ABE', '\u0A86'],
                ['\u0AC0', '\u0A88'],
                ['\u0AC2', '\u0A8A'],
                ['\u0AAC', '\u0AAD'],
                ['\u0AB9', '\u0A99'],
                ['\u0A97', '\u0A98'],
                ['\u0AA6', '\u0AA7'],
                ['\u0A9C', '\u0A9D'],
                ['\u0AA1', '\u0AA2'],
                ['\u0ABC', '\u0A9E'],
                ['\u0AC9', '\u0A91']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0ACB', '\u0A93'],
                ['\u0AC7', '\u0A8F'],
                ['\u0ACD', '\u0A85'],
                ['\u0ABF', '\u0A87'],
                ['\u0AC1', '\u0A89'],
                ['\u0AAA', '\u0AAB'],
                ['\u0AB0'],
                ['\u0A95', '\u0A96'],
                ['\u0AA4', '\u0AA5'],
                ['\u0A9A', '\u0A9B'],
                ['\u0A9F', '\u0AA0'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0A82', '\u0A81', '', '\u0AD0'],
                ['\u0AAE', '\u0AA3'],
                ['\u0AA8'],
                ['\u0AB5'],
                ['\u0AB2', '\u0AB3'],
                ['\u0AB8', '\u0AB6'],
                [',', '\u0AB7'],
                ['.', '\u0964', '\u0965', '\u0ABD'],
                ['\u0AAF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['gu']
    },
    '\u05e2\u05d1\u05e8\u05d9\u05ea': {
        'name': 'Hebrew',
        'keys': [
            [
                ['~', '`'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$', '\u20aa'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['/', 'Q'],
                ['\'', 'W'],
                ['\u05e7', 'E', '\u20ac'],
                ['\u05e8', 'R'],
                ['\u05d0', 'T'],
                ['\u05d8', 'Y'],
                ['\u05d5', 'U', '\u05f0'],
                ['\u05df', 'I'],
                ['\u05dd', 'O'],
                ['\u05e4', 'P'],
                ['\\', '|'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u05e9', 'A'],
                ['\u05d3', 'S'],
                ['\u05d2', 'D'],
                ['\u05db', 'F'],
                ['\u05e2', 'G'],
                ['\u05d9', 'H', '\u05f2'],
                ['\u05d7', 'J', '\u05f1'],
                ['\u05dc', 'K'],
                ['\u05da', 'L'],
                ['\u05e3', ':'],
                [',', '"'],
                [']', '}'],
                ['[', '{']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u05d6', 'Z'],
                ['\u05e1', 'X'],
                ['\u05d1', 'C'],
                ['\u05d4', 'V'],
                ['\u05e0', 'B'],
                ['\u05de', 'N'],
                ['\u05e6', 'M'],
                ['\u05ea', '>'],
                ['\u05e5', '<'],
                ['.', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['he']
    },
    '\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940': {
        'name': 'Devanagari',
        'keys': [
            [
                ['\u094A', '\u0912'],
                ['1', '\u090D', '\u0967'],
                ['2', '\u0945', '\u0968'],
                ['3', '\u094D\u0930', '\u0969'],
                ['4', '\u0930\u094D', '\u096A'],
                ['5', '\u091C\u094D\u091E', '\u096B'],
                ['6', '\u0924\u094D\u0930', '\u096C'],
                ['7', '\u0915\u094D\u0937', '\u096D'],
                ['8', '\u0936\u094D\u0930', '\u096E'],
                ['9', '(', '\u096F'],
                ['0', ')', '\u0966'],
                ['-', '\u0903'],
                ['\u0943', '\u090B', '\u0944', '\u0960'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u094C', '\u0914'],
                ['\u0948', '\u0910'],
                ['\u093E', '\u0906'],
                ['\u0940', '\u0908', '\u0963', '\u0961'],
                ['\u0942', '\u090A'],
                ['\u092C', '\u092D'],
                ['\u0939', '\u0919'],
                ['\u0917', '\u0918', '\u095A'],
                ['\u0926', '\u0927'],
                ['\u091C', '\u091D', '\u095B'],
                ['\u0921', '\u0922', '\u095C', '\u095D'],
                ['\u093C', '\u091E'],
                ['\u0949', '\u0911']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u094B', '\u0913'],
                ['\u0947', '\u090F'],
                ['\u094D', '\u0905'],
                ['\u093F', '\u0907', '\u0962', '\u090C'],
                ['\u0941', '\u0909'],
                ['\u092A', '\u092B', '', '\u095E'],
                ['\u0930', '\u0931'],
                ['\u0915', '\u0916', '\u0958', '\u0959'],
                ['\u0924', '\u0925'],
                ['\u091A', '\u091B', '\u0952'],
                ['\u091F', '\u0920', '', '\u0951'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0946', '\u090E', '\u0953'],
                ['\u0902', '\u0901', '', '\u0950'],
                ['\u092E', '\u0923', '\u0954'],
                ['\u0928', '\u0929'],
                ['\u0935', '\u0934'],
                ['\u0932', '\u0933'],
                ['\u0938', '\u0936'],
                [',', '\u0937', '\u0970'],
                ['.', '\u0964', '\u0965', '\u093D'],
                ['\u092F', '\u095F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['hi-DEVA']
    },
    '\u0939\u093f\u0902\u0926\u0940': {
        'name': 'Hindi',
        'keys': [
            [
                ['\u200d', '\u200c', '`', '~'],
                ['1', '\u090D', '\u0967', '!'],
                ['2', '\u0945', '\u0968', '@'],
                ['3', '\u094D\u0930', '\u0969', '#'],
                ['4', '\u0930\u094D', '\u096A', '$'],
                ['5', '\u091C\u094D\u091E', '\u096B', '%'],
                ['6', '\u0924\u094D\u0930', '\u096C', '^'],
                ['7', '\u0915\u094D\u0937', '\u096D', '&'],
                ['8', '\u0936\u094D\u0930', '\u096E', '*'],
                ['9', '(', '\u096F', '('],
                ['0', ')', '\u0966', ')'],
                ['-', '\u0903', '-', '_'],
                ['\u0943', '\u090B', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u094C', '\u0914'],
                ['\u0948', '\u0910'],
                ['\u093E', '\u0906'],
                ['\u0940', '\u0908'],
                ['\u0942', '\u090A'],
                ['\u092C', '\u092D'],
                ['\u0939', '\u0919'],
                ['\u0917', '\u0918'],
                ['\u0926', '\u0927'],
                ['\u091C', '\u091D'],
                ['\u0921', '\u0922', '[', '{'],
                ['\u093C', '\u091E', ']', '}'],
                ['\u0949', '\u0911', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u094B', '\u0913'],
                ['\u0947', '\u090F'],
                ['\u094D', '\u0905'],
                ['\u093F', '\u0907'],
                ['\u0941', '\u0909'],
                ['\u092A', '\u092B'],
                ['\u0930', '\u0931'],
                ['\u0915', '\u0916'],
                ['\u0924', '\u0925'],
                ['\u091A', '\u091B', ';', ':'],
                ['\u091F', '\u0920', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0902', '\u0901', '', '\u0950'],
                ['\u092E', '\u0923'],
                ['\u0928'],
                ['\u0935'],
                ['\u0932', '\u0933'],
                ['\u0938', '\u0936'],
                [',', '\u0937', ',', '<'],
                ['.', '\u0964', '.', '>'],
                ['\u092F', '\u095F', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['hi']
    },
    '\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0574\u0578\u0582\u057f\u0584': {
        'name': 'Western Armenian',
        'keys': [
            [
                ['\u055D', '\u055C'],
                [':', '1'],
                ['\u0571', '\u0541'],
                ['\u0575', '\u0545'],
                ['\u055B', '3'],
                [',', '4'],
                ['-', '9'],
                ['.', '\u0587'],
                ['\u00AB', '('],
                ['\u00BB', ')'],
                ['\u0585', '\u0555'],
                ['\u057C', '\u054C'],
                ['\u056A', '\u053A'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u056D', '\u053D'],
                ['\u057E', '\u054E'],
                ['\u0567', '\u0537'],
                ['\u0580', '\u0550'],
                ['\u0564', '\u0534'],
                ['\u0565', '\u0535'],
                ['\u0568', '\u0538'],
                ['\u056B', '\u053B'],
                ['\u0578', '\u0548'],
                ['\u0562', '\u0532'],
                ['\u0579', '\u0549'],
                ['\u057B', '\u054B'],
                ['\'', '\u055E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0561', '\u0531'],
                ['\u057D', '\u054D'],
                ['\u057F', '\u054F'],
                ['\u0586', '\u0556'],
                ['\u056F', '\u053F'],
                ['\u0570', '\u0540'],
                ['\u0573', '\u0543'],
                ['\u0584', '\u0554'],
                ['\u056C', '\u053C'],
                ['\u0569', '\u0539'],
                ['\u0583', '\u0553'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0566', '\u0536'],
                ['\u0581', '\u0551'],
                ['\u0563', '\u0533'],
                ['\u0582', '\u0552'],
                ['\u057A', '\u054A'],
                ['\u0576', '\u0546'],
                ['\u0574', '\u0544'],
                ['\u0577', '\u0547'],
                ['\u0572', '\u0542'],
                ['\u056E', '\u053E'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['hy-AREVMATA']
    },
    '\u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u0561\u0580\u0565\u0582\u0565\u056c\u0584': {
        'name': 'Eastern Armenian',
        'keys': [
            [
                ['\u055D', '\u055C'],
                [':', '1'],
                ['\u0571', '\u0541'],
                ['\u0575', '\u0545'],
                ['\u055B', '3'],
                [',', '4'],
                ['-', '9'],
                ['.', '\u0587'],
                ['\u00AB', '('],
                ['\u00BB', ')'],
                ['\u0585', '\u0555'],
                ['\u057C', '\u054C'],
                ['\u056A', '\u053A'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u056D', '\u053D'],
                ['\u0582', '\u0552'],
                ['\u0567', '\u0537'],
                ['\u0580', '\u0550'],
                ['\u057F', '\u054F'],
                ['\u0565', '\u0535'],
                ['\u0568', '\u0538'],
                ['\u056B', '\u053B'],
                ['\u0578', '\u0548'],
                ['\u057A', '\u054A'],
                ['\u0579', '\u0549'],
                ['\u057B', '\u054B'],
                ['\'', '\u055E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0561', '\u0531'],
                ['\u057D', '\u054D'],
                ['\u0564', '\u0534'],
                ['\u0586', '\u0556'],
                ['\u0584', '\u0554'],
                ['\u0570', '\u0540'],
                ['\u0573', '\u0543'],
                ['\u056F', '\u053F'],
                ['\u056C', '\u053C'],
                ['\u0569', '\u0539'],
                ['\u0583', '\u0553'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0566', '\u0536'],
                ['\u0581', '\u0551'],
                ['\u0563', '\u0533'],
                ['\u057E', '\u054E'],
                ['\u0562', '\u0532'],
                ['\u0576', '\u0546'],
                ['\u0574', '\u0544'],
                ['\u0577', '\u0547'],
                ['\u0572', '\u0542'],
                ['\u056E', '\u053E'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['hy']
    },
    '\u00cdslenska': {
        'name': 'Icelandic',
        'keys': [
            [
                ['\u00B0', '\u00A8', '\u00B0'],
                ['1', '!'],
                ['2', '"'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['\u00F6', '\u00D6', '\\'],
                ['-', '_'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '@'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00F0', '\u00D0'],
                ['\'', '?', '~'],
                ['+', '*', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00E6', '\u00C6'],
                ['\u00B4', '\'', '^'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00B5'],
                [',', ';'],
                ['.', ':'],
                ['\u00FE', '\u00DE'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['is']
    },
    'Italiano': {
        'name': 'Italian',
        'keys': [
            [
                ['\\', '|'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u00a3'],
                ['4', '$', '\u20ac'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/'],
                ['8', '('],
                ['9', ')'],
                ['0', '='],
                ['\'', '?'],
                ['\u00ec', '^'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e8', '\u00e9', '[', '{'],
                ['+', '*', ']', '}'],
                ['\u00f9', '\u00a7']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f2', '\u00e7', '@'],
                ['\u00e0', '\u00b0', '#'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['it']
    },
    '\u65e5\u672c\u8a9e': {
        'name': 'Japanese Hiragana/Katakana',
        'keys': [
            [
                ['\uff5e'],
                ['\u306c', '\u30cc'],
                ['\u3075', '\u30d5'],
                ['\u3042', '\u30a2', '\u3041', '\u30a1'],
                ['\u3046', '\u30a6', '\u3045', '\u30a5'],
                ['\u3048', '\u30a8', '\u3047', '\u30a7'],
                ['\u304a', '\u30aa', '\u3049', '\u30a9'],
                ['\u3084', '\u30e4', '\u3083', '\u30e3'],
                ['\u3086', '\u30e6', '\u3085', '\u30e5'],
                ['\u3088', '\u30e8', '\u3087', '\u30e7'],
                ['\u308f', '\u30ef', '\u3092', '\u30f2'],
                ['\u307b', '\u30db', '\u30fc', '\uff1d'],
                ['\u3078', '\u30d8', '\uff3e', '\uff5e'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u305f', '\u30bf'],
                ['\u3066', '\u30c6'],
                ['\u3044', '\u30a4', '\u3043', '\u30a3'],
                ['\u3059', '\u30b9'],
                ['\u304b', '\u30ab'],
                ['\u3093', '\u30f3'],
                ['\u306a', '\u30ca'],
                ['\u306b', '\u30cb'],
                ['\u3089', '\u30e9'],
                ['\u305b', '\u30bb'],
                ['\u3001', '\u3001', '\uff20', '\u2018'],
                ['\u3002', '\u3002', '\u300c', '\uff5b'],
                ['\uffe5', '', '', '\uff0a'],
                ['\u309B', '"', '\uffe5', '\uff5c']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u3061', '\u30c1'],
                ['\u3068', '\u30c8'],
                ['\u3057', '\u30b7'],
                ['\u306f', '\u30cf'],
                ['\u304d', '\u30ad'],
                ['\u304f', '\u30af'],
                ['\u307e', '\u30de'],
                ['\u306e', '\u30ce'],
                ['\u308c', '\u30ec', '\uff1b', '\uff0b'],
                ['\u3051', '\u30b1', '\uff1a', '\u30f6'],
                ['\u3080', '\u30e0', '\u300d', '\uff5d'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u3064', '\u30c4'],
                ['\u3055', '\u30b5'],
                ['\u305d', '\u30bd'],
                ['\u3072', '\u30d2'],
                ['\u3053', '\u30b3'],
                ['\u307f', '\u30df'],
                ['\u3082', '\u30e2'],
                ['\u306d', '\u30cd', '\u3001', '\uff1c'],
                ['\u308b', '\u30eb', '\u3002', '\uff1e'],
                ['\u3081', '\u30e1', '\u30fb', '\uff1f'],
                ['\u308d', '\u30ed', '', '\uff3f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ja']
    },
    '\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8': {
        'name': 'Georgian',
        'keys': [
            [
                ['\u201E', '\u201C'],
                ['!', '1'],
                ['?', '2'],
                ['\u2116', '3'],
                ['\u00A7', '4'],
                ['%', '5'],
                [':', '6'],
                ['.', '7'],
                [';', '8'],
                [',', '9'],
                ['/', '0'],
                ['\u2013', '-'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u10E6', '\u10E6'],
                ['\u10EF', '\u10EF'],
                ['\u10E3', '\u10E3'],
                ['\u10D9', '\u10D9'],
                ['\u10D4', '\u10D4', '\u10F1'],
                ['\u10DC', '\u10DC'],
                ['\u10D2', '\u10D2'],
                ['\u10E8', '\u10E8'],
                ['\u10EC', '\u10EC'],
                ['\u10D6', '\u10D6'],
                ['\u10EE', '\u10EE', '\u10F4'],
                ['\u10EA', '\u10EA'],
                ['(', ')']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u10E4', '\u10E4', '\u10F6'],
                ['\u10EB', '\u10EB'],
                ['\u10D5', '\u10D5', '\u10F3'],
                ['\u10D7', '\u10D7'],
                ['\u10D0', '\u10D0'],
                ['\u10DE', '\u10DE'],
                ['\u10E0', '\u10E0'],
                ['\u10DD', '\u10DD'],
                ['\u10DA', '\u10DA'],
                ['\u10D3', '\u10D3'],
                ['\u10DF', '\u10DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u10ED', '\u10ED'],
                ['\u10E9', '\u10E9'],
                ['\u10E7', '\u10E7'],
                ['\u10E1', '\u10E1'],
                ['\u10DB', '\u10DB'],
                ['\u10D8', '\u10D8', '\u10F2'],
                ['\u10E2', '\u10E2'],
                ['\u10E5', '\u10E5'],
                ['\u10D1', '\u10D1'],
                ['\u10F0', '\u10F0', '\u10F5'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ka']
    },
    '\u049a\u0430\u0437\u0430\u049b\u0448\u0430': {
        'name': 'Kazakh',
        'keys': [
            [
                ['(', ')'],
                ['"', '!'],
                ['\u04d9', '\u04d8'],
                ['\u0456', '\u0406'],
                ['\u04a3', '\u04a2'],
                ['\u0493', '\u0492'],
                [',', ';'],
                ['.', ':'],
                ['\u04af', '\u04ae'],
                ['\u04b1', '\u04b0'],
                ['\u049b', '\u049a'],
                ['\u04e9', '\u04e8'],
                ['\u04bb', '\u04ba'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['\u2116', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['kk']
    },
    '\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a': {
        'name': 'Khmer',
        'keys': [
            [
                ['\u00AB', '\u00BB', '\u200D'],
                ['\u17E1', '!', '\u200C', '\u17F1'],
                ['\u17E2', '\u17D7', '@', '\u17F2'],
                ['\u17E3', '"', '\u17D1', '\u17F3'],
                ['\u17E4', '\u17DB', '$', '\u17F4'],
                ['\u17E5', '%', '\u20AC', '\u17F5'],
                ['\u17E6', '\u17CD', '\u17D9', '\u17F6'],
                ['\u17E7', '\u17D0', '\u17DA', '\u17F7'],
                ['\u17E8', '\u17CF', '*', '\u17F8'],
                ['\u17E9', '(', '{', '\u17F9'],
                ['\u17E0', ')', '}', '\u17F0'],
                ['\u17A5', '\u17CC', 'x'],
                ['\u17B2', '=', '\u17CE'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u1786', '\u1788', '\u17DC', '\u19E0'],
                ['\u17B9', '\u17BA', '\u17DD', '\u19E1'],
                ['\u17C1', '\u17C2', '\u17AF', '\u19E2'],
                ['\u179A', '\u17AC', '\u17AB', '\u19E3'],
                ['\u178F', '\u1791', '\u17A8', '\u19E4'],
                ['\u1799', '\u17BD', '\u1799\u17BE\u1784', '\u19E5'],
                ['\u17BB', '\u17BC', '', '\u19E6'],
                ['\u17B7', '\u17B8', '\u17A6', '\u19E7'],
                ['\u17C4', '\u17C5', '\u17B1', '\u19E8'],
                ['\u1795', '\u1797', '\u17B0', '\u19E9'],
                ['\u17C0', '\u17BF', '\u17A9', '\u19EA'],
                ['\u17AA', '\u17A7', '\u17B3', '\u19EB'],
                ['\u17AE', '\u17AD', '\\']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u17B6', '\u17B6\u17C6', '\u17B5', '\u19EC'],
                ['\u179F', '\u17C3', '', '\u19ED'],
                ['\u178A', '\u178C', '\u17D3', '\u19EE'],
                ['\u1790', '\u1792', '', '\u19EF'],
                ['\u1784', '\u17A2', '\u17A4', '\u19F0'],
                ['\u17A0', '\u17C7', '\u17A3', '\u19F1'],
                ['\u17D2', '\u1789', '\u17B4', '\u19F2'],
                ['\u1780', '\u1782', '\u179D', '\u19F3'],
                ['\u179B', '\u17A1', '\u17D8', '\u19F4'],
                ['\u17BE', '\u17C4\u17C7', '\u17D6', '\u19F5'],
                ['\u17CB', '\u17C9', '\u17C8', '\u19F6'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u178B', '\u178D', '|', '\u19F7'],
                ['\u1781', '\u1783', '\u1781\u17D2\u1789\u17BB\u17C6', '\u19F8'],
                ['\u1785', '\u1787', '-', '\u19F9'],
                ['\u179C', '\u17C1\u17C7', '+', '\u19FA'],
                ['\u1794', '\u1796', '\u179E', '\u19FB'],
                ['\u1793', '\u178E', '[', '\u19FC'],
                ['\u1798', '\u17C6', ']', '\u19FD'],
                ['\u17BB\u17C6', '\u17BB\u17C7', ',', '\u19FE'],
                ['\u17D4', '\u17D5', '.', '\u19FF'],
                ['\u17CA', '?', '/'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                ['\u200B', ' ', '\u00A0', ' '],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['km']
    },
    '\u0c95\u0ca8\u0ccd\u0ca8\u0ca1': {
        'name': 'Kannada',
        'keys': [
            [
                ['\u0CCA', '\u0C92'],
                ['1', '', '\u0CE7'],
                ['2', '', '\u0CE8'],
                ['3', '\u0CCD\u0CB0', '\u0CE9'],
                ['4', '\u0CB0\u0CCD', '\u0CEA'],
                ['5', '\u0C9C\u0CCD\u0C9E', '\u0CEB'],
                ['6', '\u0CA4\u0CCD\u0CB0', '\u0CEC'],
                ['7', '\u0C95\u0CCD\u0CB7', '\u0CED'],
                ['8', '\u0CB6\u0CCD\u0CB0', '\u0CEE'],
                ['9', '(', '\u0CEF'],
                ['0', ')', '\u0CE6'],
                ['-', '\u0C83'],
                ['\u0CC3', '\u0C8B', '\u0CC4', '\u0CE0'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0CCC', '\u0C94'],
                ['\u0CC8', '\u0C90', '\u0CD6'],
                ['\u0CBE', '\u0C86'],
                ['\u0CC0', '\u0C88', '', '\u0CE1'],
                ['\u0CC2', '\u0C8A'],
                ['\u0CAC', '\u0CAD'],
                ['\u0CB9', '\u0C99'],
                ['\u0C97', '\u0C98'],
                ['\u0CA6', '\u0CA7'],
                ['\u0C9C', '\u0C9D'],
                ['\u0CA1', '\u0CA2'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0CCB', '\u0C93'],
                ['\u0CC7', '\u0C8F', '\u0CD5'],
                ['\u0CCD', '\u0C85'],
                ['\u0CBF', '\u0C87', '', '\u0C8C'],
                ['\u0CC1', '\u0C89'],
                ['\u0CAA', '\u0CAB', '', '\u0CDE'],
                ['\u0CB0', '\u0CB1'],
                ['\u0C95', '\u0C96'],
                ['\u0CA4', '\u0CA5'],
                ['\u0C9A', '\u0C9B'],
                ['\u0C9F', '\u0CA0'],
                ['', '\u0C9E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0CC6', '\u0C8F'],
                ['\u0C82'],
                ['\u0CAE', '\u0CA3'],
                ['\u0CA8'],
                ['\u0CB5'],
                ['\u0CB2', '\u0CB3'],
                ['\u0CB8', '\u0CB6'],
                [',', '\u0CB7'],
                ['.', '|'],
                ['\u0CAF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['kn']
    },
    '\ud55c\uad6d\uc5b4': {
        'name': 'Korean',
        'keys': [
            [
                ['`', '~', '`', '~'],
                ['1', '!', '1', '!'],
                ['2', '@', '2', '@'],
                ['3', '#', '3', '#'],
                ['4', '$', '4', '$'],
                ['5', '%', '5', '%'],
                ['6', '^', '6', '^'],
                ['7', '&', '7', '&'],
                ['8', '*', '8', '*'],
                ['9', ')', '9', ')'],
                ['0', '(', '0', '('],
                ['-', '_', '-', '_'],
                ['=', '+', '=', '+'],
                ['\u20A9', '|', '\u20A9', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u1107', '\u1108', 'q', 'Q'],
                ['\u110C', '\u110D', 'w', 'W'],
                ['\u1103', '\u1104', 'e', 'E'],
                ['\u1100', '\u1101', 'r', 'R'],
                ['\u1109', '\u110A', 't', 'T'],
                ['\u116D', '', 'y', 'Y'],
                ['\u1167', '', 'u', 'U'],
                ['\u1163', '', 'i', 'I'],
                ['\u1162', '\u1164', 'o', 'O'],
                ['\u1166', '\u1168', 'p', 'P'],
                ['[', '{', '[', '{'],
                [']', '}', ']', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u1106', '', 'a', 'A'],
                ['\u1102', '', 's', 'S'],
                ['\u110B', '', 'd', 'D'],
                ['\u1105', '', 'f', 'F'],
                ['\u1112', '', 'g', 'G'],
                ['\u1169', '', 'h', 'H'],
                ['\u1165', '', 'j', 'J'],
                ['\u1161', '', 'k', 'K'],
                ['\u1175', '', 'l', 'L'],
                [';', ':', ';', ':'],
                ['\'', '"', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u110F', '', 'z', 'Z'],
                ['\u1110', '', 'x', 'X'],
                ['\u110E', '', 'c', 'C'],
                ['\u1111', '', 'v', 'V'],
                ['\u1172', '', 'b', 'B'],
                ['\u116E', '', 'n', 'N'],
                ['\u1173', '', 'm', 'M'],
                [',', '<', ',', '<'],
                ['.', '>', '.', '>'],
                ['/', '?', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                ['Kor', KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ko']
    },
    'Kurd\u00ee': {
        'name': 'Kurdish',
        'keys': [
            [
                ['\u20ac', '~'],
                ['\u0661', '!'],
                ['\u0662', '@'],
                ['\u0663', '#'],
                ['\u0664', '$'],
                ['\u0665', '%'],
                ['\u0666', '^'],
                ['\u0667', '&'],
                ['\u0668', '*'],
                ['\u0669', '('],
                ['\u0660', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0642', '`'],
                ['\u0648', '\u0648\u0648'],
                ['\u06d5', '\u064a'],
                ['\u0631', '\u0695'],
                ['\u062a', '\u0637'],
                ['\u06cc', '\u06ce'],
                ['\u0626', '\u0621'],
                ['\u062d', '\u0639'],
                ['\u06c6', '\u0624'],
                ['\u067e', '\u062b'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0627', '\u0622'],
                ['\u0633', '\u0634'],
                ['\u062f', '\u0630'],
                ['\u0641', '\u0625'],
                ['\u06af', '\u063a'],
                ['\u0647', '\u200c'],
                ['\u0698', '\u0623'],
                ['\u06a9', '\u0643'],
                ['\u0644', '\u06b5'],
                ['\u061b', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0632', '\u0636'],
                ['\u062e', '\u0635'],
                ['\u062c', '\u0686'],
                ['\u06a4', '\u0638'],
                ['\u0628', '\u0649'],
                ['\u0646', '\u0629'],
                ['\u0645', '\u0640'],
                ['\u060c', '<'],
                ['.', '>'],
                ['/', '\u061f'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['ku']
    },
    '\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430': {
        'name': 'Kyrgyz',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423', '\u04AF', '\u04AE'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D', '\u04A3', '\u04A2'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E', '\u04E9', '\u04E8'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ky']
    },
    'Latvie\u0161u': {
        'name': 'Latvian',
        'keys': [
            [
                ['\u00AD', '?'],
                ['1', '!', '\u00AB'],
                ['2', '\u00AB', '', '@'],
                ['3', '\u00BB', '', '#'],
                ['4', '$', '\u20AC', '$'],
                ['5', '%', '"', '~'],
                ['6', '/', '\u2019', '^'],
                ['7', '&', '', '\u00B1'],
                ['8', '\u00D7', ':'],
                ['9', '('],
                ['0', ')'],
                ['-', '_', '\u2013', '\u2014'],
                ['f', 'F', '=', ';'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u016B', '\u016A', 'q', 'Q'],
                ['g', 'G', '\u0123', '\u0122'],
                ['j', 'J'],
                ['r', 'R', '\u0157', '\u0156'],
                ['m', 'M', 'w', 'W'],
                ['v', 'V', 'y', 'Y'],
                ['n', 'N'],
                ['z', 'Z'],
                ['\u0113', '\u0112'],
                ['\u010D', '\u010C'],
                ['\u017E', '\u017D', '[', '{'],
                ['h', 'H', ']', '}'],
                ['\u0137', '\u0136']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0161', '\u0160'],
                ['u', 'U'],
                ['s', 'S'],
                ['i', 'I'],
                ['l', 'L'],
                ['d', 'D'],
                ['a', 'A'],
                ['t', 'T'],
                ['e', 'E', '\u20AC'],
                ['c', 'C'],
                ['\u00B4', '\u00B0', '\u00B4', '\u00A8'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0146', '\u0145'],
                ['b', 'B', 'x', 'X'],
                ['\u012B', '\u012A'],
                ['k', 'K', '\u0137', '\u0136'],
                ['p', 'P'],
                ['o', 'O', '\u00F5', '\u00D5'],
                ['\u0101', '\u0100'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['\u013C', '\u013B'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['lv']
    },
    'Lietuvi\u0173': {
        'name': 'Lithuanian',
        'keys': [
            [
                ['`', '~'],
                ['\u0105', '\u0104'],
                ['\u010D', '\u010C'],
                ['\u0119', '\u0118'],
                ['\u0117', '\u0116'],
                ['\u012F', '\u012E'],
                ['\u0161', '\u0160'],
                ['\u0173', '\u0172'],
                ['\u016B', '\u016A'],
                ['\u201E', '('],
                ['\u201C', ')'],
                ['-', '_'],
                ['\u017E', '\u017D'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u2013', '\u20AC'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['lt']
    },
    'Magyar': {
        'name': 'Hungarian',
        'keys': [
            [
                ['0', '\u00a7'],
                ['1', '\'', '~'],
                ['2', '"', '\u02c7'],
                ['3', '+', '\u02c6'],
                ['4', '!', '\u02d8'],
                ['5', '%', '\u00b0'],
                ['6', '/', '\u02db'],
                ['7', '=', '`'],
                ['8', '(', '\u02d9'],
                ['9', ')', '\u00b4'],
                ['\u00f6', '\u00d6', '\u02dd'],
                ['\u00fc', '\u00dc', '\u00a8'],
                ['\u00f3', '\u00d3', '\u00b8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E', '\u00c4'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U', '\u20ac'],
                ['i', 'I', '\u00cd'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u0151', '\u0150', '\u00f7'],
                ['\u00fa', '\u00da', '\u00d7'],
                ['\u0171', '\u0170', '\u00a4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e4'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J', '\u00ed'],
                ['k', 'K', '\u0141'],
                ['l', 'L', '\u0142'],
                ['\u00e9', '\u00c9', '$'],
                ['\u00e1', '\u00c1', '\u00df'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u00ed', '\u00cd', '<'],
                ['y', 'Y', '>'],
                ['x', 'X', '#'],
                ['c', 'C', '&'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '<'],
                [',', '?', ';'],
                ['.', ':', '>'],
                ['-', '_', '*'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['hu']
    },
    'Malti': {
        'name': 'Maltese 48',
        'keys': [
            [
                ['\u010B', '\u010A', '`'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u20ac', '\u00A3'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u00E8', '\u00C8'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U', '\u00F9', '\u00D9'],
                ['i', 'I', '\u00EC', '\u00cc'],
                ['o', 'O', '\u00F2', '\u00D2'],
                ['p', 'P'],
                ['\u0121', '\u0120', '[', '{'],
                ['\u0127', '\u0126', ']', '}'],
                ['#', '\u017e']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00E0', '\u00C0'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '@'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u017c', '\u017b', '\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?', '', '`'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['mt']
    },
    '\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438': {
        'name': 'Macedonian Cyrillic',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '\u201E'],
                ['3', '\u201C'],
                ['4', '\u2019'],
                ['5', '%'],
                ['6', '\u2018'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0459', '\u0409'],
                ['\u045A', '\u040A'],
                ['\u0435', '\u0415', '\u20AC'],
                ['\u0440', '\u0420'],
                ['\u0442', '\u0422'],
                ['\u0455', '\u0405'],
                ['\u0443', '\u0423'],
                ['\u0438', '\u0418'],
                ['\u043E', '\u041E'],
                ['\u043F', '\u041F'],
                ['\u0448', '\u0428', '\u0402'],
                ['\u0453', '\u0403', '\u0452'],
                ['\u0436', '\u0416']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0430', '\u0410'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0444', '\u0424', '['],
                ['\u0433', '\u0413', ']'],
                ['\u0445', '\u0425'],
                ['\u0458', '\u0408'],
                ['\u043A', '\u041A'],
                ['\u043B', '\u041B'],
                ['\u0447', '\u0427', '\u040B'],
                ['\u045C', '\u040C', '\u045B'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0451', '\u0401'],
                ['\u0437', '\u0417'],
                ['\u045F', '\u040F'],
                ['\u0446', '\u0426'],
                ['\u0432', '\u0412', '@'],
                ['\u0431', '\u0411', '{'],
                ['\u043D', '\u041D', '}'],
                ['\u043C', '\u041C', '\u00A7'],
                [',', ';'],
                ['.', ':'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['mk']
    },
    '\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02': {
        'name': 'Malayalam',
        'keys': [
            [
                ['\u0D4A', '\u0D12'],
                ['1', '', '\u0D67'],
                ['2', '', '\u0D68'],
                ['3', '\u0D4D\u0D30', '\u0D69'],
                ['4', '', '\u0D6A'],
                ['5', '', '\u0D6B'],
                ['6', '', '\u0D6C'],
                ['7', '\u0D15\u0D4D\u0D37', '\u0D6D'],
                ['8', '', '\u0D6E'],
                ['9', '(', '\u0D6F'],
                ['0', ')', '\u0D66'],
                ['-', '\u0D03'],
                ['\u0D43', '\u0D0B', '', '\u0D60'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0D4C', '\u0D14', '\u0D57'],
                ['\u0D48', '\u0D10'],
                ['\u0D3E', '\u0D06'],
                ['\u0D40', '\u0D08', '', '\u0D61'],
                ['\u0D42', '\u0D0A'],
                ['\u0D2C', '\u0D2D'],
                ['\u0D39', '\u0D19'],
                ['\u0D17', '\u0D18'],
                ['\u0D26', '\u0D27'],
                ['\u0D1C', '\u0D1D'],
                ['\u0D21', '\u0D22'],
                ['', '\u0D1E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0D4B', '\u0D13'],
                ['\u0D47', '\u0D0F'],
                ['\u0D4D', '\u0D05', '', '\u0D0C'],
                ['\u0D3F', '\u0D07'],
                ['\u0D41', '\u0D09'],
                ['\u0D2A', '\u0D2B'],
                ['\u0D30', '\u0D31'],
                ['\u0D15', '\u0D16'],
                ['\u0D24', '\u0D25'],
                ['\u0D1A', '\u0D1B'],
                ['\u0D1F', '\u0D20'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0D46', '\u0D0F'],
                ['\u0D02'],
                ['\u0D2E', '\u0D23'],
                ['\u0D28'],
                ['\u0D35', '\u0D34'],
                ['\u0D32', '\u0D33'],
                ['\u0D38', '\u0D36'],
                [',', '\u0D37'],
                ['.'],
                ['\u0D2F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ml']
    },
    'Misc. Symbols': {
        'name': 'Misc. Symbols',
        'keys': [
            [
                ['\u2605', '\u2606', '\u260e', '\u260f'],
                ['\u2648', '\u2673', '\u2659', '\u2630'],
                ['\u2649', '\u2674', '\u2658', '\u2631'],
                ['\u264a', '\u2675', '\u2657', '\u2632'],
                ['\u264b', '\u2676', '\u2656', '\u2633'],
                ['\u264c', '\u2677', '\u2655', '\u2634'],
                ['\u264d', '\u2678', '\u2654', '\u2635'],
                ['\u264e', '\u2679', '\u265f', '\u2636'],
                ['\u264f', '\u267a', '\u265e', '\u2637'],
                ['\u2650', '\u267b', '\u265d', '\u2686'],
                ['\u2651', '\u267c', '\u265c', '\u2687'],
                ['\u2652', '\u267d', '\u265b', '\u2688'],
                ['\u2653', '\u2672', '\u265a', '\u2689'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                ['\u263f', '\u2680', '\u268a', '\u26a2'],
                ['\u2640', '\u2681', '\u268b', '\u26a3'],
                ['\u2641', '\u2682', '\u268c', '\u26a4'],
                ['\u2642', '\u2683', '\u268d', '\u26a5'],
                ['\u2643', '\u2684', '\u268e', '\u26a6'],
                ['\u2644', '\u2685', '\u268f', '\u26a7'],
                ['\u2645', '\u2620', '\u26ff', '\u26a8'],
                ['\u2646', '\u2622', '\u2692', '\u26a9'],
                ['\u2647', '\u2623', '\u2693', '\u26b2'],
                ['\u2669', '\u266d', '\u2694', '\u26ac'],
                ['\u266a', '\u266e', '\u2695', '\u26ad'],
                ['\u266b', '\u266f', '\u2696', '\u26ae'],
                ['\u266c', '\u2607', '\u2697', '\u26af'],
                ['\u26f9', '\u2608', '\u2698', '\u26b0'],
                ['\u267f', '\u262e', '\u2638', '\u2609']
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u261e', '\u261c', '\u261d', '\u261f'],
                ['\u261b', '\u261a', '\u2618', '\u2619'],
                ['\u2602', '\u2614', '\u26f1', '\u26d9'],
                ['\u2615', '\u2668', '\u26fe', '\u26d8'],
                ['\u263a', '\u2639', '\u263b', '\u26dc'],
                ['\u2617', '\u2616', '\u26ca', '\u26c9'],
                ['\u2660', '\u2663', '\u2665', '\u2666'],
                ['\u2664', '\u2667', '\u2661', '\u2662'],
                ['\u26c2', '\u26c0', '\u26c3', '\u26c1'],
                ['\u2624', '\u2625', '\u269a', '\u26b1'],
                ['\u2610', '\u2611', '\u2612', '\u2613'],
                ['\u2628', '\u2626', '\u2627', '\u2629'],
                ['\u262a', '\u262b', '\u262c', '\u262d'],
                ['\u26fa', '\u26fb', '\u26fc', '\u26fd']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u262f', '\u2670', '\u2671', '\u267e'],
                ['\u263c', '\u2699', '\u263d', '\u263e'],
                ['\u26c4', '\u2603', '\u26c7', '\u26c6'],
                ['\u26a0', '\u26a1', '\u2621', '\u26d4'],
                ['\u26e4', '\u26e5', '\u26e6', '\u26e7'],
                ['\u260a', '\u260b', '\u260c', '\u260d'],
                ['\u269c', '\u269b', '\u269d', '\u2604'],
                ['\u26b3', '\u26b4', '\u26b5', '\u26b6'],
                ['\u26b7', '\u26bf', '\u26b8', '\u26f8'],
                ['\u26b9', '\u26ba', '\u26bb', '\u26bc'],
                ['\u26bd', '\u26be', '\u269f', '\u269e'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u2600', '\u2601', '\u26c5', '\u26c8'],
                ['\u2691', '\u2690', '\u26ab', '\u26aa'],
                ['\u26cb', '\u26cc', '\u26cd', '\u26ce'],
                ['\u26cf', '\u26d0', '\u26d1', '\u26d2'],
                ['\u26d3', '\u26d5', '\u26d6', '\u26d7'],
                ['\u26da', '\u26db', '\u26dd', '\u26de'],
                ['\u26df', '\u26e0', '\u26e1', '\u26e2'],
                ['\u26e3', '\u26e8', '\u26e9', '\u26ea'],
                ['\u26eb', '\u26ec', '\u26ed', '\u26ee'],
                ['\u26ef', '\u26f0', '\u26f2', '\u26f3'],
                ['\u26f4', '\u26f5', '\u26f6', '\u26f7'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ]
    },
    '\u041c\u043e\u043d\u0433\u043e\u043b': {
        'name': 'Mongolian Cyrillic',
        'keys': [
            [
                ['=', '+'],
                ['\u2116', '1'],
                ['-', '2'],
                ['"', '3'],
                ['\u20AE', '4'],
                [':', '5'],
                ['.', '6'],
                ['_', '7'],
                [',', '8'],
                ['%', '9'],
                ['?', '0'],
                ['\u0435', '\u0415'],
                ['\u0449', '\u0429'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0444', '\u0424'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u0436', '\u0416'],
                ['\u044d', '\u042d'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u04af', '\u04AE'],
                ['\u0437', '\u0417'],
                ['\u043A', '\u041a'],
                ['\u044A', '\u042A'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0439', '\u0419'],
                ['\u044B', '\u042B'],
                ['\u0431', '\u0411'],
                ['\u04e9', '\u04e8'],
                ['\u0430', '\u0410'],
                ['\u0445', '\u0425'],
                ['\u0440', '\u0420'],
                ['\u043e', '\u041e'],
                ['\u043B', '\u041b'],
                ['\u0434', '\u0414'],
                ['\u043f', '\u041f'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0451', '\u0401'],
                ['\u0441', '\u0421'],
                ['\u043c', '\u041c'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044c', '\u042c'],
                ['\u0432', '\u0412'],
                ['\u044e', '\u042e'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['mn']
    },
    '\u092e\u0930\u093e\u0920\u0940': {
        'name': 'Marathi',
        'keys': [
            [
                ['', '', '`', '~'],
                ['\u0967', '\u090D', '1', '!'],
                ['\u0968', '\u0945', '2', '@'],
                ['\u0969', '\u094D\u0930', '3', '#'],
                ['\u096A', '\u0930\u094D', '4', '$'],
                ['\u096B', '\u091C\u094D\u091E', '5', '%'],
                ['\u096C', '\u0924\u094D\u0930', '6', '^'],
                ['\u096D', '\u0915\u094D\u0937', '7', '&'],
                ['\u096E', '\u0936\u094D\u0930', '8', '*'],
                ['\u096F', '(', '9', '('],
                ['\u0966', ')', '0', ')'],
                ['-', '\u0903', '-', '_'],
                ['\u0943', '\u090B', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u094C', '\u0914'],
                ['\u0948', '\u0910'],
                ['\u093E', '\u0906'],
                ['\u0940', '\u0908'],
                ['\u0942', '\u090A'],
                ['\u092C', '\u092D'],
                ['\u0939', '\u0919'],
                ['\u0917', '\u0918'],
                ['\u0926', '\u0927'],
                ['\u091C', '\u091D'],
                ['\u0921', '\u0922', '[', '{'],
                ['\u093C', '\u091E', ']', '}'],
                ['\u0949', '\u0911', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u094B', '\u0913'],
                ['\u0947', '\u090F'],
                ['\u094D', '\u0905'],
                ['\u093F', '\u0907'],
                ['\u0941', '\u0909'],
                ['\u092A', '\u092B'],
                ['\u0930', '\u0931'],
                ['\u0915', '\u0916'],
                ['\u0924', '\u0925'],
                ['\u091A', '\u091B', ';', ':'],
                ['\u091F', '\u0920', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0902', '\u0901', '', '\u0950'],
                ['\u092E', '\u0923'],
                ['\u0928'],
                ['\u0935'],
                ['\u0932', '\u0933'],
                ['\u0938', '\u0936'],
                [',', '\u0937', ',', '<'],
                ['.', '\u0964', '.', '>'],
                ['\u092F', '\u095F', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['mr']
    },
    '\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c': {
        'name': 'Burmese',
        'keys': [
            [
                ['\u1039`', '~'],
                ['\u1041', '\u100D'],
                ['\u1042', '\u100E'],
                ['\u1043', '\u100B'],
                ['\u1044', '\u1000\u103B\u1015\u103A'],
                ['\u1045', '%'],
                ['\u1046', '/'],
                ['\u1047', '\u101B'],
                ['\u1048', '\u1002'],
                ['\u1049', '('],
                ['\u1040', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u1006', '\u1029'],
                ['\u1010', '\u1040'],
                ['\u1014', '\u103F'],
                ['\u1019', '\u1023'],
                ['\u1021', '\u1024'],
                ['\u1015', '\u104C'],
                ['\u1000', '\u1009'],
                ['\u1004', '\u104D'],
                ['\u101E', '\u1025'],
                ['\u1005', '\u100F'],
                ['\u101F', '\u1027'],
                ['\u2018', '\u2019'],
                ['\u104F', '\u100B\u1039\u100C']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u200B\u1031', '\u1017'],
                ['\u200B\u103B', '\u200B\u103E'],
                ['\u200B\u102D', '\u200B\u102E'],
                ['\u200B\u103A', '\u1004\u103A\u1039\u200B'],
                ['\u200B\u102B', '\u200B\u103D'],
                ['\u200B\u1037', '\u200B\u1036'],
                ['\u200B\u103C', '\u200B\u1032'],
                ['\u200B\u102F', '\u200B\u102F'],
                ['\u200B\u1030', '\u200B\u1030'],
                ['\u200B\u1038', '\u200B\u102B\u103A'],
                ['\u1012', '\u1013'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u1016', '\u1007'],
                ['\u1011', '\u100C'],
                ['\u1001', '\u1003'],
                ['\u101C', '\u1020'],
                ['\u1018', '\u1026'],
                ['\u100A', '\u1008'],
                ['\u200B\u102C', '\u102A'],
                ['\u101A', '\u101B'],
                ['.', '\u101B'],
                ['\u104B', '\u104A'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['my']
    },
    'Nederlands': {
        'name': 'Dutch',
        'keys': [
            [
                ['@', '\u00a7', '\u00ac'],
                ['1', '!', '\u00b9'],
                ['2', '"', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00bc'],
                ['5', '%', '\u00bd'],
                ['6', '&', '\u00be'],
                ['7', '_', '\u00a3'],
                ['8', '(', '{'],
                ['9', ')', '}'],
                ['0', '\''],
                ['/', '?', '\\'],
                ['\u00b0', '~', '\u00b8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R', '\u00b6'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00a8', '^'],
                ['*', '|'],
                ['<', '>']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u00df'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['+', '\u00b1'],
                ['\u00b4', '`'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [']', '[', '\u00a6'],
                ['z', 'Z', '\u00ab'],
                ['x', 'X', '\u00bb'],
                ['c', 'C', '\u00a2'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u00b5'],
                [',', ';'],
                ['.', ':', '\u00b7'],
                ['-', '='],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['nl']
    },
    'Norsk': {
        'name': 'Norwegian',
        'keys': [
            [
                ['|', '\u00a7'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '\u00a4', '$'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?'],
                ['\\', '`', '\u00b4'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e5', '\u00c5'],
                ['\u00a8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f8', '\u00d8'],
                ['\u00e6', '\u00c6'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u03bc', '\u039c'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['no', 'nb', 'nn']
    },
    '\u067e\u069a\u062a\u0648': {
        'name': 'Pashto',
        'keys': [
            [
                ['\u200d', '\u00f7', '`'],
                ['\u06f1', '!', '`'],
                ['\u06f2', '\u066c', '@'],
                ['\u06f3', '\u066b', '\u066b'],
                ['\u06f4', '\u00a4', '\u00a3'],
                ['\u06f5', '\u066a', '%'],
                ['\u06f6', '\u00d7', '^'],
                ['\u06f7', '\u00ab', '&'],
                ['\u06f8', '\u00bb', '*'],
                ['\u06f9', '(', '\ufdf2'],
                ['\u06f0', ')', '\ufefb'],
                ['-', '\u0640', '_'],
                ['=', '+', '\ufe87', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0636', '\u0652', '\u06d5'],
                ['\u0635', '\u064c', '\u0653'],
                ['\u062b', '\u064d', '\u20ac'],
                ['\u0642', '\u064b', '\ufef7'],
                ['\u0641', '\u064f', '\ufef5'],
                ['\u063a', '\u0650', '\''],
                ['\u0639', '\u064e', '\ufe84'],
                ['\u0647', '\u0651', '\u0670'],
                ['\u062e', '\u0681', '\''],
                ['\u062d', '\u0685', '"'],
                ['\u062c', ']', '}'],
                ['\u0686', '[', '{'],
                ['\\', '\u066d', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0634', '\u069a', '\ufbb0'],
                ['\u0633', '\u06cd', '\u06d2'],
                ['\u06cc', '\u064a', '\u06d2'],
                ['\u0628', '\u067e', '\u06ba'],
                ['\u0644', '\u0623', '\u06b7'],
                ['\u0627', '\u0622', '\u0671'],
                ['\u062a', '\u067c', '\u0679'],
                ['\u0646', '\u06bc', '<'],
                ['\u0645', '\u0629', '>'],
                ['\u06a9', ':', '\u0643'],
                ['\u06af', '\u061b', '\u06ab'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0638', '\u0626', '?'],
                ['\u0637', '\u06d0', ';'],
                ['\u0632', '\u0698', '\u0655'],
                ['\u0631', '\u0621', '\u0654'],
                ['\u0630', '\u200c', '\u0625'],
                ['\u062f', '\u0689', '\u0688'],
                ['\u0693', '\u0624', '\u0691'],
                ['\u0648', '\u060c', ','],
                ['\u0696', '.', '\u06c7'],
                ['/', '\u061f', '\u06c9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, '\u064d']
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['ps']
    },
    '\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40': {
        'name': 'Punjabi (Gurmukhi)',
        'keys': [
            [
                [''],
                ['1', '\u0A4D\u0A35', '\u0A67', '\u0A67'],
                ['2', '\u0A4D\u0A2F', '\u0A68', '\u0A68'],
                ['3', '\u0A4D\u0A30', '\u0A69', '\u0A69'],
                ['4', '\u0A71', '\u0A6A', '\u0A6A'],
                ['5', '', '\u0A6B', '\u0A6B'],
                ['6', '', '\u0A6C', '\u0A6C'],
                ['7', '', '\u0A6D', '\u0A6D'],
                ['8', '', '\u0A6E', '\u0A6E'],
                ['9', '(', '\u0A6F', '\u0A6F'],
                ['0', ')', '\u0A66', '\u0A66'],
                ['-'],
                [''],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0A4C', '\u0A14'],
                ['\u0A48', '\u0A10'],
                ['\u0A3E', '\u0A06'],
                ['\u0A40', '\u0A08'],
                ['\u0A42', '\u0A0A'],
                ['\u0A2C', '\u0A2D'],
                ['\u0A39', '\u0A19'],
                ['\u0A17', '\u0A18', '\u0A5A', '\u0A5A'],
                ['\u0A26', '\u0A27'],
                ['\u0A1C', '\u0A1D', '\u0A5B', '\u0A5B'],
                ['\u0A21', '\u0A22', '\u0A5C', '\u0A5C'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0A4B', '\u0A13'],
                ['\u0A47', '\u0A0F'],
                ['\u0A4D', '\u0A05'],
                ['\u0A3F', '\u0A07'],
                ['\u0A41', '\u0A09'],
                ['\u0A2A', '\u0A2B', '\u0A5E', '\u0A5E'],
                ['\u0A30'],
                ['\u0A15', '\u0A16', '\u0A59', '\u0A59'],
                ['\u0A24', '\u0A25'],
                ['\u0A1A', '\u0A1B'],
                ['\u0A1F', '\u0A20'],
                ['\u0A3C', '\u0A1E']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [''],
                ['\u0A02', '\u0A02'],
                ['\u0A2E', '\u0A23'],
                ['\u0A28'],
                ['\u0A35', '\u0A72', '\u0A73', '\u0A73'],
                ['\u0A32', '\u0A33'],
                ['\u0A38', '\u0A36'],
                [','],
                ['.', '|', '\u0965', '\u0965'],
                ['\u0A2F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['pa']
    },
    '\u62fc\u97f3 (Pinyin)': {
        'name': 'Pinyin',
        'keys': [
            [
                ['`', '~', '\u4e93', '\u301C'],
                ['1', '!', '\uFF62'],
                ['2', '@', '\uFF63'],
                ['3', '#', '\u301D'],
                ['4', '$', '\u301E'],
                ['5', '%', '\u301F'],
                ['6', '^', '\u3008'],
                ['7', '&', '\u3009'],
                ['8', '*', '\u302F'],
                ['9', '(', '\u300A'],
                ['0', ')', '\u300B'],
                ['-', '_', '\u300E'],
                ['=', '+', '\u300F'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\u0101', '\u0100'],
                ['w', 'W', '\u00E1', '\u00C1'],
                ['e', 'E', '\u01CE', '\u01CD'],
                ['r', 'R', '\u00E0', '\u00C0'],
                ['t', 'T', '\u0113', '\u0112'],
                ['y', 'Y', '\u00E9', '\u00C9'],
                ['u', 'U', '\u011B', '\u011A'],
                ['i', 'I', '\u00E8', '\u00C8'],
                ['o', 'O', '\u012B', '\u012A'],
                ['p', 'P', '\u00ED', '\u00CD'],
                ['[', '{', '\u01D0', '\u01CF'],
                [']', '}', '\u00EC', '\u00CC'],
                ['\\', '|', '\u3020']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u014D', '\u014C'],
                ['s', 'S', '\u00F3', '\u00D3'],
                ['d', 'D', '\u01D2', '\u01D1'],
                ['f', 'F', '\u00F2', '\u00D2'],
                ['g', 'G', '\u00fc', '\u00dc'],
                ['h', 'H', '\u016B', '\u016A'],
                ['j', 'J', '\u00FA', '\u00DA'],
                ['k', 'K', '\u01D4', '\u01D3'],
                ['l', 'L', '\u00F9', '\u00D9'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', '\u01D6', '\u01D5'],
                ['x', 'X', '\u01D8', '\u01D7'],
                ['c', 'C', '\u01DA', '\u01D9'],
                ['v', 'V', '\u01DC', '\u01DB'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<', '\u3001'],
                ['.', '>', '\u3002'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk, KeyboardClassKey.AltLk],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['zh-LATN']
    },
    'Polski': {
        'name': 'Polish (214)',
        'keys': [
            [
                ['\u02DB', '\u00B7'],
                ['1', '!', '~'],
                ['2', '"', '\u02C7'],
                ['3', '#', '^'],
                ['4', '\u00A4', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '&', '\u02DB'],
                ['7', '/', '`'],
                ['8', '(', '\u00B7'],
                ['9', ')', '\u00B4'],
                ['0', '=', '\u02DD'],
                ['+', '?', '\u00A8'],
                ['\'', '*', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '\u00A6'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U', '\u20AC'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u017C', '\u0144', '\u00F7'],
                ['\u015B', '\u0107', '\u00D7'],
                ['\u00F3', '\u017A']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u0142', '\u0141', '$'],
                ['\u0105', '\u0119', '\u00DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '\u00A7'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ]
    },
    'Polski Programisty': {
        'name': 'Polish Programmers',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u0119', '\u0118'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O', '\u00f3', '\u00d3'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u0105', '\u0104'],
                ['s', 'S', '\u015b', '\u015a'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L', '\u0142', '\u0141'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', '\u017c', '\u017b'],
                ['x', 'X', '\u017a', '\u0179'],
                ['c', 'C', '\u0107', '\u0106'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N', '\u0144', '\u0143'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['pl']
    },
    'Portugu\u00eas Brasileiro': {
        'name': 'Portuguese (Brazil)',
        'keys': [
            [
                ['\'', '"'],
                ['1', '!', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a3'],
                ['5', '%', '\u00a2'],
                ['6', '\u00a8', '\u00ac'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+', '\u00a7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '/'],
                ['w', 'W', '?'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00b4', '`'],
                ['[', '{', '\u00aa'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00e7', '\u00c7'],
                ['~', '^'],
                [']', '}', '\u00ba'],
                ['/', '?']
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C', '\u20a2'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                [':', ':'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['pt-BR']
    },
    'Portugu\u00eas': {
        'name': 'Portuguese',
        'keys': [
            [
                ['\\', '|'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '$', '\u00a7'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['\'', '?'],
                ['\u00ab', '\u00bb'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['+', '*', '\u00a8'],
                ['\u00b4', '`'],
                ['~', '^']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00e7', '\u00c7'],
                ['\u00ba', '\u00aa'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['pt']
    },
    'Rom\u00e2n\u0103': {
        'name': 'Romanian',
        'keys': [
            [
                ['\u201E', '\u201D', '`', '~'],
                ['1', '!', '~'],
                ['2', '@', '\u02C7'],
                ['3', '#', '^'],
                ['4', '$', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '^', '\u02DB'],
                ['7', '&', '`'],
                ['8', '*', '\u02D9'],
                ['9', '(', '\u00B4'],
                ['0', ')', '\u02DD'],
                ['-', '_', '\u00A8'],
                ['=', '+', '\u00B8', '\u00B1'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P', '\u00A7'],
                ['\u0103', '\u0102', '[', '{'],
                ['\u00EE', '\u00CE', ']', '}'],
                ['\u00E2', '\u00C2', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u00df'],
                ['d', 'D', '\u00f0', '\u00D0'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L', '\u0142', '\u0141'],
                ['\u0219', '\u0218', ';', ':'],
                ['\u021B', '\u021A', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C', '\u00A9'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';', '<', '\u00AB'],
                ['.', ':', '>', '\u00BB'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ro']
    },
    '\u0420\u0443\u0441\u0441\u043a\u0438\u0439': {
        'name': 'Russian',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['/', '|'],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['ru']
    },
    'Schweizerdeutsch': {
        'name': 'Swiss German',
        'keys': [
            [
                ['\u00A7', '\u00B0'],
                ['1', '+', '\u00A6'],
                ['2', '"', '@'],
                ['3', '*', '#'],
                ['4', '\u00E7', '\u00B0'],
                ['5', '%', '\u00A7'],
                ['6', '&', '\u00AC'],
                ['7', '/', '|'],
                ['8', '(', '\u00A2'],
                ['9', ')'],
                ['0', '='],
                ['\'', '?', '\u00B4'],
                ['^', '`', '~'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00FC', '\u00E8', '['],
                ['\u00A8', '!', ']'],
                ['$', '\u00A3', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00F6', '\u00E9'],
                ['\u00E4', '\u00E0', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['de-CH']
    },
    'Shqip': {
        'name': 'Albanian',
        'keys': [
            [
                ['\\', '|'],
                ['1', '!', '~'],
                ['2', '"', '\u02C7'],
                ['3', '#', '^'],
                ['4', '$', '\u02D8'],
                ['5', '%', '\u00B0'],
                ['6', '^', '\u02DB'],
                ['7', '&', '`'],
                ['8', '*', '\u02D9'],
                ['9', '(', '\u00B4'],
                ['0', ')', '\u02DD'],
                ['-', '_', '\u00A8'],
                ['=', '+', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00E7', '\u00C7', '\u00F7'],
                ['[', '{', '\u00DF'],
                [']', '}', '\u00A4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K', '\u0142'],
                ['l', 'L', '\u0141'],
                ['\u00EB', '\u00CB', '$'],
                ['@', '\'', '\u00D7'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M', '\u00A7'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sq']
    },
    'Sloven\u010dina': {
        'name': 'Slovak',
        'keys': [
            [
                [';', '\u00b0'],
                ['+', '1', '~'],
                ['\u013E', '2', '\u02C7'],
                ['\u0161', '3', '^'],
                ['\u010D', '4', '\u02D8'],
                ['\u0165', '5', '\u00B0'],
                ['\u017E', '6', '\u02DB'],
                ['\u00FD', '7', '`'],
                ['\u00E1', '8', '\u02D9'],
                ['\u00ED', '9', '\u00B4'],
                ['\u00E9', '0', '\u02DD'],
                ['=', '%', '\u00A8'],
                ['\u00B4', '\u02c7', '\u00B8'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\\'],
                ['w', 'W', '|'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P', '\''],
                ['\u00FA', '/', '\u00F7'],
                ['\u00E4', '(', '\u00D7'],
                ['\u0148', ')', '\u00A4']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S', '\u0111'],
                ['d', 'D', '\u0110'],
                ['f', 'F', '['],
                ['g', 'G', ']'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K', '\u0142'],
                ['l', 'L', '\u0141'],
                ['\u00F4', '"', '$'],
                ['\u00A7', '!', '\u00DF'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['&', '*', '<'],
                ['y', 'Y', '>'],
                ['x', 'X', '#'],
                ['c', 'C', '&'],
                ['v', 'V', '@'],
                ['b', 'B', '{'],
                ['n', 'N', '}'],
                ['m', 'M'],
                [',', '?', '<'],
                ['.', ':', '>'],
                ['-', '_', '*'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sk']
    },
    '\u0441\u0440\u043f\u0441\u043a\u0438': {
        'name': 'Serbian Cyrillic',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '&'],
                ['7', '/'],
                ['8', '('],
                ['9', ')'],
                ['0', '='],
                ['\'', '?'],
                ['+', '*'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0459', '\u0409'],
                ['\u045a', '\u040a'],
                ['\u0435', '\u0415', '\u20ac'],
                ['\u0440', '\u0420'],
                ['\u0442', '\u0422'],
                ['\u0437', '\u0417'],
                ['\u0443', '\u0423'],
                ['\u0438', '\u0418'],
                ['\u043e', '\u041e'],
                ['\u043f', '\u041f'],
                ['\u0448', '\u0428'],
                ['\u0452', '\u0402'],
                ['\u0436', '\u0416']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0430', '\u0410'],
                ['\u0441', '\u0421'],
                ['\u0434', '\u0414'],
                ['\u0444', '\u0424'],
                ['\u0433', '\u0413'],
                ['\u0445', '\u0425'],
                ['\u0458', '\u0408'],
                ['\u043a', '\u041a'],
                ['\u043b', '\u041b'],
                ['\u0447', '\u0427'],
                ['\u045b', '\u040b'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>'],
                ['\u0455', '\u0405'],
                ['\u045f', '\u040f'],
                ['\u0446', '\u0426'],
                ['\u0432', '\u0412'],
                ['\u0431', '\u0411'],
                ['\u043d', '\u041d'],
                ['\u043c', '\u041c'],
                [',', ';', '<'],
                ['.', ':', '>'],
                ['-', '_', '\u00a9'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sr-CYRL']
    },
    'Suomi': {
        'name': 'Finnish',
        'keys': [
            [
                ['\u00a7', '\u00BD'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00A3'],
                ['4', '\u00A4', '$'],
                ['5', '%', '\u20AC'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?', '\\'],
                ['\u00B4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\u00E2', '\u00C2'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T', '\u0167', '\u0166'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I', '\u00ef', '\u00CF'],
                ['o', 'O', '\u00f5', '\u00D5'],
                ['p', 'P'],
                ['\u00E5', '\u00C5'],
                ['\u00A8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00E1', '\u00C1'],
                ['s', 'S', '\u0161', '\u0160'],
                ['d', 'D', '\u0111', '\u0110'],
                ['f', 'F', '\u01e5', '\u01E4'],
                ['g', 'G', '\u01E7', '\u01E6'],
                ['h', 'H', '\u021F', '\u021e'],
                ['j', 'J'],
                ['k', 'K', '\u01e9', '\u01E8'],
                ['l', 'L'],
                ['\u00F6', '\u00D6', '\u00F8', '\u00D8'],
                ['\u00E4', '\u00C4', '\u00E6', '\u00C6'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z', '\u017E', '\u017D'],
                ['x', 'X'],
                ['c', 'C', '\u010d', '\u010C'],
                ['v', 'V', '\u01EF', '\u01EE'],
                ['b', 'B', '\u0292', '\u01B7'],
                ['n', 'N', '\u014B', '\u014A'],
                ['m', 'M', '\u00B5'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt],
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fi']
    },
    'Svenska': {
        'name': 'Swedish',
        'keys': [
            [
                ['\u00a7', '\u00bd'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '#', '\u00a3'],
                ['4', '\u00a4', '$'],
                ['5', '%', '\u20ac'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['+', '?', '\\'],
                ['\u00b4', '`'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00e5', '\u00c5'],
                ['\u00a8', '^', '~'],
                ['\'', '*']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00f6', '\u00d6'],
                ['\u00e4', '\u00c4'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M', '\u03bc', '\u039c'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['sv']
    },
    'Swiss Fran\u00e7ais': {
        'name': 'Swiss French',
        'keys': [
            [
                ['\u00A7', '\u00B0'],
                ['1', '+', '\u00A6'],
                ['2', '"', '@'],
                ['3', '*', '#'],
                ['4', '\u00E7', '\u00B0'],
                ['5', '%', '\u00A7'],
                ['6', '&', '\u00AC'],
                ['7', '/', '|'],
                ['8', '(', '\u00A2'],
                ['9', ')'],
                ['0', '='],
                ['\'', '?', '\u00B4'],
                ['^', '`', '~'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u20AC'],
                ['r', 'R'],
                ['t', 'T'],
                ['z', 'Z'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u00E8', '\u00FC', '['],
                ['\u00A8', '!', ']'],
                ['$', '\u00A3', '}']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u00E9', '\u00F6'],
                ['\u00E0', '\u00E4', '{'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '\\'],
                ['y', 'Y'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', ';'],
                ['.', ':'],
                ['-', '_'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['fr-CH']
    },
    '\u0723\u0718\u072a\u071d\u071d\u0710': {
        'name': 'Syriac',
        'keys': [
            [
                ['\u070f', '\u032e', '\u0651', '\u0651'],
                ['1', '!', '\u0701', '\u0701'],
                ['2', '\u030a', '\u0702', '\u0702'],
                ['3', '\u0325', '\u0703', '\u0703'],
                ['4', '\u0749', '\u0704', '\u0704'],
                ['5', '\u2670', '\u0705', '\u0705'],
                ['6', '\u2671', '\u0708', '\u0708'],
                ['7', '\u070a', '\u0709', '\u0709'],
                ['8', '\u00bb', '\u070B', '\u070B'],
                ['9', ')', '\u070C', '\u070C'],
                ['0', '(', '\u070D', '\u070D'],
                ['-', '\u00ab', '\u250C', '\u250C'],
                ['=', '+', '\u2510', '\u2510'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0714', '\u0730', '\u064E', '\u064E'],
                ['\u0728', '\u0733', '\u064B', '\u064B'],
                ['\u0716', '\u0736', '\u064F', '\u064F'],
                ['\u0729', '\u073A', '\u064C', '\u064C'],
                ['\u0726', '\u073D', '\u0653', '\u0653'],
                ['\u071c', '\u0740', '\u0654', '\u0654'],
                ['\u0725', '\u0741', '\u0747', '\u0747'],
                ['\u0717', '\u0308', '\u0743', '\u0743'],
                ['\u071e', '\u0304', '\u0745', '\u0745'],
                ['\u071a', '\u0307', '\u032D', '\u032D'],
                ['\u0713', '\u0303'],
                ['\u0715', '\u074A'],
                ['\u0706', ':']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u072b', '\u0731', '\u0650', '\u0650'],
                ['\u0723', '\u0734', '\u064d', '\u064d'],
                ['\u071d', '\u0737'],
                ['\u0712', '\u073b', '\u0621', '\u0621'],
                ['\u0720', '\u073e', '\u0655', '\u0655'],
                ['\u0710', '\u0711', '\u0670', '\u0670'],
                ['\u072c', '\u0640', '\u0748', '\u0748'],
                ['\u0722', '\u0324', '\u0744', '\u0744'],
                ['\u0721', '\u0331', '\u0746', '\u0746'],
                ['\u071f', '\u0323'],
                ['\u071b', '\u0330'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                [']', '\u0732'],
                ['[', '\u0735', '\u0652', '\u0652'],
                ['\u0724', '\u0738'],
                ['\u072a', '\u073c', '\u200D'],
                ['\u0727', '\u073f', '\u200C'],
                ['\u0700', '\u0739', '\u200E'],
                ['.', '\u0742', '\u200F'],
                ['\u0718', '\u060c'],
                ['\u0719', '\u061b'],
                ['\u0707', '\u061F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['syc']
    },
    '\u0ba4\u0bae\u0bbf\u0bb4\u0bcd': {
        'name': 'Tamil',
        'keys': [
            [
                ['\u0BCA', '\u0B92'],
                ['1', '', '\u0BE7'],
                ['2', '', '\u0BE8'],
                ['3', '', '\u0BE9'],
                ['4', '', '\u0BEA'],
                ['5', '', '\u0BEB'],
                ['6', '\u0BA4\u0BCD\u0BB0', '\u0BEC'],
                ['7', '\u0B95\u0BCD\u0BB7', '\u0BED'],
                ['8', '\u0BB7\u0BCD\u0BB0', '\u0BEE'],
                ['9', '', '\u0BEF'],
                ['0', '', '\u0BF0'],
                ['-', '\u0B83', '\u0BF1'],
                ['', '', '\u0BF2'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0BCC', '\u0B94'],
                ['\u0BC8', '\u0B90'],
                ['\u0BBE', '\u0B86'],
                ['\u0BC0', '\u0B88'],
                ['\u0BC2', '\u0B8A'],
                ['\u0BAA', '\u0BAA'],
                ['\u0BB9', '\u0B99'],
                ['\u0B95', '\u0B95'],
                ['\u0BA4', '\u0BA4'],
                ['\u0B9C', '\u0B9A'],
                ['\u0B9F', '\u0B9F'],
                ['\u0B9E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0BCB', '\u0B93'],
                ['\u0BC7', '\u0B8F'],
                ['\u0BCD', '\u0B85'],
                ['\u0BBF', '\u0B87'],
                ['\u0BC1', '\u0B89'],
                ['\u0BAA', '\u0BAA'],
                ['\u0BB0', '\u0BB1'],
                ['\u0B95', '\u0B95'],
                ['\u0BA4', '\u0BA4'],
                ['\u0B9A', '\u0B9A'],
                ['\u0B9F', '\u0B9F'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0BC6', '\u0B8E'],
                [''],
                ['\u0BAE', '\u0BA3'],
                ['\u0BA8', '\u0BA9'],
                ['\u0BB5', '\u0BB4'],
                ['\u0BB2', '\u0BB3'],
                ['\u0BB8', '\u0BB7'],
                [',', '\u0BB7'],
                ['.', '\u0BB8\u0BCD\u0BB0\u0BC0'],
                ['\u0BAF', '\u0BAF'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['ta']
    },
    '\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41': {
        'name': 'Telugu',
        'keys': [
            [
                ['\u0C4A', '\u0C12'],
                ['1', '', '\u0C67'],
                ['2', '', '\u0C68'],
                ['3', '\u0C4D\u0C30', '\u0C69'],
                ['4', '', '\u0C6A'],
                ['5', '\u0C1C\u0C4D\u0C1E', '\u0C6B'],
                ['6', '\u0C24\u0C4D\u0C30', '\u0C6C'],
                ['7', '\u0C15\u0C4D\u0C37', '\u0C6D'],
                ['8', '\u0C36\u0C4D\u0C30', '\u0C6E'],
                ['9', '(', '\u0C6F'],
                ['0', ')', '\u0C66'],
                ['-', '\u0C03'],
                ['\u0C43', '\u0C0B', '\u0C44'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0C4C', '\u0C14'],
                ['\u0C48', '\u0C10', '\u0C56'],
                ['\u0C3E', '\u0C06'],
                ['\u0C40', '\u0C08', '', '\u0C61'],
                ['\u0C42', '\u0C0A'],
                ['\u0C2C'],
                ['\u0C39', '\u0C19'],
                ['\u0C17', '\u0C18'],
                ['\u0C26', '\u0C27'],
                ['\u0C1C', '\u0C1D'],
                ['\u0C21', '\u0C22'],
                ['', '\u0C1E']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0C4B', '\u0C13'],
                ['\u0C47', '\u0C0F', '\u0C55'],
                ['\u0C4D', '\u0C05'],
                ['\u0C3F', '\u0C07', '', '\u0C0C'],
                ['\u0C41', '\u0C09'],
                ['\u0C2A', '\u0C2B'],
                ['\u0C30', '\u0C31'],
                ['\u0C15', '\u0C16'],
                ['\u0C24', '\u0C25'],
                ['\u0C1A', '\u0C1B'],
                ['\u0C1F', '\u0C25'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0C46', '\u0C0E'],
                ['\u0C02', '\u0C01'],
                ['\u0C2E', '\u0C23'],
                ['\u0C28', '\u0C28'],
                ['\u0C35'],
                ['\u0C32', '\u0C33'],
                ['\u0C38', '\u0C36'],
                [',', '\u0C37'],
                ['.'],
                ['\u0C2F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['te']
    },
    'Ti\u1ebfng Vi\u1ec7t': {
        'name': 'Vietnamese',
        'keys': [
            [
                ['`', '~', '`', '~'],
                ['\u0103', '\u0102', '1', '!'],
                ['\u00E2', '\u00C2', '2', '@'],
                ['\u00EA', '\u00CA', '3', '#'],
                ['\u00F4', '\u00D4', '4', '$'],
                ['\u0300', '\u0300', '5', '%'],
                ['\u0309', '\u0309', '6', '^'],
                ['\u0303', '\u0303', '7', '&'],
                ['\u0301', '\u0301', '8', '*'],
                ['\u0323', '\u0323', '9', '('],
                ['\u0111', '\u0110', '0', ')'],
                ['-', '_', '-', '_'],
                ['\u20AB', '+', '=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', 'q', 'Q'],
                ['w', 'W', 'w', 'W'],
                ['e', 'E', 'e', 'E'],
                ['r', 'R', 'r', 'R'],
                ['t', 'T', 't', 'T'],
                ['y', 'Y', 'y', 'Y'],
                ['u', 'U', 'u', 'U'],
                ['i', 'I', 'i', 'I'],
                ['o', 'O', 'o', 'O'],
                ['p', 'P', 'p', 'P'],
                ['\u01B0', '\u01AF', '[', '{'],
                ['\u01A1', '\u01A0', ']', '}'],
                ['\\', '|', '\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', 'a', 'A'],
                ['s', 'S', 's', 'S'],
                ['d', 'D', 'd', 'D'],
                ['f', 'F', 'f', 'F'],
                ['g', 'G', 'g', 'G'],
                ['h', 'H', 'h', 'H'],
                ['j', 'J', 'j', 'J'],
                ['k', 'K', 'k', 'K'],
                ['l', 'L', 'l', 'L'],
                [';', ':', ';', ':'],
                ['\'', '"', '\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', 'z', 'Z'],
                ['x', 'X', 'x', 'X'],
                ['c', 'C', 'c', 'C'],
                ['v', 'V', 'v', 'V'],
                ['b', 'B', 'b', 'B'],
                ['n', 'N', 'n', 'N'],
                ['m', 'M', 'm', 'M'],
                [',', '<', ',', '<'],
                ['.', '>', '.', '>'],
                ['/', '?', '/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['vi']
    },
    '\u0e44\u0e17\u0e22 Kedmanee': {
        'name': 'Thai Kedmanee',
        'keys': [
            [
                ['_', '%'],
                ['\u0E45', '+'],
                ['/', '\u0E51'],
                ['-', '\u0E52'],
                ['\u0E20', '\u0E53'],
                ['\u0E16', '\u0E54'],
                ['\u0E38', '\u0E39'],
                ['\u0E36', '\u0E3F'],
                ['\u0E04', '\u0E55'],
                ['\u0E15', '\u0E56'],
                ['\u0E08', '\u0E57'],
                ['\u0E02', '\u0E58'],
                ['\u0E0A', '\u0E59'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0E46', '\u0E50'],
                ['\u0E44', '"'],
                ['\u0E33', '\u0E0E'],
                ['\u0E1E', '\u0E11'],
                ['\u0E30', '\u0E18'],
                ['\u0E31', '\u0E4D'],
                ['\u0E35', '\u0E4A'],
                ['\u0E23', '\u0E13'],
                ['\u0E19', '\u0E2F'],
                ['\u0E22', '\u0E0D'],
                ['\u0E1A', '\u0E10'],
                ['\u0E25', ','],
                ['\u0E03', '\u0E05']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0E1F', '\u0E24'],
                ['\u0E2B', '\u0E06'],
                ['\u0E01', '\u0E0F'],
                ['\u0E14', '\u0E42'],
                ['\u0E40', '\u0E0C'],
                ['\u0E49', '\u0E47'],
                ['\u0E48', '\u0E4B'],
                ['\u0E32', '\u0E29'],
                ['\u0E2A', '\u0E28'],
                ['\u0E27', '\u0E0B'],
                ['\u0E07', '.'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0E1C', '('],
                ['\u0E1B', ')'],
                ['\u0E41', '\u0E09'],
                ['\u0E2D', '\u0E2E'],
                ['\u0E34', '\u0E3A'],
                ['\u0E37', '\u0E4C'],
                ['\u0E17', '?'],
                ['\u0E21', '\u0E12'],
                ['\u0E43', '\u0E2C'],
                ['\u0E1D', '\u0E26'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['th']
    },
    '\u0e44\u0e17\u0e22 Pattachote': {
        'name': 'Thai Pattachote',
        'keys': [
            [
                ['_', '\u0E3F'],
                ['=', '+'],
                ['\u0E52', '"'],
                ['\u0E53', '/'],
                ['\u0E54', ','],
                ['\u0E55', '?'],
                ['\u0E39', '\u0E38'],
                ['\u0E57', '_'],
                ['\u0E58', '.'],
                ['\u0E59', '('],
                ['\u0E50', ')'],
                ['\u0E51', '-'],
                ['\u0E56', '%'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0E47', '\u0E4A'],
                ['\u0E15', '\u0E24'],
                ['\u0E22', '\u0E46'],
                ['\u0E2D', '\u0E0D'],
                ['\u0E23', '\u0E29'],
                ['\u0E48', '\u0E36'],
                ['\u0E14', '\u0E1D'],
                ['\u0E21', '\u0E0B'],
                ['\u0E27', '\u0E16'],
                ['\u0E41', '\u0E12'],
                ['\u0E43', '\u0E2F'],
                ['\u0E0C', '\u0E26'],
                ['\uF8C7', '\u0E4D']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0E49', '\u0E4B'],
                ['\u0E17', '\u0E18'],
                ['\u0E07', '\u0E33'],
                ['\u0E01', '\u0E13'],
                ['\u0E31', '\u0E4C'],
                ['\u0E35', '\u0E37'],
                ['\u0E32', '\u0E1C'],
                ['\u0E19', '\u0E0A'],
                ['\u0E40', '\u0E42'],
                ['\u0E44', '\u0E06'],
                ['\u0E02', '\u0E11'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0E1A', '\u0E0E'],
                ['\u0E1B', '\u0E0F'],
                ['\u0E25', '\u0E10'],
                ['\u0E2B', '\u0E20'],
                ['\u0E34', '\u0E31'],
                ['\u0E04', '\u0E28'],
                ['\u0E2A', '\u0E2E'],
                ['\u0E30', '\u0E1F'],
                ['\u0E08', '\u0E09'],
                ['\u0E1E', '\u0E2C'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ]
    },
    '\u0422\u0430\u0442\u0430\u0440\u0447\u0430': {
        'name': 'Tatar',
        'keys': [
            [
                ['\u04BB', '\u04BA', '\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"', '@'],
                ['3', '\u2116', '#'],
                ['4', ';', '$'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?', '['],
                ['8', '*', ']'],
                ['9', '(', '{'],
                ['0', ')', '}'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u04E9', '\u04E8', '\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u04D9', '\u04D8', '\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u04AF', '\u04AE', '\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u044B', '\u042B'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u04A3', '\u04A2', '\u0436', '\u0416'],
                ['\u044D', '\u042D', '\''],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0491', '\u0490'],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u0497', '\u0496', '\u044C', '\u042C'],
                ['\u0431', '\u0411', '<'],
                ['\u044E', '\u042E', '>'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['tt']
    },
    'T\u00fcrk\u00e7e F': {
        'name': 'Turkish F',
        'keys': [
            [
                ['+', '*', '\u00ac'],
                ['1', '!', '\u00b9', '\u00a1'],
                ['2', '"', '\u00b2'],
                ['3', '^', '#', '\u00b3'],
                ['4', '$', '\u00bc', '\u00a4'],
                ['5', '%', '\u00bd'],
                ['6', '&', '\u00be'],
                ['7', '\'', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['/', '?', '\\', '\u00bf'],
                ['-', '_', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['f', 'F', '@'],
                ['g', 'G'],
                ['\u011f', '\u011e'],
                ['\u0131', 'I', '\u00b6', '\u00ae'],
                ['o', 'O'],
                ['d', 'D', '\u00a5'],
                ['r', 'R'],
                ['n', 'N'],
                ['h', 'H', '\u00f8', '\u00d8'],
                ['p', 'P', '\u00a3'],
                ['q', 'Q', '\u00a8'],
                ['w', 'W', '~'],
                ['x', 'X', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['u', 'U', '\u00e6', '\u00c6'],
                ['i', '\u0130', '\u00df', '\u00a7'],
                ['e', 'E', '\u20ac'],
                ['a', 'A', ' ', '\u00aa'],
                ['\u00fc', '\u00dc'],
                ['t', 'T'],
                ['k', 'K'],
                ['m', 'M'],
                ['l', 'L'],
                ['y', 'Y', '\u00b4'],
                ['\u015f', '\u015e'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|', '\u00a6'],
                ['j', 'J', '\u00ab', '<'],
                ['\u00f6', '\u00d6', '\u00bb', '>'],
                ['v', 'V', '\u00a2', '\u00a9'],
                ['c', 'C'],
                ['\u00e7', '\u00c7'],
                ['z', 'Z'],
                ['s', 'S', '\u00b5', '\u00ba'],
                ['b', 'B', '\u00d7'],
                ['.', ':', '\u00f7'],
                [',', ';', '-'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ]
    },
    'T\u00fcrk\u00e7e Q': {
        'name': 'Turkish Q',
        'keys': [
            [
                ['"', '\u00e9', '<'],
                ['1', '!', '>'],
                ['2', '\'', '\u00a3'],
                ['3', '^', '#'],
                ['4', '+', '$'],
                ['5', '%', '\u00bd'],
                ['6', '&'],
                ['7', '/', '{'],
                ['8', '(', '['],
                ['9', ')', ']'],
                ['0', '=', '}'],
                ['*', '?', '\\'],
                ['-', '_', '|'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '@'],
                ['w', 'W'],
                ['e', 'E', '\u20ac'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['\u0131', 'I', 'i', '\u0130'],
                ['o', 'O'],
                ['p', 'P'],
                ['\u011f', '\u011e', '\u00a8'],
                ['\u00fc', '\u00dc', '~'],
                [',', ';', '`']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e6', '\u00c6'],
                ['s', 'S', '\u00df'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                ['\u015f', '\u015e', '\u00b4'],
                ['i', '\u0130'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['<', '>', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                ['\u00f6', '\u00d6'],
                ['\u00e7', '\u00c7'],
                ['.', ':'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['tr']
    },
    '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430': {
        'name': 'Ukrainian',
        'keys': [
            [
                ['\u00b4', '~'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u0449', '\u0429'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u0457', '\u0407'],
                ['\u0491', '\u0490']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u0456', '\u0406'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u0454', '\u0404'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['uk']
    },
    'United Kingdom': {
        'name': 'United Kingdom',
        'keys': [
            [
                ['`', '\u00ac', '\u00a6'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u00a3'],
                ['4', '$', '\u20ac'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E', '\u00e9', '\u00c9'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U', '\u00fa', '\u00da'],
                ['i', 'I', '\u00ed', '\u00cd'],
                ['o', 'O', '\u00f3', '\u00d3'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['#', '~']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e1', '\u00c1'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '@'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\\', '|'],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr, KeyboardClassKey.AltGr]
            ]
        ],
        'lang': ['en-GB']
    },
    '\u0627\u0631\u062f\u0648': {
        'name': 'Urdu',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '\u066A'],
                ['6', '^'],
                ['7', '\u06D6'],
                ['8', '\u066D'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0637', '\u0638'],
                ['\u0635', '\u0636'],
                ['\u06be', '\u0630'],
                ['\u062f', '\u0688'],
                ['\u0679', '\u062B'],
                ['\u067e', '\u0651'],
                ['\u062a', '\u06C3'],
                ['\u0628', '\u0640'],
                ['\u062c', '\u0686'],
                ['\u062d', '\u062E'],
                [']', '}'],
                ['[', '{'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0645', '\u0698'],
                ['\u0648', '\u0632'],
                ['\u0631', '\u0691'],
                ['\u0646', '\u06BA'],
                ['\u0644', '\u06C2'],
                ['\u06c1', '\u0621'],
                ['\u0627', '\u0622'],
                ['\u06A9', '\u06AF'],
                ['\u06CC', '\u064A'],
                ['\u061b', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0642', '\u200D'],
                ['\u0641', '\u200C'],
                ['\u06D2', '\u06D3'],
                ['\u0633', '\u200E'],
                ['\u0634', '\u0624'],
                ['\u063a', '\u0626'],
                ['\u0639', '\u200F'],
                ['\u060C', '>'],
                ['\u06D4', '<'],
                ['/', '\u061F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['ur']
    },
    '\u0627\u0631\u062f\u0648 Phonetic': {
        'name': 'Urdu Phonetic',
        'keys': [
            [
                ['\u064D', '\u064B', '~'],
                ['\u06F1', '1', '!'],
                ['\u06F2', '2', '@'],
                ['\u06F3', '3', '#'],
                ['\u06F4', '4', '$'],
                ['\u06F5', '5', '\u066A'],
                ['\u06F6', '6', '^'],
                ['\u06F7', '7', '&'],
                ['\u06F8', '8', '*'],
                ['\u06F9', '9', '('],
                ['\u06F0', '0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0642', '\u0652'],
                ['\u0648', '\u0651', '\u0602'],
                ['\u0639', '\u0670', '\u0656'],
                ['\u0631', '\u0691', '\u0613'],
                ['\u062A', '\u0679', '\u0614'],
                ['\u06D2', '\u064E', '\u0601'],
                ['\u0621', '\u0626', '\u0654'],
                ['\u06CC', '\u0650', '\u0611'],
                ['\u06C1', '\u06C3'],
                ['\u067E', '\u064F', '\u0657'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0627', '\u0622', '\uFDF2'],
                ['\u0633', '\u0635', '\u0610'],
                ['\u062F', '\u0688', '\uFDFA'],
                ['\u0641'],
                ['\u06AF', '\u063A'],
                ['\u062D', '\u06BE', '\u0612'],
                ['\u062C', '\u0636', '\uFDFB'],
                ['\u06A9', '\u062E'],
                ['\u0644'],
                ['\u061B', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u0632', '\u0630', '\u060F'],
                ['\u0634', '\u0698', '\u060E'],
                ['\u0686', '\u062B', '\u0603'],
                ['\u0637', '\u0638'],
                ['\u0628', '', '\uFDFD'],
                ['\u0646', '\u06BA', '\u0600'],
                ['\u0645', '\u0658'],
                ['\u060C', '', '<'],
                ['\u06D4', '\u066B', '>'],
                ['/', '\u061F'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ]
    },
    'US Standard': {
        'name': 'US Standard',
        'keys': [
            [
                ['`', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q'],
                ['w', 'W'],
                ['e', 'E'],
                ['r', 'R'],
                ['t', 'T'],
                ['y', 'Y'],
                ['u', 'U'],
                ['i', 'I'],
                ['o', 'O'],
                ['p', 'P'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A'],
                ['s', 'S'],
                ['d', 'D'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z'],
                ['x', 'X'],
                ['c', 'C'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N'],
                ['m', 'M'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['en-US']
    },
    'US International': {
        'name': 'US International',
        'keys': [
            [
                ['`', '~'],
                ['1', '!', '\u00a1', '\u00b9'],
                ['2', '@', '\u00b2'],
                ['3', '#', '\u00b3'],
                ['4', '$', '\u00a4', '\u00a3'],
                ['5', '%', '\u20ac'],
                ['6', '^', '\u00bc'],
                ['7', '&', '\u00bd'],
                ['8', '*', '\u00be'],
                ['9', '(', '\u2018'],
                ['0', ')', '\u2019'],
                ['-', '_', '\u00a5'],
                ['=', '+', '\u00d7', '\u00f7'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['q', 'Q', '\u00e4', '\u00c4'],
                ['w', 'W', '\u00e5', '\u00c5'],
                ['e', 'E', '\u00e9', '\u00c9'],
                ['r', 'R', '\u00ae'],
                ['t', 'T', '\u00fe', '\u00de'],
                ['y', 'Y', '\u00fc', '\u00dc'],
                ['u', 'U', '\u00fa', '\u00da'],
                ['i', 'I', '\u00ed', '\u00cd'],
                ['o', 'O', '\u00f3', '\u00d3'],
                ['p', 'P', '\u00f6', '\u00d6'],
                ['[', '{', '\u00ab'],
                [']', '}', '\u00bb'],
                ['\\', '|', '\u00ac', '\u00a6']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['a', 'A', '\u00e1', '\u00c1'],
                ['s', 'S', '\u00df', '\u00a7'],
                ['d', 'D', '\u00f0', '\u00d0'],
                ['f', 'F'],
                ['g', 'G'],
                ['h', 'H'],
                ['j', 'J'],
                ['k', 'K'],
                ['l', 'L', '\u00f8', '\u00d8'],
                [';', ':', '\u00b6', '\u00b0'],
                ['\'', '"', '\u00b4', '\u00a8'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['z', 'Z', '\u00e6', '\u00c6'],
                ['x', 'X'],
                ['c', 'C', '\u00a9', '\u00a2'],
                ['v', 'V'],
                ['b', 'B'],
                ['n', 'N', '\u00f1', '\u00d1'],
                ['m', 'M', '\u00b5'],
                [',', '<', '\u00e7', '\u00c7'],
                ['.', '>'],
                ['/', '?', '\u00bf'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['en']
    },
    '\u040e\u0437\u0431\u0435\u043a\u0447\u0430': {
        'name': 'Uzbek Cyrillic',
        'keys': [
            [
                ['\u0451', '\u0401'],
                ['1', '!'],
                ['2', '"'],
                ['3', '\u2116'],
                ['4', ';'],
                ['5', '%'],
                ['6', ':'],
                ['7', '?'],
                ['8', '*'],
                ['9', '('],
                ['0', ')'],
                ['\u0493', '\u0492'],
                ['\u04B3', '\u04B2'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u0439', '\u0419'],
                ['\u0446', '\u0426'],
                ['\u0443', '\u0423'],
                ['\u043A', '\u041A'],
                ['\u0435', '\u0415'],
                ['\u043D', '\u041D'],
                ['\u0433', '\u0413'],
                ['\u0448', '\u0428'],
                ['\u045E', '\u040E'],
                ['\u0437', '\u0417'],
                ['\u0445', '\u0425'],
                ['\u044A', '\u042A'],
                ['\\', '/']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u0444', '\u0424'],
                ['\u049B', '\u049A'],
                ['\u0432', '\u0412'],
                ['\u0430', '\u0410'],
                ['\u043F', '\u041F'],
                ['\u0440', '\u0420'],
                ['\u043E', '\u041E'],
                ['\u043B', '\u041B'],
                ['\u0434', '\u0414'],
                ['\u0436', '\u0416'],
                ['\u044D', '\u042D'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u044F', '\u042F'],
                ['\u0447', '\u0427'],
                ['\u0441', '\u0421'],
                ['\u043C', '\u041C'],
                ['\u0438', '\u0418'],
                ['\u0442', '\u0422'],
                ['\u044C', '\u042C'],
                ['\u0431', '\u0411'],
                ['\u044E', '\u042E'],
                ['.', ','],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['uz']
    },
    '\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9': {
        'name': 'Yiddish',
        'keys': [
            [
                [';', '~', '\u05B0'],
                ['1', '!', '\u05B1'],
                ['2', '@', '\u05B2'],
                ['3', '#', '\u05B3'],
                ['4', '$', '\u05B4'],
                ['5', '%', '\u05B5'],
                ['6', '^', '\u05B6'],
                ['7', '*', '\u05B7'],
                ['8', '&', '\u05B8'],
                ['9', '(', '\u05C2'],
                ['0', ')', '\u05C1'],
                ['-', '_', '\u05B9'],
                ['=', '+', '\u05BC'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['/', '\u201F', '\u201F'],
                ['\'', '\u201E', '\u201E'],
                ['\u05E7', '`', '`'],
                ['\u05E8', '\uFB2F', '\uFB2F'],
                ['\u05D0', '\uFB2E', '\uFB2E'],
                ['\u05D8', '\u05F0', '\u05F0'],
                ['\u05D5', '\uFB35', '\uFB35'],
                ['\u05DF', '\uFB4B', '\uFB4B'],
                ['\u05DD', '\uFB4E', '\uFB4E'],
                ['\u05E4', '\uFB44', '\uFB44'],
                ['[', '{', '\u05BD'],
                [']', '}', '\u05BF'],
                ['\\', '|', '\u05BB']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u05E9', '\uFB2A', '\uFB2A'],
                ['\u05D3', '\uFB2B', '\uFB2B'],
                ['\u05D2'],
                ['\u05DB', '\uFB3B', '\uFB3B'],
                ['\u05E2', '\u05F1', '\u05F1'],
                ['\u05D9', '\uFB1D', '\uFB1D'],
                ['\u05D7', '\uFF1F', '\uFF1F'],
                ['\u05DC', '\u05F2', '\u05F2'],
                ['\u05DA'],
                ['\u05E3', ':', '\u05C3'],
                [',', '"', '\u05C0'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u05D6', '\u2260', '\u2260'],
                ['\u05E1', '\uFB4C', '\uFB4C'],
                ['\u05D1', '\uFB31', '\uFB31'],
                ['\u05D4', '\u05BE', '\u05BE'],
                ['\u05E0', '\u2013', '\u2013'],
                ['\u05DE', '\u2014', '\u2014'],
                ['\u05E6', '\uFB4A', '\uFB4A'],
                ['\u05EA', '<', '\u05F3'],
                ['\u05E5', '>', '\u05F4'],
                ['.', '?', '\u20AA'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['yi']
    },
    '\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05dc\u05e2\u05d1\u05d8': {
        'name': 'Yiddish (Yidish Lebt)',
        'keys': [
            [
                [';', '~'],
                ['1', '!', '\u05B2', '\u05B2'],
                ['2', '@', '\u05B3', '\u05B3'],
                ['3', '#', '\u05B1', '\u05B1'],
                ['4', '$', '\u05B4', '\u05B4'],
                ['5', '%', '\u05B5', '\u05B5'],
                ['6', '^', '\u05B7', '\u05B7'],
                ['7', '&', '\u05B8', '\u05B8'],
                ['8', '*', '\u05BB', '\u05BB'],
                ['9', ')', '\u05B6', '\u05B6'],
                ['0', '(', '\u05B0', '\u05B0'],
                ['-', '_', '\u05BF', '\u05BF'],
                ['=', '+', '\u05B9', '\u05B9'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['/', '', '\u05F4', '\u05F4'],
                ['\'', '', '\u05F3', '\u05F3'],
                ['\u05E7', '', '\u20AC'],
                ['\u05E8'],
                ['\u05D0', '', '\u05D0\u05B7', '\uFB2E'],
                ['\u05D8', '', '\u05D0\u05B8', '\uFB2F'],
                ['\u05D5', '\u05D5\u05B9', '\u05D5\u05BC', '\uFB35'],
                ['\u05DF', '', '\u05D5\u05D5', '\u05F0'],
                ['\u05DD', '', '\u05BC'],
                ['\u05E4', '', '\u05E4\u05BC', '\uFB44'],
                [']', '}', '\u201E', '\u201D'],
                ['[', '{', '\u201A', '\u2019'],
                ['\\', '|', '\u05BE', '\u05BE']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u05E9', '\u05E9\u05C1', '\u05E9\u05C2', '\uFB2B'],
                ['\u05D3', '', '\u20AA'],
                ['\u05D2', '\u201E'],
                ['\u05DB', '', '\u05DB\u05BC', '\uFB3B'],
                ['\u05E2', '', '', '\uFB20'],
                ['\u05D9', '', '\u05D9\u05B4', '\uFB1D'],
                ['\u05D7', '', '\u05F2\u05B7', '\uFB1F'],
                ['\u05DC', '\u05DC\u05B9', '\u05D5\u05D9', '\u05F1'],
                ['\u05DA', '', '', '\u05F2'],
                ['\u05E3', ':', '\u05E4\u05BF', '\uFB4E'],
                [',', '"', ';', '\u05B2'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u05D6', '', '\u2013', '\u2013'],
                ['\u05E1', '', '\u2014', '\u2014'],
                ['\u05D1', '\u05DC\u05B9', '\u05D1\u05BF', '\uFB4C'],
                ['\u05D4', '', '\u201D', '\u201C'],
                ['\u05E0', '', '\u059C', '\u059E'],
                ['\u05DE', '', '\u2019', '\u2018'],
                ['\u05E6', '', '\u05E9\u05C1', '\uFB2A'],
                ['\u05EA', '>', '\u05EA\u05BC', '\uFB4A'],
                ['\u05E5', '<'],
                ['.', '?', '\u2026'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space],
                [KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt, KeyboardClassKey.Alt]
            ]
        ],
        'lang': ['yi']
    },
    '\u4e2d\u6587\u6ce8\u97f3\u7b26\u53f7': {
        'name': 'Chinese Bopomofo IME',
        'keys': [
            [
                ['\u20AC', '~'],
                ['\u3105', '!'],
                ['\u3109', '@'],
                ['\u02C7', '#'],
                ['\u02CB', '$'],
                ['\u3113', '%'],
                ['\u02CA', '^'],
                ['\u02D9', '&'],
                ['\u311A', '*'],
                ['\u311E', ')'],
                ['\u3122', '('],
                ['\u3126', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u3106', 'q'],
                ['\u310A', 'w'],
                ['\u310D', 'e'],
                ['\u3110', 'r'],
                ['\u3114', 't'],
                ['\u3117', 'y'],
                ['\u3127', 'u'],
                ['\u311B', 'i'],
                ['\u311F', 'o'],
                ['\u3123', 'p'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u3107', 'a'],
                ['\u310B', 's'],
                ['\u310E', 'd'],
                ['\u3111', 'f'],
                ['\u3115', 'g'],
                ['\u3118', 'h'],
                ['\u3128', 'j'],
                ['\u311C', 'k'],
                ['\u3120', 'l'],
                ['\u3124', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\u3108', 'z'],
                ['\u310C', 'x'],
                ['\u310F', 'c'],
                ['\u3112', 'v'],
                ['\u3116', 'b'],
                ['\u3119', 'n'],
                ['\u3129', 'm'],
                ['\u311D', '<'],
                ['\u3121', '>'],
                ['\u3125', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['zh-BOPO']
    },
    '\u4e2d\u6587\u4ed3\u9889\u8f93\u5165\u6cd5': {
        'name': 'Chinese Cangjie IME',
        'keys': [
            [
                ['\u20AC', '~'],
                ['1', '!'],
                ['2', '@'],
                ['3', '#'],
                ['4', '$'],
                ['5', '%'],
                ['6', '^'],
                ['7', '&'],
                ['8', '*'],
                ['9', ')'],
                ['0', '('],
                ['-', '_'],
                ['=', '+'],
                [KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp, KeyboardClassKey.Bksp]
            ],
            [
                [KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab, KeyboardClassKey.Tab],
                ['\u624B', 'q'],
                ['\u7530', 'w'],
                ['\u6C34', 'e'],
                ['\u53E3', 'r'],
                ['\u5EFF', 't'],
                ['\u535C', 'y'],
                ['\u5C71', 'u'],
                ['\u6208', 'i'],
                ['\u4EBA', 'o'],
                ['\u5FC3', 'p'],
                ['[', '{'],
                [']', '}'],
                ['\\', '|']
            ],
            [
                [KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps, KeyboardClassKey.Caps],
                ['\u65E5', 'a'],
                ['\u5C38', 's'],
                ['\u6728', 'd'],
                ['\u706B', 'f'],
                ['\u571F', 'g'],
                ['\u7AF9', 'h'],
                ['\u5341', 'j'],
                ['\u5927', 'k'],
                ['\u4E2D', 'l'],
                [';', ':'],
                ['\'', '"'],
                [KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter, KeyboardClassKey.Enter]
            ],
            [
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift],
                ['\uFF3A', 'z'],
                ['\u96E3', 'x'],
                ['\u91D1', 'c'],
                ['\u5973', 'v'],
                ['\u6708', 'b'],
                ['\u5F13', 'n'],
                ['\u4E00', 'm'],
                [',', '<'],
                ['.', '>'],
                ['/', '?'],
                [KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift, KeyboardClassKey.Shift]
            ],
            [
                [KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space, KeyboardClassKey.Space]
            ]
        ],
        'lang': ['zh']
    }
};
// aliases
keyboardLayouts['Hrvatski'] = {
    'name': 'Croatian',
    'keys': keyboardLayouts['Bosanski'].keys.slice(0),
    'lang': ['hr']
};
keyboardLayouts['Sloven\u0161\u010dina'] = {
    'name': 'Slovenian',
    'keys': keyboardLayouts['Bosanski'].keys.slice(0),
    'lang': ['sl']
};
keyboardLayouts['Srpski'] = {
    'name': 'Serbian Latin',
    'keys': keyboardLayouts['Bosanski'].keys.slice(0),
    'lang': ['sr']
};
export { keyboardLayouts, MAT_KEYBOARD_LAYOUTS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtbGF5b3V0cy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9zcmMvY29uZmlncy9rZXlib2FyZC1sYXlvdXRzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9HRztBQUNILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHcEUsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLGNBQWMsQ0FBbUIseUJBQXlCLENBQUMsQ0FBQztBQUM3RixNQUFNLGVBQWUsR0FBcUI7SUFDeEMsNENBQTRDLEVBQUU7UUFDNUMsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO2dCQUNyQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxF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Q0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNaO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFR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eEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2FBQzFCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxD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QztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtB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LElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUNyQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQzthQUN6QztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUs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LEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2FBQ1o7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO0tBQ0Y7SUFDRCxrREFBa0QsRUFBRTtRQUNsRCxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7YUFDdEI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxJ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LEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ2hDO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUs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QVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUNyQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2FBQ2pCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMs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QUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2FBQ2hCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxD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QUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzthQUNYO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDMUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FB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USxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDeEI7SUFDRCx1RkFBdUYsRUFBRTtRQUN2RixNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7YUFDakI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxlQUFlLEVBQUU7UUFDZixNQUFNLEVBQUUsV0FBVztRQUNuQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztnQkFDMUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2hCLENBQUMsR0FB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Q1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDZjtJQUNELG9CQUFvQixFQUFFO1FBQ3BCLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDNUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDcEM7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ2xDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzthQUN6RjtTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCw0Q0FBNEMsRUFBRTtRQUM1QyxNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2FBQ1g7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFF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LENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNE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QUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxH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QUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUs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QyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcs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QUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ3JCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxzQ0FBc0MsRUFBRTtRQUN0QyxNQUFNLEVBQUUsV0FBVztRQUNuQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUM7Z0JBQy9CLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQztnQkFDckMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbkIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDO2dCQUNsQyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ2xDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDO2FBQ2Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDO2dCQUNsQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsQ0FBQztnQkFDTCxDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxlQUFlLEVBQUU7UUFDZixNQUFNLEVBQUUsZUFBZTtRQUN2QixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FB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QUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFB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LENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVB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Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxF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R0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7YUFDdEI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixD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RixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUNoQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ3JCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FB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LENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JB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QUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FB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Q0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFB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RUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsVUFBVTtRQUNsQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7YUFDckI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENB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LENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztn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QUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7S0FDcEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNaO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUNoQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0lBQ0QscUJBQXFCLEVBQUU7UUFDckIsTUFBTSxFQUFFLGNBQWM7UUFDdEIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3JCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQzthQUNyQjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztn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QVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2FBQ2hCO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNuQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7S0FDaEI7SUFDRCxnQ0FBZ0MsRUFBRTtRQUNoQyxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbkIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbkIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbkIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbkIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbkIsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxDQUFDO2dCQUNyQyxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLENBQUM7Z0JBQ3JDLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQztnQkFDckMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbkIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbkIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDekIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbEIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxDQUFDO2FBQ1g7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQztnQkFDakMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxzQ0FBc0MsRUFBRTtRQUN0QyxNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUM7Z0JBQy9CLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ25CLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQztnQkFDckMsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxDQUFDO2dCQUNyQyxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxRQUFRLENBQUM7Z0JBQ3JDLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsQ0FBQztnQkFDckMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQztnQkFDbEMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDO2FBQ2Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDO2dCQUNsQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsQ0FBQztnQkFDTCxDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO1FBQ0QsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFDRCxzQkFBc0IsRUFBRTtRQUN0QixNQUFNLEVBQUUsWUFBWTtRQUNwQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDN0Y7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztnQkFDeEYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDOUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7YUFDdkI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUN0QixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0lBQ0QsNkJBQTZCLEVBQUU7UUFDN0IsTUFBTSxFQUFFLGVBQWU7UUFDdkIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDckI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDZjtJQUNELCtCQUErQixFQUFFO1FBQy9CLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUM3RjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDckI7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQztnQkFDNUYsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztTQUNGO0tBQ0Y7SUFDRCw0Q0FBNEMsRUFBRTtRQUM1QyxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRTtZQUNOO2dCQUNFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNaO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDO2dCQUMxQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUN4QyxD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QUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2dCQUN4RixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDWDtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztnQkFDWCxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztLQUNsQjtJQUNELDBCQUEwQixFQUFFO1FBQzFCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDZixDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ2YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7YUFDWjtZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2dCQUNYLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFD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QUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNaO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztLQUNsQjtJQUNELGtCQUFrQixFQUFFO1FBQ2xCLE1BQU0sRUFBRSxrQkFBa0I7UUFDMUIsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQzdGO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3hGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2FBQ2hDO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQzVGLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDL0IsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQzlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDOUIsQ0FBQyxHQUFH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Z0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUM1RixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7Z0JBQ3BCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFDcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxD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QUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsQ0FBQztnQkFDVixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUNwQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQzthQUNqRztZQUNEO2dCQUNFLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUNoRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO2dCQUM5QixDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUN6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QUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7Z0JBQ1gsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7WUFDRDtnQkFDRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQztnQkFDaEcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQztnQkFDZixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7Z0JBQ2YsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO2dCQUNmLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNWLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1lBQ0Q7Z0JBQ0UsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDakc7U0FDRjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztLQUNmO0NBQ0YsQ0FBQztBQUVGLFVBQVU7QUFDVixlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUc7SUFDNUIsTUFBTSxFQUFFLFVBQVU7SUFDbEIsTUFBTSxFQUFFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDZixDQUFDO0FBRUYsZUFBZSxDQUFDLHVCQUF1QixDQUFDLEdBQUc7SUFDekMsTUFBTSxFQUFFLFdBQVc7SUFDbkIsTUFBTSxFQUFFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Q0FDZixDQUFDO0FBRUYsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHO0lBQzFCLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLE1BQU0sRUFBRSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakQsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0NBQ2YsQ0FBQztBQUVGLE9BQU8sRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFJFQURNRSBmcm9tIGh0dHA6Ly93d3cuZ3JleXd5dmVybi5jb20vY29kZS9qYXZhc2NyaXB0L2tleWJvYXJkLmpzXHJcbiAqIC0tLS0tLVxyXG4gKlxyXG4gKiAtIExheSBvdXQgZWFjaCBrZXlib2FyZCBpbiByb3dzIG9mIHN1Yi1hcnJheXMuICBFYWNoIHN1Yi1hcnJheVxyXG4gKiAgIHJlcHJlc2VudHMgb25lIGtleS5cclxuICpcclxuICogLSBFYWNoIHN1Yi1hcnJheSBjb25zaXN0cyBvZiBmb3VyIHNsb3RzIGRlc2NyaWJlZCBhcyBmb2xsb3dzOlxyXG4gKiAgICAgZXhhbXBsZTogW1wiYVwiLCBcIkFcIiwgXCJcXHUwMGUxXCIsIFwiXFx1MDBjMVwiXVxyXG4gKlxyXG4gKiAgICAgICAgICBhKSBOb3JtYWwgY2hhcmFjdGVyXHJcbiAqICAgICAgICAgIEEpIENoYXJhY3RlciArIFNoaWZ0L0NhcHNcclxuICogICAgIFxcdTAwZTEpIENoYXJhY3RlciArIEFsdC9BbHRHci9BbHRMa1xyXG4gKiAgICAgXFx1MDBjMSkgQ2hhcmFjdGVyICsgU2hpZnQvQ2FwcyArIEFsdC9BbHRHci9BbHRMa1xyXG4gKlxyXG4gKiAgIFlvdSBtYXkgaW5jbHVkZSBzdWItYXJyYXlzIHdoaWNoIGFyZSBmZXdlciB0aGFuIGZvdXIgc2xvdHMuXHJcbiAqICAgSW4gdGhlc2UgY2FzZXMsIHRoZSBtaXNzaW5nIHNsb3RzIHdpbGwgYmUgYmxhbmtlZCB3aGVuIHRoZVxyXG4gKiAgIGNvcnJlc3BvbmRpbmcgbW9kaWZpZXIga2V5IChTaGlmdCBvciBBbHRHcikgaXMgcHJlc3NlZC5cclxuICpcclxuICogLSBJZiB0aGUgc2Vjb25kIHNsb3Qgb2YgYSBzdWItYXJyYXkgbWF0Y2hlcyBvbmUgb2YgdGhlIGZvbGxvd2luZ1xyXG4gKiAgIHN0cmluZ3M6XHJcbiAqICAgICBcIlRhYlwiLCBcIkNhcHNcIiwgXCJTaGlmdFwiLCBcIkVudGVyXCIsIFwiQmtzcFwiLFxyXG4gKiAgICAgXCJBbHRcIiBPUiBcIkFsdEdyXCIsIFwiQWx0TGtcIlxyXG4gKiAgIHRoZW4gdGhlIGZ1bmN0aW9uIG9mIHRoZSBrZXkgd2lsbCBiZSB0aGUgZm9sbG93aW5nLFxyXG4gKiAgIHJlc3BlY3RpdmVseTpcclxuICogICAgIC0gSW5zZXJ0IGEgdGFiXHJcbiAqICAgICAtIFRvZ2dsZSBDYXBzIExvY2sgKHRlY2huaWNhbGx5IGEgU2hpZnQgTG9jaylcclxuICogICAgIC0gTmV4dCBlbnRlcmVkIGNoYXJhY3RlciB3aWxsIGJlIHRoZSBzaGlmdGVkIGNoYXJhY3RlclxyXG4gKiAgICAgLSBJbnNlcnQgYSBuZXdsaW5lICh0ZXh0YXJlYSksIG9yIGNsb3NlIHRoZSBrZXlib2FyZFxyXG4gKiAgICAgLSBEZWxldGUgdGhlIHByZXZpb3VzIGNoYXJhY3RlclxyXG4gKiAgICAgLSBOZXh0IGVudGVyZWQgY2hhcmFjdGVyIHdpbGwgYmUgdGhlIGFsdGVybmF0ZSBjaGFyYWN0ZXJcclxuICogICAgIC0gVG9nZ2xlIEFsdC9BbHRHciBMb2NrXHJcbiAqXHJcbiAqICAgVGhlIGZpcnN0IHNsb3Qgb2YgdGhpcyBzdWItYXJyYXkgd2lsbCBiZSB0aGUgdGV4dCB0byBkaXNwbGF5XHJcbiAqICAgb24gdGhlIGNvcnJlc3BvbmRpbmcga2V5LiAgVGhpcyBhbGxvd3MgZm9yIGVhc3kgbG9jYWxpc2F0aW9uXHJcbiAqICAgb2Yga2V5IG5hbWVzLlxyXG4gKlxyXG4gKiAtIExheW91dCBkZWFkIGtleXMgKGRpYWNyaXRpYyArIGxldHRlcikgc2hvdWxkIGJlIGFkZGVkIGFzXHJcbiAqICAgcHJvcGVydHkvdmFsdWUgcGFpcnMgb2Ygb2JqZWN0cyB3aXRoIGhhc2gga2V5cyBlcXVhbCB0byB0aGVcclxuICogICBkaWFjcml0aWMuICBTZWUgdGhlIFwidGhpcy5WS0lfZGVhZGtleVwiIG9iamVjdCBiZWxvdyB0aGUgbGF5b3V0XHJcbiAqICAgZGVmaW5pdGlvbnMuICBJbiBlYWNoIHByb3BlcnR5L3ZhbHVlIHBhaXIsIHRoZSB2YWx1ZSBpcyB3aGF0XHJcbiAqICAgdGhlIGRpYWNyaXRpYyB3b3VsZCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgdG8uXHJcbiAqXHJcbiAqIC0gTm90ZSB0aGF0IGFueSBjaGFyYWN0ZXJzIGJleW9uZCB0aGUgbm9ybWFsIEFTQ0lJIHNldCBzaG91bGQgYmVcclxuICogICBlbnRlcmVkIGluIGVzY2FwZWQgVW5pY29kZSBmb3JtYXQuICAoZWcgXFx1MDBhMyA9IFBvdW5kIHN5bWJvbClcclxuICogICBZb3UgY2FuIGZpbmQgVW5pY29kZSB2YWx1ZXMgZm9yIGNoYXJhY3RlcnMgaGVyZTpcclxuICogICAgIGh0dHA6Ly91bmljb2RlLm9yZy9jaGFydHMvXHJcbiAqXHJcbiAqIC0gVG8gcmVtb3ZlIGEga2V5Ym9hcmQsIGp1c3QgZGVsZXRlIGl0LCBvciBjb21tZW50IGl0IG91dCBvZiB0aGVcclxuICogICBzb3VyY2UgY29kZS4gSWYgeW91IGRlY2lkZSB0byByZW1vdmUgdGhlIFVTIEludGVybmF0aW9uYWxcclxuICogICBrZXlib2FyZCBsYXlvdXQsIG1ha2Ugc3VyZSB5b3UgY2hhbmdlIHRoZSBkZWZhdWx0IGxheW91dFxyXG4gKiAgICh0aGlzLlZLSV9rdCkgYWJvdmUgc28gaXQgcmVmZXJlbmNlcyBhbiBleGlzdGluZyBsYXlvdXQuXHJcbiAqXHJcbiAqIENSRURJVFNcclxuICogLS0tLS0tLVxyXG4gKlxyXG4gKiBTZWUgaHR0cDovL3d3dy5ncmV5d3l2ZXJuLmNvbS9jb2RlL2phdmFzY3JpcHQva2V5Ym9hcmQgZm9yIGV4YW1wbGVzXHJcbiAqIGFuZCB1c2FnZSBpbnN0cnVjdGlvbnMuXHJcbiAqXHJcbiAqIFZlcnNpb24gMS40OSAtIE5vdmVtYmVyIDgsIDIwMTFcclxuICogICAtIERvbid0IGRpc3BsYXkgbGFuZ3VhZ2UgZHJvcC1kb3duIGlmIG9ubHkgb25lIGtleWJvYXJkIGF2YWlsYWJsZVxyXG4gKlxyXG4gKiAgIFNlZSBmdWxsIGNoYW5nZWxvZyBhdDpcclxuICogICAgIGh0dHA6Ly93d3cuZ3JleXd5dmVybi5jb20vY29kZS9qYXZhc2NyaXB0L2tleWJvYXJkLmNoYW5nZWxvZy50eHRcclxuICpcclxuICogS2V5Ym9hcmQgQ3JlZGl0c1xyXG4gKiAgIC0gWWlkZGlzaCAoWWlkaXNoIExlYnQpIGtleWJvYXJkIGxheW91dCBieSBTaW1jaGUgVGF1YiAoamlkeXN6Lm5ldClcclxuICogICAtIFVyZHUgUGhvbmV0aWMga2V5Ym9hcmQgbGF5b3V0IGJ5IEtoYWxpZCBNYWxpa1xyXG4gKiAgIC0gWWlkZGlzaCBrZXlib2FyZCBsYXlvdXQgYnkgSGVsbXV0IFdvbGxtZXJzZG9yZmVyXHJcbiAqICAgLSBLaG1lciBrZXlib2FyZCBsYXlvdXQgYnkgU292YW5uIEhlbmcgKGttLWtoLmNvbSlcclxuICogICAtIERhcmkga2V5Ym9hcmQgbGF5b3V0IGJ5IFNhaWYgRmF6ZWxcclxuICogICAtIEt1cmRpc2gga2V5Ym9hcmQgbGF5b3V0IGJ5IEFyYSBRYWRpclxyXG4gKiAgIC0gQXNzYW1lc2Uga2V5Ym9hcmQgbGF5b3V0IGJ5IEthbmNoYW4gR29nb2lcclxuICogICAtIEJ1bGdhcmlhbiBCRFMga2V5Ym9hcmQgbGF5b3V0IGJ5IE1pbGVuIEdlb3JnaWV2XHJcbiAqICAgLSBCYXNpYyBKYXBhbmVzZSBIaXJhZ2FuYS9LYXRha2FuYSBrZXlib2FyZCBsYXlvdXQgYnkgRGFtamFuXHJcbiAqICAgLSBVa3JhaW5pYW4ga2V5Ym9hcmQgbGF5b3V0IGJ5IERtaXRyeSBOaWtpdGluXHJcbiAqICAgLSBNYWNlZG9uaWFuIGtleWJvYXJkIGxheW91dCBieSBEYW1qYW4gRGltaXRyaW9za2lcclxuICogICAtIFBhc2h0byBrZXlib2FyZCBsYXlvdXQgYnkgQWhtYWQgV2FsaSBBY2hha3phaSAocWFtb3NvbmEuY29tKVxyXG4gKiAgIC0gQXJtZW5pYW4gRWFzdGVybiBhbmQgV2VzdGVybiBrZXlib2FyZCBsYXlvdXRzIGJ5IEhheWFzdGFuIFByb2plY3QgKHd3dy5oYXlhc3Rhbi5jby51aylcclxuICogICAtIFBpbnlpbiBrZXlib2FyZCBsYXlvdXQgZnJvbSBhIGNvbGxhYm9yYXRpb24gd2l0aCBMb3UgV2lua2xlbWFublxyXG4gKiAgIC0gS2F6YWtoIGtleWJvYXJkIGxheW91dCBieSBBbGV4IE1hZHlhbmtpblxyXG4gKiAgIC0gRGFuaXNoIGtleWJvYXJkIGxheW91dCBieSBWZXJuZXIgS2rDg8KmcnNnYWFyZFxyXG4gKiAgIC0gU2xvdmFrIGtleWJvYXJkIGxheW91dCBieSBEYW5pZWwgTGFyYSAod3d3LmxlYXJuaW5nc2xvdmFrLmNvbSlcclxuICogICAtIEJlbGFydXNpYW4gYW5kIFNlcmJpYW4gQ3lyaWxsaWMga2V5Ym9hcmQgbGF5b3V0cyBieSBFdmdlbml5IFRpdG92XHJcbiAqICAgLSBCdWxnYXJpYW4gUGhvbmV0aWMga2V5Ym9hcmQgbGF5b3V0IGJ5IFNhbXVpbCBHb3Nwb2Rpbm92XHJcbiAqICAgLSBTd2VkaXNoIGtleWJvYXJkIGxheW91dCBieSBIw4PCpWthbiBTYW5kYmVyZ1xyXG4gKiAgIC0gUm9tYW5pYW4ga2V5Ym9hcmQgbGF5b3V0IGJ5IEF1cmVsXHJcbiAqICAgLSBGYXJzaSAoUGVyc2lhbikga2V5Ym9hcmQgbGF5b3V0IGJ5IEthdmVoIEJha2h0aXlhcmkgKHd3dy5iYWtodGl5YXJpLmNvbSlcclxuICogICAtIEJ1cm1lc2Uga2V5Ym9hcmQgbGF5b3V0IGJ5IENldGFuYXBhXHJcbiAqICAgLSBCb3NuaWFuL0Nyb2F0aWFuL1NlcmJpYW4gTGF0aW4vU2xvdmVuaWFuIGtleWJvYXJkIGxheW91dCBieSBNaXJhbiBaZWxqa29cclxuICogICAtIEh1bmdhcmlhbiBrZXlib2FyZCBsYXlvdXQgYnkgQW50YWwgU2FsbCAnSGlyb21hY3UnXHJcbiAqICAgLSBBcmFiaWMga2V5Ym9hcmQgbGF5b3V0IGJ5IFNyaW5pdmFzIFJlZGR5XHJcbiAqICAgLSBJdGFsaWFuIGFuZCBTcGFuaXNoIChTcGFpbikga2V5Ym9hcmQgbGF5b3V0cyBieSBkaWN0aW9uYXJpc3QuY29tXHJcbiAqICAgLSBMaXRodWFuaWFuIGFuZCBSdXNzaWFuIGtleWJvYXJkIGxheW91dHMgYnkgUmFtdW5hc1xyXG4gKiAgIC0gR2VybWFuIGtleWJvYXJkIGxheW91dCBieSBRdUhub1xyXG4gKiAgIC0gRnJlbmNoIGtleWJvYXJkIGxheW91dCBieSBIaWRkZW4gRXZpbFxyXG4gKiAgIC0gUG9saXNoIFByb2dyYW1tZXJzIGxheW91dCBieSBtb29zZVxyXG4gKiAgIC0gVHVya2lzaCBrZXlib2FyZCBsYXlvdXRzIGJ5IG9mZmN1XHJcbiAqICAgLSBEdXRjaCBhbmQgVVMgSW50J2wga2V5Ym9hcmQgbGF5b3V0cyBieSBqZXJvbmVcclxuICpcclxuICovXHJcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtleWJvYXJkQ2xhc3NLZXkgfSBmcm9tICcuLi9lbnVtcy9rZXlib2FyZC1jbGFzcy1rZXkuZW51bSc7XHJcbmltcG9ydCB7IElLZXlib2FyZExheW91dHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2tleWJvYXJkLWxheW91dHMuaW50ZXJmYWNlJztcclxuXHJcbmNvbnN0IE1BVF9LRVlCT0FSRF9MQVlPVVRTID0gbmV3IEluamVjdGlvblRva2VuPElLZXlib2FyZExheW91dHM+KCdrZXlib2FyZC1sYXlvdXRzLmNvbmZpZycpO1xyXG5jb25zdCBrZXlib2FyZExheW91dHM6IElLZXlib2FyZExheW91dHMgPSB7XHJcbiAgJ1xcdTA2MjdcXHUwNjQ0XFx1MDYzOVxcdTA2MzFcXHUwNjI4XFx1MDY0YVxcdTA2MjknOiB7XHJcbiAgICAnbmFtZSc6ICdBcmFiaWMnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTA2MzAnLCAnXFx1MDY1MSAnXSxcclxuICAgICAgICBbJzEnLCAnIScsICdcXHUwMGExJywgJ1xcdTAwYjknXSxcclxuICAgICAgICBbJzInLCAnQCcsICdcXHUwMGIyJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBiMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwYTQnLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMGJjJ10sXHJcbiAgICAgICAgWyc3JywgJyYnLCAnXFx1MDBiZCddLFxyXG4gICAgICAgIFsnOCcsICcqJywgJ1xcdTAwYmUnXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUyMDE4J10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MjAxOSddLFxyXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTAwYTUnXSxcclxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMGQ3JywgJ1xcdTAwZjcnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA2MzYnLCAnXFx1MDY0ZSddLFxyXG4gICAgICAgIFsnXFx1MDYzNScsICdcXHUwNjRiJ10sXHJcbiAgICAgICAgWydcXHUwNjJiJywgJ1xcdTA2NGYnXSxcclxuICAgICAgICBbJ1xcdTA2NDInLCAnXFx1MDY0YyddLFxyXG4gICAgICAgIFsnXFx1MDY0MScsICdcXHUwNjQ0J10sXHJcbiAgICAgICAgWydcXHUwNjNhJywgJ1xcdTA2MjUnXSxcclxuICAgICAgICBbJ1xcdTA2MzknLCAnXFx1MjAxOCddLFxyXG4gICAgICAgIFsnXFx1MDY0NycsICdcXHUwMGY3J10sXHJcbiAgICAgICAgWydcXHUwNjJlJywgJ1xcdTAwZDcnXSxcclxuICAgICAgICBbJ1xcdTA2MmQnLCAnXFx1MDYxYiddLFxyXG4gICAgICAgIFsnXFx1MDYyYycsICc8J10sXHJcbiAgICAgICAgWydcXHUwNjJmJywgJz4nXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA2MzQnLCAnXFx1MDY1MCddLFxyXG4gICAgICAgIFsnXFx1MDYzMycsICdcXHUwNjRkJ10sXHJcbiAgICAgICAgWydcXHUwNjRhJywgJ10nXSxcclxuICAgICAgICBbJ1xcdTA2MjgnLCAnWyddLFxyXG4gICAgICAgIFsnXFx1MDY0NCcsICdcXHUwNjQ0J10sXHJcbiAgICAgICAgWydcXHUwNjI3JywgJ1xcdTA2MjMnXSxcclxuICAgICAgICBbJ1xcdTA2MmEnLCAnXFx1MDY0MCddLFxyXG4gICAgICAgIFsnXFx1MDY0NicsICdcXHUwNjBjJ10sXHJcbiAgICAgICAgWydcXHUwNjQ1JywgJy8nXSxcclxuICAgICAgICBbJ1xcdTA2NDMnLCAnOiddLFxyXG4gICAgICAgIFsnXFx1MDYzNycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDYyNicsICd+J10sXHJcbiAgICAgICAgWydcXHUwNjIxJywgJ1xcdTA2NTInXSxcclxuICAgICAgICBbJ1xcdTA2MjQnLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDYzMScsICd7J10sXHJcbiAgICAgICAgWydcXHUwNjQ0JywgJ1xcdTA2NDQnXSxcclxuICAgICAgICBbJ1xcdTA2NDknLCAnXFx1MDYyMiddLFxyXG4gICAgICAgIFsnXFx1MDYyOScsICdcXHUyMDE5J10sXHJcbiAgICAgICAgWydcXHUwNjQ4JywgJywnXSxcclxuICAgICAgICBbJ1xcdTA2MzInLCAnLiddLFxyXG4gICAgICAgIFsnXFx1MDYzOCcsICdcXHUwNjFmJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2FyJ11cclxuICB9LFxyXG4gICdcXHUwOTg1XFx1MDliOFxcdTA5YWVcXHUwOWMwXFx1MDlkZlxcdTA5YmUnOiB7XHJcbiAgICAnbmFtZSc6ICdBc3NhbWVzZScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnKycsICc/J10sXHJcbiAgICAgICAgWydcXHUwOUU3JywgJ3snLCAnXFx1MDlFNyddLFxyXG4gICAgICAgIFsnXFx1MDlFOCcsICd9JywgJ1xcdTA5RTgnXSxcclxuICAgICAgICBbJ1xcdTA5RTknLCAnXFx1MDlDRFxcdTA5RjAnLCAnXFx1MDlFOSddLFxyXG4gICAgICAgIFsnXFx1MDlFQScsICdcXHUwOUYwXFx1MDlDRCcsICdcXHUwOUVBJ10sXHJcbiAgICAgICAgWydcXHUwOUVCJywgJ1xcdTA5OUNcXHUwOUNEXFx1MDlGMCcsICdcXHUwOUVCJ10sXHJcbiAgICAgICAgWydcXHUwOUVDJywgJ1xcdTA5OTVcXHUwOUNEXFx1MDlCNycsICdcXHUwOUVDJ10sXHJcbiAgICAgICAgWydcXHUwOUVEJywgJ1xcdTA5OTVcXHUwOUNEXFx1MDlGMCcsICdcXHUwOUVEJ10sXHJcbiAgICAgICAgWydcXHUwOUVFJywgJ1xcdTA5QjZcXHUwOUNEXFx1MDlGMCcsICdcXHUwOUVFJ10sXHJcbiAgICAgICAgWydcXHUwOUVGJywgJygnLCAnXFx1MDlFRiddLFxyXG4gICAgICAgIFsnXFx1MDlFNicsICcpJywgJ1xcdTA5RTYnXSxcclxuICAgICAgICBbJy0nLCAnJ10sXHJcbiAgICAgICAgWydcXHUwOUMzJywgJ1xcdTA5OEInLCAnXFx1MDlFMicsICdcXHUwOUUwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwOUNDJywgJ1xcdTA5OTQnLCAnXFx1MDlENyddLFxyXG4gICAgICAgIFsnXFx1MDlDOCcsICdcXHUwOTkwJ10sXHJcbiAgICAgICAgWydcXHUwOUJFJywgJ1xcdTA5ODYnXSxcclxuICAgICAgICBbJ1xcdTA5QzAnLCAnXFx1MDk4OCcsICdcXHUwOUUzJywgJ1xcdTA5RTEnXSxcclxuICAgICAgICBbJ1xcdTA5QzInLCAnXFx1MDk4QSddLFxyXG4gICAgICAgIFsnXFx1MDlGMScsICdcXHUwOUFEJ10sXHJcbiAgICAgICAgWydcXHUwOUI5JywgJ1xcdTA5OTknXSxcclxuICAgICAgICBbJ1xcdTA5OTcnLCAnXFx1MDk5OCddLFxyXG4gICAgICAgIFsnXFx1MDlBNicsICdcXHUwOUE3J10sXHJcbiAgICAgICAgWydcXHUwOTlDJywgJ1xcdTA5OUQnXSxcclxuICAgICAgICBbJ1xcdTA5QTEnLCAnXFx1MDlBMicsICdcXHUwOURDJywgJ1xcdTA5REQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDlDQicsICdcXHUwOTkzJywgJ1xcdTA5RjQnLCAnXFx1MDlGNSddLFxyXG4gICAgICAgIFsnXFx1MDlDNycsICdcXHUwOThGJywgJ1xcdTA5RjYnLCAnXFx1MDlGNyddLFxyXG4gICAgICAgIFsnXFx1MDlDRCcsICdcXHUwOTg1JywgJ1xcdTA5RjgnLCAnXFx1MDlGOSddLFxyXG4gICAgICAgIFsnXFx1MDlCRicsICdcXHUwOTg3JywgJ1xcdTA5RTInLCAnXFx1MDk4QyddLFxyXG4gICAgICAgIFsnXFx1MDlDMScsICdcXHUwOTg5J10sXHJcbiAgICAgICAgWydcXHUwOUFBJywgJ1xcdTA5QUInXSxcclxuICAgICAgICBbJ1xcdTA5RjAnLCAnJywgJ1xcdTA5RjAnLCAnXFx1MDlGMSddLFxyXG4gICAgICAgIFsnXFx1MDk5NScsICdcXHUwOTk2J10sXHJcbiAgICAgICAgWydcXHUwOUE0JywgJ1xcdTA5QTUnXSxcclxuICAgICAgICBbJ1xcdTA5OUEnLCAnXFx1MDk5QiddLFxyXG4gICAgICAgIFsnXFx1MDk5RicsICdcXHUwOUEwJ10sXHJcbiAgICAgICAgWydcXHUwOUJDJywgJ1xcdTA5OUUnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDlDRScsICdcXHUwOTgzJ10sXHJcbiAgICAgICAgWydcXHUwOTgyJywgJ1xcdTA5ODEnLCAnXFx1MDlGQSddLFxyXG4gICAgICAgIFsnXFx1MDlBRScsICdcXHUwOUEzJ10sXHJcbiAgICAgICAgWydcXHUwOUE4JywgJ1xcdTA5RjcnXSxcclxuICAgICAgICBbJ1xcdTA5QUMnLCAnXCInXSxcclxuICAgICAgICBbJ1xcdTA5QjInLCAnXFwnJ10sXHJcbiAgICAgICAgWydcXHUwOUI4JywgJ1xcdTA5QjYnXSxcclxuICAgICAgICBbJywnLCAnXFx1MDlCNyddLFxyXG4gICAgICAgIFsnLicsICc7J10sXHJcbiAgICAgICAgWydcXHUwOUFGJywgJ1xcdTA5REYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydhcyddXHJcbiAgfSxcclxuICAnXFx1MDQxMFxcdTA0MzdcXHUwNGQ5XFx1MDQ0MFxcdTA0MzFcXHUwNDMwXFx1MDQ1OFxcdTA0YjlcXHUwNDMwXFx1MDQzZFxcdTA0YjlcXHUwNDMwJzoge1xyXG4gICAgJ25hbWUnOiAnQXplcmJhaWphbmkgQ3lyaWxsaWMnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTIxMTYnXSxcclxuICAgICAgICBbJzQnLCAnOyddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJzonXSxcclxuICAgICAgICBbJzcnLCAnPyddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA0NTgnLCAnXFx1MDQwOCddLFxyXG4gICAgICAgIFsnXFx1MDRBRicsICdcXHUwNEFFJ10sXHJcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcclxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxQSddLFxyXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXHJcbiAgICAgICAgWydcXHUwNDNEJywgJ1xcdTA0MUQnXSxcclxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxyXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXHJcbiAgICAgICAgWydcXHUwNEJCJywgJ1xcdTA0QkEnXSxcclxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXHJcbiAgICAgICAgWydcXHUwNEI5JywgJ1xcdTA0QjgnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnLyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxyXG4gICAgICAgIFsnXFx1MDQ0QicsICdcXHUwNDJCJ10sXHJcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQzRicsICdcXHUwNDFGJ10sXHJcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcclxuICAgICAgICBbJ1xcdTA0M0UnLCAnXFx1MDQxRSddLFxyXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXHJcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcclxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxyXG4gICAgICAgIFsnXFx1MDQ5RCcsICdcXHUwNDlDJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXSxcclxuICAgICAgICBbJ1xcdTA0RDknLCAnXFx1MDREOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXHJcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcclxuICAgICAgICBbJ1xcdTA0M0MnLCAnXFx1MDQxQyddLFxyXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXHJcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcclxuICAgICAgICBbJ1xcdTA0OTMnLCAnXFx1MDQ5MiddLFxyXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXHJcbiAgICAgICAgWydcXHUwNEU5JywgJ1xcdTA0RTgnXSxcclxuICAgICAgICBbJy4nLCAnLCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnYXotQ1lSTCddXHJcbiAgfSxcclxuICAnQXpcXHUwMjU5cmJheWNhbmNhJzoge1xyXG4gICAgJ25hbWUnOiAnQXplcmJhaWphbmkgTGF0aW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTIxNjYnXSxcclxuICAgICAgICBbJzQnLCAnOyddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJzonXSxcclxuICAgICAgICBbJzcnLCAnPyddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsnXFx1MDBGQycsICdcXHUwMERDJ10sXHJcbiAgICAgICAgWydlJywgJ0UnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdcXHUwMTMwJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBGNicsICdcXHUwMEQ2J10sXHJcbiAgICAgICAgWydcXHUwMTFGJywgJ1xcdTAxMUUnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnLyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAxMzEnLCAnSSddLFxyXG4gICAgICAgIFsnXFx1MDI1OScsICdcXHUwMThGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJ1xcdTAwRTcnLCAnXFx1MDBDNyddLFxyXG4gICAgICAgIFsnXFx1MDE1RicsICdcXHUwMTVFJ10sXHJcbiAgICAgICAgWycuJywgJywnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2F6J11cclxuICB9LFxyXG4gICdcXHUwNDExXFx1MDQzNVxcdTA0M2JcXHUwNDMwXFx1MDQ0MFxcdTA0NDNcXHUwNDQxXFx1MDQzYVxcdTA0MzBcXHUwNDRmJzoge1xyXG4gICAgJ25hbWUnOiAnQmVsYXJ1c2lhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDQ1MScsICdcXHUwNDAxJ10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInXSxcclxuICAgICAgICBbJzMnLCAnXFx1MjExNiddLFxyXG4gICAgICAgIFsnNCcsICc7J10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnOiddLFxyXG4gICAgICAgIFsnNycsICc/J10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXHJcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcclxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxyXG4gICAgICAgIFsnXFx1MDQzYScsICdcXHUwNDFhJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcclxuICAgICAgICBbJ1xcdTA0M2QnLCAnXFx1MDQxZCddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcclxuICAgICAgICBbJ1xcdTA0NWUnLCAnXFx1MDQwZSddLFxyXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXHJcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcclxuICAgICAgICBbJ1xcJycsICdcXCcnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnLyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxyXG4gICAgICAgIFsnXFx1MDQ0YicsICdcXHUwNDJiJ10sXHJcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQzZicsICdcXHUwNDFmJ10sXHJcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcclxuICAgICAgICBbJ1xcdTA0M2UnLCAnXFx1MDQxZSddLFxyXG4gICAgICAgIFsnXFx1MDQzYicsICdcXHUwNDFiJ10sXHJcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcclxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0ZCcsICdcXHUwNDJkJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWycvJywgJ3wnXSxcclxuICAgICAgICBbJ1xcdTA0NGYnLCAnXFx1MDQyZiddLFxyXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXHJcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcclxuICAgICAgICBbJ1xcdTA0M2MnLCAnXFx1MDQxYyddLFxyXG4gICAgICAgIFsnXFx1MDQ1NicsICdcXHUwNDA2J10sXHJcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcclxuICAgICAgICBbJ1xcdTA0NGMnLCAnXFx1MDQyYyddLFxyXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXHJcbiAgICAgICAgWydcXHUwNDRlJywgJ1xcdTA0MmUnXSxcclxuICAgICAgICBbJy4nLCAnLCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnYmUnXVxyXG4gIH0sXHJcbiAgJ0JlbGdpc2NoZSAvIEJlbGdlJzoge1xyXG4gICAgJ25hbWUnOiAnQmVsZ2lhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDBiMicsICdcXHUwMGIzJ10sXHJcbiAgICAgICAgWycmJywgJzEnLCAnfCddLFxyXG4gICAgICAgIFsnXFx1MDBlOScsICcyJywgJ0AnXSxcclxuICAgICAgICBbJ1wiJywgJzMnLCAnIyddLFxyXG4gICAgICAgIFsnXFwnJywgJzQnXSxcclxuICAgICAgICBbJygnLCAnNSddLFxyXG4gICAgICAgIFsnXFx1MDBhNycsICc2JywgJ14nXSxcclxuICAgICAgICBbJ1xcdTAwZTgnLCAnNyddLFxyXG4gICAgICAgIFsnIScsICc4J10sXHJcbiAgICAgICAgWydcXHUwMGU3JywgJzknLCAneyddLFxyXG4gICAgICAgIFsnXFx1MDBlMCcsICcwJywgJ30nXSxcclxuICAgICAgICBbJyknLCAnXFx1MDBiMCddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXicsICdcXHUwMGE4JywgJ1snXSxcclxuICAgICAgICBbJyQnLCAnKicsICddJ10sXHJcbiAgICAgICAgWydcXHUwM2JjJywgJ1xcdTAwYTMnLCAnYCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnXFx1MDBmOScsICclJywgJ1xcdTAwYjQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPicsICdcXFxcJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWycsJywgJz8nXSxcclxuICAgICAgICBbJzsnLCAnLiddLFxyXG4gICAgICAgIFsnOicsICcvJ10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnfiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ25sLUJFJywgJ2ZyLUJFJ11cclxuICB9LFxyXG4gICdcXHUwNDExXFx1MDQ0YVxcdTA0M2JcXHUwNDMzXFx1MDQzMFxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzggXFx1MDQyNFxcdTA0M2VcXHUwNDNkXFx1MDQzNVxcdTA0NDJcXHUwNDM4XFx1MDQ0N1xcdTA0MzVcXHUwNDNkJzoge1xyXG4gICAgJ25hbWUnOiAnQnVsZ2FyaWFuIFBob25ldGljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnXSxcclxuICAgICAgICBbJzQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJ14nXSxcclxuICAgICAgICBbJzcnLCAnJiddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA0NEYnLCAnXFx1MDQyRiddLFxyXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcclxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDRBJywgJ1xcdTA0MkEnXSxcclxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxyXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXHJcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnXSxcclxuICAgICAgICBbJ1xcdTA0M0YnLCAnXFx1MDQxRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXHJcbiAgICAgICAgWydcXHUwNDQ5JywgJ1xcdTA0MjknXSxcclxuICAgICAgICBbJ1xcdTA0NEUnLCAnXFx1MDQyRSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcclxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcclxuICAgICAgICBbJ1xcdTA0MzknLCAnXFx1MDQxOSddLFxyXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXHJcbiAgICAgICAgWydcXHUwNDNCJywgJ1xcdTA0MUInXSxcclxuICAgICAgICBbJzsnLCAnOiddLFxyXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0NEMnLCAnXFx1MDQyQyddLFxyXG4gICAgICAgIFsnXFx1MDQ0NicsICdcXHUwNDI2J10sXHJcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxyXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJ10sXHJcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnXSxcclxuICAgICAgICBbJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2JnJ11cclxuICB9LFxyXG4gICdcXHUwNDExXFx1MDQ0YVxcdTA0M2JcXHUwNDMzXFx1MDQzMFxcdTA0NDBcXHUwNDQxXFx1MDQzYVxcdTA0MzgnOiB7XHJcbiAgICAnbmFtZSc6ICdCdWxnYXJpYW4gQkRTJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICc/J10sXHJcbiAgICAgICAgWyczJywgJysnXSxcclxuICAgICAgICBbJzQnLCAnXCInXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICc9J10sXHJcbiAgICAgICAgWyc3JywgJzonXSxcclxuICAgICAgICBbJzgnLCAnLyddLFxyXG4gICAgICAgIFsnOScsICdfJ10sXHJcbiAgICAgICAgWycwJywgJ1xcdTIxMTYnXSxcclxuICAgICAgICBbJy0nLCAnXFx1MDQwNiddLFxyXG4gICAgICAgIFsnPScsICdWJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWycsJywgJ1xcdTA0NGInXSxcclxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxyXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXHJcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcclxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0OScsICdcXHUwNDI5J10sXHJcbiAgICAgICAgWydcXHUwNDNhJywgJ1xcdTA0MWEnXSxcclxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxyXG4gICAgICAgIFsnOycsICdcXHUwMGE3J10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNDRjJywgJ1xcdTA0MmMnXSxcclxuICAgICAgICBbJ1xcdTA0NGYnLCAnXFx1MDQyZiddLFxyXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXHJcbiAgICAgICAgWydcXHUwNDNlJywgJ1xcdTA0MWUnXSxcclxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcclxuICAgICAgICBbJ1xcdTA0M2QnLCAnXFx1MDQxZCddLFxyXG4gICAgICAgIFsnXFx1MDQxMicsICdcXHUwNDEyJ10sXHJcbiAgICAgICAgWydcXHUwNDNjJywgJ1xcdTA0MWMnXSxcclxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDQyZScsICdcXHUwNDRlJ10sXHJcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcclxuICAgICAgICBbJ1xcdTA0NGEnLCAnXFx1MDQyYSddLFxyXG4gICAgICAgIFsnXFx1MDQ0ZCcsICdcXHUwNDJkJ10sXHJcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcclxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxyXG4gICAgICAgIFsnXFx1MDQzZicsICdcXHUwNDFmJ10sXHJcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcclxuICAgICAgICBbJ1xcdTA0M2InLCAnXFx1MDQxYiddLFxyXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ1xcdTA5YWNcXHUwOWJlXFx1MDk4MlxcdTA5YjJcXHUwOWJlJzoge1xyXG4gICAgJ25hbWUnOiAnQmVuZ2FsaScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnJ10sXHJcbiAgICAgICAgWycxJywgJycsICdcXHUwOUU3J10sXHJcbiAgICAgICAgWycyJywgJycsICdcXHUwOUU4J10sXHJcbiAgICAgICAgWyczJywgJ1xcdTA5Q0RcXHUwOUIwJywgJ1xcdTA5RTknXSxcclxuICAgICAgICBbJzQnLCAnXFx1MDlCMFxcdTA5Q0QnLCAnXFx1MDlFQSddLFxyXG4gICAgICAgIFsnNScsICdcXHUwOTlDXFx1MDlDRFxcdTA5QjAnLCAnXFx1MDlFQiddLFxyXG4gICAgICAgIFsnNicsICdcXHUwOUE0XFx1MDlDRFxcdTA5QjcnLCAnXFx1MDlFQyddLFxyXG4gICAgICAgIFsnNycsICdcXHUwOTk1XFx1MDlDRFxcdTA5QjAnLCAnXFx1MDlFRCddLFxyXG4gICAgICAgIFsnOCcsICdcXHUwOUI2XFx1MDlDRFxcdTA5QjAnLCAnXFx1MDlFRSddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTA5RUYnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUwOUU2J10sXHJcbiAgICAgICAgWyctJywgJ1xcdTA5ODMnXSxcclxuICAgICAgICBbJ1xcdTA5QzMnLCAnXFx1MDk4QicsICdcXHUwOUUyJywgJ1xcdTA5RTAnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA5Q0MnLCAnXFx1MDk5NCcsICdcXHUwOUQ3J10sXHJcbiAgICAgICAgWydcXHUwOUM4JywgJ1xcdTA5OTAnXSxcclxuICAgICAgICBbJ1xcdTA5QkUnLCAnXFx1MDk4NiddLFxyXG4gICAgICAgIFsnXFx1MDlDMCcsICdcXHUwOTg4JywgJ1xcdTA5RTMnLCAnXFx1MDlFMSddLFxyXG4gICAgICAgIFsnXFx1MDlDMicsICdcXHUwOThBJ10sXHJcbiAgICAgICAgWydcXHUwOUFDJywgJ1xcdTA5QUQnXSxcclxuICAgICAgICBbJ1xcdTA5QjknLCAnXFx1MDk5OSddLFxyXG4gICAgICAgIFsnXFx1MDk5NycsICdcXHUwOTk4J10sXHJcbiAgICAgICAgWydcXHUwOUE2JywgJ1xcdTA5QTcnXSxcclxuICAgICAgICBbJ1xcdTA5OUMnLCAnXFx1MDk5RCddLFxyXG4gICAgICAgIFsnXFx1MDlBMScsICdcXHUwOUEyJywgJ1xcdTA5REMnLCAnXFx1MDlERCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwOUNCJywgJ1xcdTA5OTMnLCAnXFx1MDlGNCcsICdcXHUwOUY1J10sXHJcbiAgICAgICAgWydcXHUwOUM3JywgJ1xcdTA5OEYnLCAnXFx1MDlGNicsICdcXHUwOUY3J10sXHJcbiAgICAgICAgWydcXHUwOUNEJywgJ1xcdTA5ODUnLCAnXFx1MDlGOCcsICdcXHUwOUY5J10sXHJcbiAgICAgICAgWydcXHUwOUJGJywgJ1xcdTA5ODcnLCAnXFx1MDlFMicsICdcXHUwOThDJ10sXHJcbiAgICAgICAgWydcXHUwOUMxJywgJ1xcdTA5ODknXSxcclxuICAgICAgICBbJ1xcdTA5QUEnLCAnXFx1MDlBQiddLFxyXG4gICAgICAgIFsnXFx1MDlCMCcsICcnLCAnXFx1MDlGMCcsICdcXHUwOUYxJ10sXHJcbiAgICAgICAgWydcXHUwOTk1JywgJ1xcdTA5OTYnXSxcclxuICAgICAgICBbJ1xcdTA5QTQnLCAnXFx1MDlBNSddLFxyXG4gICAgICAgIFsnXFx1MDk5QScsICdcXHUwOTlCJ10sXHJcbiAgICAgICAgWydcXHUwOTlGJywgJ1xcdTA5QTAnXSxcclxuICAgICAgICBbJ1xcdTA5QkMnLCAnXFx1MDk5RSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWycnXSxcclxuICAgICAgICBbJ1xcdTA5ODInLCAnXFx1MDk4MScsICdcXHUwOUZBJ10sXHJcbiAgICAgICAgWydcXHUwOUFFJywgJ1xcdTA5QTMnXSxcclxuICAgICAgICBbJ1xcdTA5QTgnXSxcclxuICAgICAgICBbJ1xcdTA5QUMnXSxcclxuICAgICAgICBbJ1xcdTA5QjInXSxcclxuICAgICAgICBbJ1xcdTA5QjgnLCAnXFx1MDlCNiddLFxyXG4gICAgICAgIFsnLCcsICdcXHUwOUI3J10sXHJcbiAgICAgICAgWycuJywgJ3snXSxcclxuICAgICAgICBbJ1xcdTA5QUYnLCAnXFx1MDlERiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2JuJ11cclxuICB9LFxyXG4gICdCb3NhbnNraSc6IHtcclxuICAgICduYW1lJzogJ0Jvc25pYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwQjgnLCAnXFx1MDBBOCddLFxyXG4gICAgICAgIFsnMScsICchJywgJ34nXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnXFx1MDJDNyddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ14nXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMkQ4J10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBCMCddLFxyXG4gICAgICAgIFsnNicsICcmJywgJ1xcdTAyREInXSxcclxuICAgICAgICBbJzcnLCAnLycsICdgJ10sXHJcbiAgICAgICAgWyc4JywgJygnLCAnXFx1MDJEOSddLFxyXG4gICAgICAgIFsnOScsICcpJywgJ1xcdTAwQjQnXSxcclxuICAgICAgICBbJzAnLCAnPScsICdcXHUwMkREJ10sXHJcbiAgICAgICAgWydcXCcnLCAnPycsICdcXHUwMEE4J10sXHJcbiAgICAgICAgWycrJywgJyonLCAnXFx1MDBCOCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ1xcXFwnXSxcclxuICAgICAgICBbJ3cnLCAnVycsICd8J10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMTYxJywgJ1xcdTAxNjAnLCAnXFx1MDBGNyddLFxyXG4gICAgICAgIFsnXFx1MDExMScsICdcXHUwMTEwJywgJ1xcdTAwRDcnXSxcclxuICAgICAgICBbJ1xcdTAxN0UnLCAnXFx1MDE3RCcsICdcXHUwMEE0J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJywgJ1snXSxcclxuICAgICAgICBbJ2cnLCAnRycsICddJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJywgJ1xcdTAxNDInXSxcclxuICAgICAgICBbJ2wnLCAnTCcsICdcXHUwMTQxJ10sXHJcbiAgICAgICAgWydcXHUwMTBEJywgJ1xcdTAxMEMnXSxcclxuICAgICAgICBbJ1xcdTAxMDcnLCAnXFx1MDEwNicsICdcXHUwMERGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnVicsICdAJ10sXHJcbiAgICAgICAgWydiJywgJ0InLCAneyddLFxyXG4gICAgICAgIFsnbicsICdOJywgJ30nXSxcclxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMEE3J10sXHJcbiAgICAgICAgWycsJywgJzsnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc6JywgJz4nXSxcclxuICAgICAgICBbJy0nLCAnXycsICdcXHUwMEE5J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnYnMnXVxyXG4gIH0sXHJcbiAgJ0NhbmFkaWVubmUtZnJhblxcdTAwZTdhaXNlJzoge1xyXG4gICAgJ25hbWUnOiAnQ2FuYWRpYW4gRnJlbmNoJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWycjJywgJ3wnLCAnXFxcXCddLFxyXG4gICAgICAgIFsnMScsICchJywgJ1xcdTAwQjEnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcvJywgJ1xcdTAwQTMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMEEyJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBBNCddLFxyXG4gICAgICAgIFsnNicsICc/JywgJ1xcdTAwQUMnXSxcclxuICAgICAgICBbJzcnLCAnJicsICdcXHUwMEE2J10sXHJcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDBCMiddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTAwQjMnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUwMEJDJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBCRCddLFxyXG4gICAgICAgIFsnPScsICcrJywgJ1xcdTAwQkUnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBBNyddLFxyXG4gICAgICAgIFsncCcsICdQJywgJ1xcdTAwQjYnXSxcclxuICAgICAgICBbJ14nLCAnXicsICdbJ10sXHJcbiAgICAgICAgWydcXHUwMEI4JywgJ1xcdTAwQTgnLCAnXSddLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ30nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWyc7JywgJzonLCAnfiddLFxyXG4gICAgICAgIFsnYCcsICdgJywgJ3snXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTAwQUInLCAnXFx1MDBCQicsICdcXHUwMEIwJ10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBCNSddLFxyXG4gICAgICAgIFsnLCcsICdcXCcnLCAnXFx1MDBBRiddLFxyXG4gICAgICAgIFsnLicsICcuJywgJ1xcdTAwQUQnXSxcclxuICAgICAgICBbJ1xcdTAwRTknLCAnXFx1MDBDOScsICdcXHUwMEI0J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZnItQ0EnXVxyXG4gIH0sXHJcbiAgJ1xcdTAxMGNlc2t5Jzoge1xyXG4gICAgJ25hbWUnOiAnQ3plY2gnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJzsnLCAnXFx1MDBiMCcsICdgJywgJ34nXSxcclxuICAgICAgICBbJysnLCAnMScsICchJ10sXHJcbiAgICAgICAgWydcXHUwMTFCJywgJzInLCAnQCddLFxyXG4gICAgICAgIFsnXFx1MDE2MScsICczJywgJyMnXSxcclxuICAgICAgICBbJ1xcdTAxMEQnLCAnNCcsICckJ10sXHJcbiAgICAgICAgWydcXHUwMTU5JywgJzUnLCAnJSddLFxyXG4gICAgICAgIFsnXFx1MDE3RScsICc2JywgJ14nXSxcclxuICAgICAgICBbJ1xcdTAwRkQnLCAnNycsICcmJ10sXHJcbiAgICAgICAgWydcXHUwMEUxJywgJzgnLCAnKiddLFxyXG4gICAgICAgIFsnXFx1MDBFRCcsICc5JywgJygnXSxcclxuICAgICAgICBbJ1xcdTAwRTknLCAnMCcsICcpJ10sXHJcbiAgICAgICAgWyc9JywgJyUnLCAnLScsICdfJ10sXHJcbiAgICAgICAgWydcXHUwMEI0JywgJ1xcdTAyYzcnLCAnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBGQScsICcvJywgJ1snLCAneyddLFxyXG4gICAgICAgIFsnKScsICcoJywgJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDBBOCcsICdcXCcnLCAnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDE2RicsICdcIicsICc7JywgJzonXSxcclxuICAgICAgICBbJ1xcdTAwQTcnLCAnIScsICdcXHUwMGE0JywgJ14nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCcsICcnLCAnXFx1MDJkZCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJz8nLCAnPCcsICdcXHUwMGQ3J10sXHJcbiAgICAgICAgWycuJywgJzonLCAnPicsICdcXHUwMGY3J10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2NzJ11cclxuICB9LFxyXG4gICdEYW5zayc6IHtcclxuICAgICduYW1lJzogJ0RhbmlzaCcsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDBiZCcsICdcXHUwMGE3J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzQnLCAnXFx1MDBhNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAneyddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcclxuICAgICAgICBbJzknLCAnKScsICddJ10sXHJcbiAgICAgICAgWycwJywgJz0nLCAnfSddLFxyXG4gICAgICAgIFsnKycsICc/J10sXHJcbiAgICAgICAgWydcXHUwMGI0JywgJ2AnLCAnfCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwZTUnLCAnXFx1MDBjNSddLFxyXG4gICAgICAgIFsnXFx1MDBhOCcsICdeJywgJ34nXSxcclxuICAgICAgICBbJ1xcJycsICcqJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDBlNicsICdcXHUwMGM2J10sXHJcbiAgICAgICAgWydcXHUwMGY4JywgJ1xcdTAwZDgnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPicsICdcXFxcJ10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDNiYycsICdcXHUwMzljJ10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZGEnXVxyXG4gIH0sXHJcbiAgJ0RldXRzY2gnOiB7XHJcbiAgICAnbmFtZSc6ICdHZXJtYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ14nLCAnXFx1MDBiMCddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ1xcdTAwYjInXSxcclxuICAgICAgICBbJzMnLCAnXFx1MDBhNycsICdcXHUwMGIzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAneyddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcclxuICAgICAgICBbJzknLCAnKScsICddJ10sXHJcbiAgICAgICAgWycwJywgJz0nLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDBkZicsICc/JywgJ1xcXFwnXSxcclxuICAgICAgICBbJ1xcdTAwYjQnLCAnYCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ0AnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBmYycsICdcXHUwMGRjJ10sXHJcbiAgICAgICAgWycrJywgJyonLCAnfiddLFxyXG4gICAgICAgIFsnIycsICdcXCcnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMGY2JywgJ1xcdTAwZDYnXSxcclxuICAgICAgICBbJ1xcdTAwZTQnLCAnXFx1MDBjNCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ1xcdTAwYTYnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMGI1J10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydkZSddXHJcbiAgfSxcclxuICAnRGluZ2JhdHMnOiB7XHJcbiAgICAnbmFtZSc6ICdEaW5nYmF0cycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1Mjc2NCcsICdcXHUyNzY1JywgJ1xcdTI3NjYnLCAnXFx1Mjc2NyddLFxyXG4gICAgICAgIFsnXFx1Mjc4YScsICdcXHUyNzgwJywgJ1xcdTI3NzYnLCAnXFx1Mjc2OCddLFxyXG4gICAgICAgIFsnXFx1Mjc4YicsICdcXHUyNzgxJywgJ1xcdTI3NzcnLCAnXFx1Mjc2OSddLFxyXG4gICAgICAgIFsnXFx1Mjc4YycsICdcXHUyNzgyJywgJ1xcdTI3NzgnLCAnXFx1Mjc2YSddLFxyXG4gICAgICAgIFsnXFx1Mjc4ZCcsICdcXHUyNzgzJywgJ1xcdTI3NzknLCAnXFx1Mjc2YiddLFxyXG4gICAgICAgIFsnXFx1Mjc4ZScsICdcXHUyNzg0JywgJ1xcdTI3N2EnLCAnXFx1Mjc2YyddLFxyXG4gICAgICAgIFsnXFx1Mjc4ZicsICdcXHUyNzg1JywgJ1xcdTI3N2InLCAnXFx1Mjc2ZCddLFxyXG4gICAgICAgIFsnXFx1Mjc5MCcsICdcXHUyNzg2JywgJ1xcdTI3N2MnLCAnXFx1Mjc2ZSddLFxyXG4gICAgICAgIFsnXFx1Mjc5MScsICdcXHUyNzg3JywgJ1xcdTI3N2QnLCAnXFx1Mjc2ZiddLFxyXG4gICAgICAgIFsnXFx1Mjc5MicsICdcXHUyNzg4JywgJ1xcdTI3N2UnLCAnXFx1Mjc3MCddLFxyXG4gICAgICAgIFsnXFx1Mjc5MycsICdcXHUyNzg5JywgJ1xcdTI3N2YnLCAnXFx1Mjc3MSddLFxyXG4gICAgICAgIFsnXFx1Mjc5NScsICdcXHUyNzk2JywgJ1xcdTI3NGMnLCAnXFx1Mjc5NyddLFxyXG4gICAgICAgIFsnXFx1MjcwMicsICdcXHUyNzA0JywgJ1xcdTI3MDEnLCAnXFx1MjcwMyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MjcxNCcsICdcXHUyNzA1JywgJ1xcdTI3MTMnXSxcclxuICAgICAgICBbJ1xcdTI3MTgnLCAnXFx1MjcxNScsICdcXHUyNzE3JywgJ1xcdTI3MTYnXSxcclxuICAgICAgICBbJ1xcdTI3MWEnLCAnXFx1MjcxOScsICdcXHUyNzFiJywgJ1xcdTI3MWMnXSxcclxuICAgICAgICBbJ1xcdTI3MWQnLCAnXFx1MjcxZScsICdcXHUyNzFmJywgJ1xcdTI3MjAnXSxcclxuICAgICAgICBbJ1xcdTI3MjInLCAnXFx1MjcyMycsICdcXHUyNzI0JywgJ1xcdTI3MjUnXSxcclxuICAgICAgICBbJ1xcdTI3MjYnLCAnXFx1MjcyNycsICdcXHUyNzI4JywgJ1xcdTI3NTYnXSxcclxuICAgICAgICBbJ1xcdTI3MjknLCAnXFx1MjcyYScsICdcXHUyNzJkJywgJ1xcdTI3MzAnXSxcclxuICAgICAgICBbJ1xcdTI3MmMnLCAnXFx1MjcyYicsICdcXHUyNzJlJywgJ1xcdTI3MmYnXSxcclxuICAgICAgICBbJ1xcdTI3MzYnLCAnXFx1MjczMScsICdcXHUyNzMyJywgJ1xcdTI3NDknXSxcclxuICAgICAgICBbJ1xcdTI3M2InLCAnXFx1MjczYycsICdcXHUyNzNkJywgJ1xcdTI3M2UnXSxcclxuICAgICAgICBbJ1xcdTI3NDQnLCAnXFx1Mjc0NScsICdcXHUyNzQ2JywgJ1xcdTI3NDMnXSxcclxuICAgICAgICBbJ1xcdTI3MzMnLCAnXFx1MjczNCcsICdcXHUyNzM1JywgJ1xcdTI3MjEnXSxcclxuICAgICAgICBbJ1xcdTI3MzcnLCAnXFx1MjczOCcsICdcXHUyNzM5JywgJ1xcdTI3M2EnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUyNzk5JywgJ1xcdTI3OWEnLCAnXFx1Mjc5OCcsICdcXHUyNzU4J10sXHJcbiAgICAgICAgWydcXHUyN2I1JywgJ1xcdTI3YjYnLCAnXFx1MjdiNCcsICdcXHUyNzU5J10sXHJcbiAgICAgICAgWydcXHUyN2I4JywgJ1xcdTI3YjknLCAnXFx1MjdiNycsICdcXHUyNzVhJ10sXHJcbiAgICAgICAgWydcXHUyNzk0JywgJ1xcdTI3OWMnLCAnXFx1MjdiYScsICdcXHUyN2JiJ10sXHJcbiAgICAgICAgWydcXHUyNzlkJywgJ1xcdTI3OWUnLCAnXFx1MjdhMScsICdcXHUyNzcyJ10sXHJcbiAgICAgICAgWydcXHUyN2E5JywgJ1xcdTI3YWEnLCAnXFx1MjdhYicsICdcXHUyN2FjJ10sXHJcbiAgICAgICAgWydcXHUyN2E0JywgJ1xcdTI3YTMnLCAnXFx1MjdhMicsICdcXHUyNzliJ10sXHJcbiAgICAgICAgWydcXHUyN2IzJywgJ1xcdTI3YmMnLCAnXFx1MjdiZCcsICdcXHUyNzczJ10sXHJcbiAgICAgICAgWydcXHUyN2FkJywgJ1xcdTI3YWUnLCAnXFx1MjdhZicsICdcXHUyN2IxJ10sXHJcbiAgICAgICAgWydcXHUyN2E4JywgJ1xcdTI3YTYnLCAnXFx1MjdhNScsICdcXHUyN2E3J10sXHJcbiAgICAgICAgWydcXHUyNzlmJywgJ1xcdTI3YTAnLCAnXFx1MjdiZScsICdcXHUyN2IyJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUyNzBjJywgJ1xcdTI3MGInLCAnXFx1MjcwYScsICdcXHUyNzBkJ10sXHJcbiAgICAgICAgWydcXHUyNzRmJywgJ1xcdTI3NTAnLCAnXFx1Mjc1MScsICdcXHUyNzUyJ10sXHJcbiAgICAgICAgWydcXHUyNzNmJywgJ1xcdTI3NDAnLCAnXFx1Mjc0MScsICdcXHUyNzQyJ10sXHJcbiAgICAgICAgWydcXHUyNzQ3JywgJ1xcdTI3NDgnLCAnXFx1Mjc0YScsICdcXHUyNzRiJ10sXHJcbiAgICAgICAgWydcXHUyNzU3JywgJ1xcdTI3NTUnLCAnXFx1Mjc2MicsICdcXHUyNzYzJ10sXHJcbiAgICAgICAgWydcXHUyNzUzJywgJ1xcdTI3NTQnLCAnXFx1MjdiMCcsICdcXHUyN2JmJ10sXHJcbiAgICAgICAgWydcXHUyNzBmJywgJ1xcdTI3MTAnLCAnXFx1MjcwZScsICdcXHUyNzc0J10sXHJcbiAgICAgICAgWydcXHUyNzEyJywgJ1xcdTI3MTEnLCAnXFx1Mjc0ZCcsICdcXHUyNzRlJ10sXHJcbiAgICAgICAgWydcXHUyNzA5JywgJ1xcdTI3MDYnLCAnXFx1MjcwOCcsICdcXHUyNzA3J10sXHJcbiAgICAgICAgWydcXHUyNzViJywgJ1xcdTI3NWQnLCAnXFx1Mjc2MScsICdcXHUyNzc1J10sXHJcbiAgICAgICAgWydcXHUyNzVjJywgJ1xcdTI3NWUnLCAnXFx1Mjc1ZicsICdcXHUyNzYwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMa10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdXHJcbiAgfSxcclxuICAnXFx1MDc4YlxcdTA3YThcXHUwNzg4XFx1MDdhY1xcdTA3ODBcXHUwN2E4XFx1MDc4NFxcdTA3YTZcXHUwNzkwXFx1MDdiMCc6IHtcclxuICAgICduYW1lJzogJ0RpdmVoaScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcpJ10sXHJcbiAgICAgICAgWycwJywgJygnXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwN2FiJywgJ1xcdTAwZDcnXSxcclxuICAgICAgICBbJ1xcdTA3YWUnLCAnXFx1MjAxOSddLFxyXG4gICAgICAgIFsnXFx1MDdhNycsICdcXHUyMDFjJ10sXHJcbiAgICAgICAgWydcXHUwN2E5JywgJy8nXSxcclxuICAgICAgICBbJ1xcdTA3YWQnLCAnOiddLFxyXG4gICAgICAgIFsnXFx1MDc4ZScsICdcXHUwN2E0J10sXHJcbiAgICAgICAgWydcXHUwNzgzJywgJ1xcdTA3OWMnXSxcclxuICAgICAgICBbJ1xcdTA3ODknLCAnXFx1MDdhMyddLFxyXG4gICAgICAgIFsnXFx1MDc4YycsICdcXHUwN2EwJ10sXHJcbiAgICAgICAgWydcXHUwNzgwJywgJ1xcdTA3OTknXSxcclxuICAgICAgICBbJ1xcdTA3OGQnLCAnXFx1MDBmNyddLFxyXG4gICAgICAgIFsnWycsICd7J10sXHJcbiAgICAgICAgWyddJywgJ30nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwN2E4JywgJzwnXSxcclxuICAgICAgICBbJ1xcdTA3YWEnLCAnPiddLFxyXG4gICAgICAgIFsnXFx1MDdiMCcsICcuJywgJywnLCAnLCddLFxyXG4gICAgICAgIFsnXFx1MDdhNicsICdcXHUwNjBjJ10sXHJcbiAgICAgICAgWydcXHUwN2FjJywgJ1wiJ10sXHJcbiAgICAgICAgWydcXHUwNzg4JywgJ1xcdTA3YTUnXSxcclxuICAgICAgICBbJ1xcdTA3ODcnLCAnXFx1MDdhMiddLFxyXG4gICAgICAgIFsnXFx1MDc4MicsICdcXHUwNzk4J10sXHJcbiAgICAgICAgWydcXHUwNzg2JywgJ1xcdTA3OWEnXSxcclxuICAgICAgICBbJ1xcdTA3OGEnLCAnXFx1MDdhMSddLFxyXG4gICAgICAgIFsnXFx1ZmRmMicsICdcXHUwNjFiJywgJzsnLCAnOyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J10sXHJcbiAgICAgICAgWydcXHUwNzkyJywgJ1xcdTA3OTYnXSxcclxuICAgICAgICBbJ1xcdTA3OTEnLCAnXFx1MDc5NSddLFxyXG4gICAgICAgIFsnXFx1MDc5MCcsICdcXHUwNzhmJ10sXHJcbiAgICAgICAgWydcXHUwNzk0JywgJ1xcdTA3OTcnLCAnXFx1MjAwRCddLFxyXG4gICAgICAgIFsnXFx1MDc4NScsICdcXHUwNzlmJywgJ1xcdTIwMEMnXSxcclxuICAgICAgICBbJ1xcdTA3OGInLCAnXFx1MDc5YicsICdcXHUyMDBFJ10sXHJcbiAgICAgICAgWydcXHUwNzg0JywgJ1xcdTA3OUQnLCAnXFx1MjAwRiddLFxyXG4gICAgICAgIFsnXFx1MDc4MScsICdcXFxcJ10sXHJcbiAgICAgICAgWydcXHUwNzkzJywgJ1xcdTA3OWUnXSxcclxuICAgICAgICBbJ1xcdTA3YWYnLCAnXFx1MDYxZiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2R2J11cclxuICB9LFxyXG4gICdEdm9yYWsnOiB7XHJcbiAgICAnbmFtZSc6ICdEdm9yYWsnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWydbJywgJ3snXSxcclxuICAgICAgICBbJ10nLCAnfSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXHJcbiAgICAgICAgWycsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ2UnLCAnRSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzsnLCAnOiddLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF1cclxuICB9LFxyXG4gICdcXHUwMzk1XFx1MDNiYlxcdTAzYmJcXHUwM2I3XFx1MDNiZFxcdTAzYjlcXHUwM2JhXFx1MDNhYyc6IHtcclxuICAgICduYW1lJzogJ0dyZWVrJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTAwYjInXSxcclxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGIzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwYTcnXSxcclxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMGI2J10sXHJcbiAgICAgICAgWyc3JywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnKicsICdcXHUwMGE0J10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MDBhNiddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTAwYmEnXSxcclxuICAgICAgICBbJy0nLCAnXycsICdcXHUwMGIxJ10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDBiZCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnOycsICc6J10sXHJcbiAgICAgICAgWydcXHUwM2MyJywgJ14nXSxcclxuICAgICAgICBbJ1xcdTAzYjUnLCAnXFx1MDM5NSddLFxyXG4gICAgICAgIFsnXFx1MDNjMScsICdcXHUwM2ExJ10sXHJcbiAgICAgICAgWydcXHUwM2M0JywgJ1xcdTAzYTQnXSxcclxuICAgICAgICBbJ1xcdTAzYzUnLCAnXFx1MDNhNSddLFxyXG4gICAgICAgIFsnXFx1MDNiOCcsICdcXHUwMzk4J10sXHJcbiAgICAgICAgWydcXHUwM2I5JywgJ1xcdTAzOTknXSxcclxuICAgICAgICBbJ1xcdTAzYmYnLCAnXFx1MDM5ZiddLFxyXG4gICAgICAgIFsnXFx1MDNjMCcsICdcXHUwM2EwJ10sXHJcbiAgICAgICAgWydbJywgJ3snLCAnXFx1MjAxYyddLFxyXG4gICAgICAgIFsnXScsICd9JywgJ1xcdTIwMWQnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCcsICdcXHUwMGFjJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDNiMScsICdcXHUwMzkxJ10sXHJcbiAgICAgICAgWydcXHUwM2MzJywgJ1xcdTAzYTMnXSxcclxuICAgICAgICBbJ1xcdTAzYjQnLCAnXFx1MDM5NCddLFxyXG4gICAgICAgIFsnXFx1MDNjNicsICdcXHUwM2E2J10sXHJcbiAgICAgICAgWydcXHUwM2IzJywgJ1xcdTAzOTMnXSxcclxuICAgICAgICBbJ1xcdTAzYjcnLCAnXFx1MDM5NyddLFxyXG4gICAgICAgIFsnXFx1MDNiZScsICdcXHUwMzllJ10sXHJcbiAgICAgICAgWydcXHUwM2JhJywgJ1xcdTAzOWEnXSxcclxuICAgICAgICBbJ1xcdTAzYmInLCAnXFx1MDM5YiddLFxyXG4gICAgICAgIFsnXFx1MDM4NCcsICdcXHUwMGE4JywgJ1xcdTAzODUnXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+J10sXHJcbiAgICAgICAgWydcXHUwM2I2JywgJ1xcdTAzOTYnXSxcclxuICAgICAgICBbJ1xcdTAzYzcnLCAnXFx1MDNhNyddLFxyXG4gICAgICAgIFsnXFx1MDNjOCcsICdcXHUwM2E4J10sXHJcbiAgICAgICAgWydcXHUwM2M5JywgJ1xcdTAzYTknXSxcclxuICAgICAgICBbJ1xcdTAzYjInLCAnXFx1MDM5MiddLFxyXG4gICAgICAgIFsnXFx1MDNiZCcsICdcXHUwMzlkJ10sXHJcbiAgICAgICAgWydcXHUwM2JjJywgJ1xcdTAzOWMnXSxcclxuICAgICAgICBbJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydlbCddXHJcbiAgfSxcclxuICAnRWVzdGknOiB7XHJcbiAgICAnbmFtZSc6ICdFc3RvbmlhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDJDNycsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnQCcsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBBMycsICdcXHUwMEEzJ10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTAwQTQnLCAnJCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAneycsICd7J10sXHJcbiAgICAgICAgWyc4JywgJygnLCAnWycsICdbJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXScsICddJ10sXHJcbiAgICAgICAgWycwJywgJz0nLCAnfScsICd9J10sXHJcbiAgICAgICAgWycrJywgJz8nLCAnXFxcXCcsICdcXFxcJ10sXHJcbiAgICAgICAgWydcXHUwMEI0JywgJ2AnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMEZDJywgJ1xcdTAwREMnXSxcclxuICAgICAgICBbJ1xcdTAwRjUnLCAnXFx1MDBENScsICdcXHUwMEE3JywgJ1xcdTAwQTcnXSxcclxuICAgICAgICBbJ1xcJycsICcqJywgJ1xcdTAwQkQnLCAnXFx1MDBCRCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAxNjEnLCAnXFx1MDE2MCddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMEY2JywgJ1xcdTAwRDYnXSxcclxuICAgICAgICBbJ1xcdTAwRTQnLCAnXFx1MDBDNCcsICdeJywgJ14nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPicsICd8JywgJ3wnXSxcclxuICAgICAgICBbJ3onLCAnWicsICdcXHUwMTdFJywgJ1xcdTAxN0QnXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnOyddLFxyXG4gICAgICAgIFsnLicsICc6J10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydldCddXHJcbiAgfSxcclxuICAnRXNwYVxcdTAwZjFvbCc6IHtcclxuICAgICduYW1lJzogJ1NwYW5pc2gnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwYmEnLCAnXFx1MDBhYScsICdcXFxcJ10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnfCddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJ1xcJycsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnfiddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJzYnLCAnJicsICdcXHUwMGFjJ10sXHJcbiAgICAgICAgWyc3JywgJy8nXSxcclxuICAgICAgICBbJzgnLCAnKCddLFxyXG4gICAgICAgIFsnOScsICcpJ10sXHJcbiAgICAgICAgWycwJywgJz0nXSxcclxuICAgICAgICBbJ1xcJycsICc/J10sXHJcbiAgICAgICAgWydcXHUwMGExJywgJ1xcdTAwYmYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnYCcsICdeJywgJ1snXSxcclxuICAgICAgICBbJysnLCAnKicsICddJ10sXHJcbiAgICAgICAgWydcXHUwMGU3JywgJ1xcdTAwYzcnLCAnfSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAwZjEnLCAnXFx1MDBkMSddLFxyXG4gICAgICAgIFsnXFx1MDBiNCcsICdcXHUwMGE4JywgJ3snXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZXMnXVxyXG4gIH0sXHJcbiAgJ1xcdTA2MmZcXHUwNjMxXFx1MDZjYyc6IHtcclxuICAgICduYW1lJzogJ0RhcmknLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTIwMEQnLCAnXFx1MDBGNycsICd+J10sXHJcbiAgICAgICAgWydcXHUwNkYxJywgJyEnLCAnYCddLFxyXG4gICAgICAgIFsnXFx1MDZGMicsICdcXHUwNjZDJywgJ0AnXSxcclxuICAgICAgICBbJ1xcdTA2RjMnLCAnXFx1MDY2QicsICcjJ10sXHJcbiAgICAgICAgWydcXHUwNkY0JywgJ1xcdTA2MEInLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MDZGNScsICdcXHUwNjZBJywgJyUnXSxcclxuICAgICAgICBbJ1xcdTA2RjYnLCAnXFx1MDBENycsICdeJ10sXHJcbiAgICAgICAgWydcXHUwNkY3JywgJ1xcdTA2MEMnLCAnJiddLFxyXG4gICAgICAgIFsnXFx1MDZGOCcsICcqJywgJ1xcdTIwMjInXSxcclxuICAgICAgICBbJ1xcdTA2RjknLCAnKScsICdcXHUyMDBFJ10sXHJcbiAgICAgICAgWydcXHUwNkYwJywgJygnLCAnXFx1MjAwRiddLFxyXG4gICAgICAgIFsnLScsICdcXHUwNjQwJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDYzNicsICdcXHUwNjUyJywgJ1xcdTAwQjAnXSxcclxuICAgICAgICBbJ1xcdTA2MzUnLCAnXFx1MDY0QyddLFxyXG4gICAgICAgIFsnXFx1MDYyQicsICdcXHUwNjREJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJ1xcdTA2NDInLCAnXFx1MDY0QicsICdcXHVGRDNFJ10sXHJcbiAgICAgICAgWydcXHUwNjQxJywgJ1xcdTA2NEYnLCAnXFx1RkQzRiddLFxyXG4gICAgICAgIFsnXFx1MDYzQScsICdcXHUwNjUwJywgJ1xcdTA2NTYnXSxcclxuICAgICAgICBbJ1xcdTA2MzknLCAnXFx1MDY0RScsICdcXHUwNjU5J10sXHJcbiAgICAgICAgWydcXHUwNjQ3JywgJ1xcdTA2NTEnLCAnXFx1MDY1NSddLFxyXG4gICAgICAgIFsnXFx1MDYyRScsICddJywgJ1xcJyddLFxyXG4gICAgICAgIFsnXFx1MDYyRCcsICdbJywgJ1wiJ10sXHJcbiAgICAgICAgWydcXHUwNjJDJywgJ30nLCAnXFx1MDY4MSddLFxyXG4gICAgICAgIFsnXFx1MDY4NicsICd7JywgJ1xcdTA2ODUnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCcsICc/J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDYzNCcsICdcXHUwNjI0JywgJ1xcdTA2OUEnXSxcclxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MDYyNicsICdcXHUwNkNEJ10sXHJcbiAgICAgICAgWydcXHUwNkNDJywgJ1xcdTA2NEEnLCAnXFx1MDY0OSddLFxyXG4gICAgICAgIFsnXFx1MDYyOCcsICdcXHUwNjI1JywgJ1xcdTA2RDAnXSxcclxuICAgICAgICBbJ1xcdTA2NDQnLCAnXFx1MDYyMycsICdcXHUwNkI3J10sXHJcbiAgICAgICAgWydcXHUwNjI3JywgJ1xcdTA2MjInLCAnXFx1MDY3MSddLFxyXG4gICAgICAgIFsnXFx1MDYyQScsICdcXHUwNjI5JywgJ1xcdTA2N0MnXSxcclxuICAgICAgICBbJ1xcdTA2NDYnLCAnXFx1MDBCQicsICdcXHUwNkJDJ10sXHJcbiAgICAgICAgWydcXHUwNjQ1JywgJ1xcdTAwQUInLCAnXFx1MDZCQSddLFxyXG4gICAgICAgIFsnXFx1MDZBOScsICc6JywgJzsnXSxcclxuICAgICAgICBbJ1xcdTA2QUYnLCAnXFx1MDYxQicsICdcXHUwNkFCJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNjM4JywgJ1xcdTA2NDMnLCAnXFx1MDZEMiddLFxyXG4gICAgICAgIFsnXFx1MDYzNycsICdcXHUwNjUzJywgJ1xcdTA2OTEnXSxcclxuICAgICAgICBbJ1xcdTA2MzInLCAnXFx1MDY5OCcsICdcXHUwNjk2J10sXHJcbiAgICAgICAgWydcXHUwNjMxJywgJ1xcdTA2NzAnLCAnXFx1MDY5MyddLFxyXG4gICAgICAgIFsnXFx1MDYzMCcsICdcXHUyMDBDJywgJ1xcdTA2ODgnXSxcclxuICAgICAgICBbJ1xcdTA2MkYnLCAnXFx1MDY1NCcsICdcXHUwNjg5J10sXHJcbiAgICAgICAgWydcXHUwNjdFJywgJ1xcdTA2MjEnLCAnXFx1MDY3OSddLFxyXG4gICAgICAgIFsnXFx1MDY0OCcsICc+JywgJywnXSxcclxuICAgICAgICBbJy4nLCAnPCcsICdcXHUwNkM3J10sXHJcbiAgICAgICAgWycvJywgJ1xcdTA2MUYnLCAnXFx1MDZDOSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2ZhLUFGJ11cclxuICB9LFxyXG4gICdcXHUwNjQxXFx1MDYyN1xcdTA2MzFcXHUwNjMzXFx1MDZjYyc6IHtcclxuICAgICduYW1lJzogJ0ZhcnNpJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNjdlJywgJ1xcdTA2NTEgJ10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDBhMScsICdcXHUwMGI5J10sXHJcbiAgICAgICAgWycyJywgJ0AnLCAnXFx1MDBiMiddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTAwYjMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMGE0JywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MDBiYyddLFxyXG4gICAgICAgIFsnNycsICcmJywgJ1xcdTAwYmQnXSxcclxuICAgICAgICBbJzgnLCAnKicsICdcXHUwMGJlJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MjAxOCddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTIwMTknXSxcclxuICAgICAgICBbJy0nLCAnXycsICdcXHUwMGE1J10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDBkNycsICdcXHUwMGY3J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNjM2JywgJ1xcdTA2NGUnXSxcclxuICAgICAgICBbJ1xcdTA2MzUnLCAnXFx1MDY0YiddLFxyXG4gICAgICAgIFsnXFx1MDYyYicsICdcXHUwNjRmJ10sXHJcbiAgICAgICAgWydcXHUwNjQyJywgJ1xcdTA2NGMnXSxcclxuICAgICAgICBbJ1xcdTA2NDEnLCAnXFx1MDY0NCddLFxyXG4gICAgICAgIFsnXFx1MDYzYScsICdcXHUwNjI1J10sXHJcbiAgICAgICAgWydcXHUwNjM5JywgJ1xcdTIwMTgnXSxcclxuICAgICAgICBbJ1xcdTA2NDcnLCAnXFx1MDBmNyddLFxyXG4gICAgICAgIFsnXFx1MDYyZScsICdcXHUwMGQ3J10sXHJcbiAgICAgICAgWydcXHUwNjJkJywgJ1xcdTA2MWInXSxcclxuICAgICAgICBbJ1xcdTA2MmMnLCAnPCddLFxyXG4gICAgICAgIFsnXFx1MDY4NicsICc+J10sXHJcbiAgICAgICAgWydcXHUwNjk4JywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNjM0JywgJ1xcdTA2NTAnXSxcclxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MDY0ZCddLFxyXG4gICAgICAgIFsnXFx1MDY0YScsICddJ10sXHJcbiAgICAgICAgWydcXHUwNjI4JywgJ1snXSxcclxuICAgICAgICBbJ1xcdTA2NDQnLCAnXFx1MDY0NCddLFxyXG4gICAgICAgIFsnXFx1MDYyNycsICdcXHUwNjIzJ10sXHJcbiAgICAgICAgWydcXHUwNjJhJywgJ1xcdTA2NDAnXSxcclxuICAgICAgICBbJ1xcdTA2NDYnLCAnXFx1MDYwYyddLFxyXG4gICAgICAgIFsnXFx1MDY0NScsICdcXFxcJ10sXHJcbiAgICAgICAgWydcXHUwNmFmJywgJzonXSxcclxuICAgICAgICBbJ1xcdTA2NDMnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA2MzgnLCAnfiddLFxyXG4gICAgICAgIFsnXFx1MDYzNycsICdcXHUwNjUyJ10sXHJcbiAgICAgICAgWydcXHUwNjMyJywgJ30nXSxcclxuICAgICAgICBbJ1xcdTA2MzEnLCAneyddLFxyXG4gICAgICAgIFsnXFx1MDYzMCcsICdcXHUwNjQ0J10sXHJcbiAgICAgICAgWydcXHUwNjJmJywgJ1xcdTA2MjInXSxcclxuICAgICAgICBbJ1xcdTA2MjYnLCAnXFx1MDYyMSddLFxyXG4gICAgICAgIFsnXFx1MDY0OCcsICcsJ10sXHJcbiAgICAgICAgWycuJywgJy4nXSxcclxuICAgICAgICBbJy8nLCAnXFx1MDYxZiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydmYSddXHJcbiAgfSxcclxuICAnRlxcdTAwZjhyb3lza3QnOiB7XHJcbiAgICAnbmFtZSc6ICdGYWVyb2VzZScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDBCRCcsICdcXHUwMEE3J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ1xcdTAwQTMnXSxcclxuICAgICAgICBbJzQnLCAnXFx1MDBBNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAneyddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcclxuICAgICAgICBbJzknLCAnKScsICddJ10sXHJcbiAgICAgICAgWycwJywgJz0nLCAnfSddLFxyXG4gICAgICAgIFsnKycsICc/J10sXHJcbiAgICAgICAgWydcXHUwMEI0JywgJ2AnLCAnfCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwRTUnLCAnXFx1MDBDNScsICdcXHUwMEE4J10sXHJcbiAgICAgICAgWydcXHUwMEYwJywgJ1xcdTAwRDAnLCAnfiddLFxyXG4gICAgICAgIFsnXFwnJywgJyonXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMEU2JywgJ1xcdTAwQzYnXSxcclxuICAgICAgICBbJ1xcdTAwRjgnLCAnXFx1MDBEOCcsICdeJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nLCAnXFxcXCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAwQjUnXSxcclxuICAgICAgICBbJywnLCAnOyddLFxyXG4gICAgICAgIFsnLicsICc6J10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydmbyddXHJcbiAgfSxcclxuICAnRnJhblxcdTAwZTdhaXMnOiB7XHJcbiAgICAnbmFtZSc6ICdGcmVuY2gnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwYjInLCAnXFx1MDBiMyddLFxyXG4gICAgICAgIFsnJicsICcxJ10sXHJcbiAgICAgICAgWydcXHUwMGU5JywgJzInLCAnfiddLFxyXG4gICAgICAgIFsnXCInLCAnMycsICcjJ10sXHJcbiAgICAgICAgWydcXCcnLCAnNCcsICd7J10sXHJcbiAgICAgICAgWycoJywgJzUnLCAnWyddLFxyXG4gICAgICAgIFsnLScsICc2JywgJ3wnXSxcclxuICAgICAgICBbJ1xcdTAwZTgnLCAnNycsICdgJ10sXHJcbiAgICAgICAgWydfJywgJzgnLCAnXFxcXCddLFxyXG4gICAgICAgIFsnXFx1MDBlNycsICc5JywgJ14nXSxcclxuICAgICAgICBbJ1xcdTAwZTAnLCAnMCcsICdAJ10sXHJcbiAgICAgICAgWycpJywgJ1xcdTAwYjAnLCAnXSddLFxyXG4gICAgICAgIFsnPScsICcrJywgJ30nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydeJywgJ1xcdTAwYTgnXSxcclxuICAgICAgICBbJyQnLCAnXFx1MDBhMycsICdcXHUwMGE0J10sXHJcbiAgICAgICAgWycqJywgJ1xcdTAzYmMnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJ1xcdTAwZjknLCAnJSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+J10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWycsJywgJz8nXSxcclxuICAgICAgICBbJzsnLCAnLiddLFxyXG4gICAgICAgIFsnOicsICcvJ10sXHJcbiAgICAgICAgWychJywgJ1xcdTAwYTcnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydmciddXHJcbiAgfSxcclxuICAnR2FlaWxnZSc6IHtcclxuICAgICduYW1lJzogJ0lyaXNoIC8gR2FlbGljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ1xcdTAwQUMnLCAnXFx1MDBBNicsICdcXHUwMEE2J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInXSxcclxuICAgICAgICBbJzMnLCAnXFx1MDBBMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTAwRTknLCAnXFx1MDBDOSddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWScsICdcXHUwMEZEJywgJ1xcdTAwREQnXSxcclxuICAgICAgICBbJ3UnLCAnVScsICdcXHUwMEZBJywgJ1xcdTAwREEnXSxcclxuICAgICAgICBbJ2knLCAnSScsICdcXHUwMEVEJywgJ1xcdTAwQ0QnXSxcclxuICAgICAgICBbJ28nLCAnTycsICdcXHUwMEYzJywgJ1xcdTAwRDMnXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnWycsICd7J10sXHJcbiAgICAgICAgWyddJywgJ30nXSxcclxuICAgICAgICBbJyMnLCAnfiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQScsICdcXHUwMEUxJywgJ1xcdTAwQzEnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdAJywgJ1xcdTAwQjQnLCAnYCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydnYScsICdnZCddXHJcbiAgfSxcclxuICAnXFx1MGE5N1xcdTBhYzFcXHUwYTljXFx1MGFiMFxcdTBhYmVcXHUwYWE0XFx1MGFjMCc6IHtcclxuICAgICduYW1lJzogJ0d1amFyYXRpJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWycnXSxcclxuICAgICAgICBbJzEnLCAnXFx1MEE4RCcsICdcXHUwQUU3J10sXHJcbiAgICAgICAgWycyJywgJ1xcdTBBQzUnLCAnXFx1MEFFOCddLFxyXG4gICAgICAgIFsnMycsICdcXHUwQUNEXFx1MEFCMCcsICdcXHUwQUU5J10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTBBQjBcXHUwQUNEJywgJ1xcdTBBRUEnXSxcclxuICAgICAgICBbJzUnLCAnXFx1MEE5Q1xcdTBBQ0RcXHUwQTlFJywgJ1xcdTBBRUInXSxcclxuICAgICAgICBbJzYnLCAnXFx1MEFBNFxcdTBBQ0RcXHUwQUIwJywgJ1xcdTBBRUMnXSxcclxuICAgICAgICBbJzcnLCAnXFx1MEE5NVxcdTBBQ0RcXHUwQUI3JywgJ1xcdTBBRUQnXSxcclxuICAgICAgICBbJzgnLCAnXFx1MEFCNlxcdTBBQ0RcXHUwQUIwJywgJ1xcdTBBRUUnXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwQUVGJ10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MEFFNiddLFxyXG4gICAgICAgIFsnLScsICdcXHUwQTgzJ10sXHJcbiAgICAgICAgWydcXHUwQUMzJywgJ1xcdTBBOEInLCAnXFx1MEFDNCcsICdcXHUwQUUwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwQUNDJywgJ1xcdTBBOTQnXSxcclxuICAgICAgICBbJ1xcdTBBQzgnLCAnXFx1MEE5MCddLFxyXG4gICAgICAgIFsnXFx1MEFCRScsICdcXHUwQTg2J10sXHJcbiAgICAgICAgWydcXHUwQUMwJywgJ1xcdTBBODgnXSxcclxuICAgICAgICBbJ1xcdTBBQzInLCAnXFx1MEE4QSddLFxyXG4gICAgICAgIFsnXFx1MEFBQycsICdcXHUwQUFEJ10sXHJcbiAgICAgICAgWydcXHUwQUI5JywgJ1xcdTBBOTknXSxcclxuICAgICAgICBbJ1xcdTBBOTcnLCAnXFx1MEE5OCddLFxyXG4gICAgICAgIFsnXFx1MEFBNicsICdcXHUwQUE3J10sXHJcbiAgICAgICAgWydcXHUwQTlDJywgJ1xcdTBBOUQnXSxcclxuICAgICAgICBbJ1xcdTBBQTEnLCAnXFx1MEFBMiddLFxyXG4gICAgICAgIFsnXFx1MEFCQycsICdcXHUwQTlFJ10sXHJcbiAgICAgICAgWydcXHUwQUM5JywgJ1xcdTBBOTEnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwQUNCJywgJ1xcdTBBOTMnXSxcclxuICAgICAgICBbJ1xcdTBBQzcnLCAnXFx1MEE4RiddLFxyXG4gICAgICAgIFsnXFx1MEFDRCcsICdcXHUwQTg1J10sXHJcbiAgICAgICAgWydcXHUwQUJGJywgJ1xcdTBBODcnXSxcclxuICAgICAgICBbJ1xcdTBBQzEnLCAnXFx1MEE4OSddLFxyXG4gICAgICAgIFsnXFx1MEFBQScsICdcXHUwQUFCJ10sXHJcbiAgICAgICAgWydcXHUwQUIwJ10sXHJcbiAgICAgICAgWydcXHUwQTk1JywgJ1xcdTBBOTYnXSxcclxuICAgICAgICBbJ1xcdTBBQTQnLCAnXFx1MEFBNSddLFxyXG4gICAgICAgIFsnXFx1MEE5QScsICdcXHUwQTlCJ10sXHJcbiAgICAgICAgWydcXHUwQTlGJywgJ1xcdTBBQTAnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJyddLFxyXG4gICAgICAgIFsnXFx1MEE4MicsICdcXHUwQTgxJywgJycsICdcXHUwQUQwJ10sXHJcbiAgICAgICAgWydcXHUwQUFFJywgJ1xcdTBBQTMnXSxcclxuICAgICAgICBbJ1xcdTBBQTgnXSxcclxuICAgICAgICBbJ1xcdTBBQjUnXSxcclxuICAgICAgICBbJ1xcdTBBQjInLCAnXFx1MEFCMyddLFxyXG4gICAgICAgIFsnXFx1MEFCOCcsICdcXHUwQUI2J10sXHJcbiAgICAgICAgWycsJywgJ1xcdTBBQjcnXSxcclxuICAgICAgICBbJy4nLCAnXFx1MDk2NCcsICdcXHUwOTY1JywgJ1xcdTBBQkQnXSxcclxuICAgICAgICBbJ1xcdTBBQUYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydndSddXHJcbiAgfSxcclxuICAnXFx1MDVlMlxcdTA1ZDFcXHUwNWU4XFx1MDVkOVxcdTA1ZWEnOiB7XHJcbiAgICAnbmFtZSc6ICdIZWJyZXcnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ34nLCAnYCddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTIwYWEnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcpJ10sXHJcbiAgICAgICAgWycwJywgJygnXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWycvJywgJ1EnXSxcclxuICAgICAgICBbJ1xcJycsICdXJ10sXHJcbiAgICAgICAgWydcXHUwNWU3JywgJ0UnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsnXFx1MDVlOCcsICdSJ10sXHJcbiAgICAgICAgWydcXHUwNWQwJywgJ1QnXSxcclxuICAgICAgICBbJ1xcdTA1ZDgnLCAnWSddLFxyXG4gICAgICAgIFsnXFx1MDVkNScsICdVJywgJ1xcdTA1ZjAnXSxcclxuICAgICAgICBbJ1xcdTA1ZGYnLCAnSSddLFxyXG4gICAgICAgIFsnXFx1MDVkZCcsICdPJ10sXHJcbiAgICAgICAgWydcXHUwNWU0JywgJ1AnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNWU5JywgJ0EnXSxcclxuICAgICAgICBbJ1xcdTA1ZDMnLCAnUyddLFxyXG4gICAgICAgIFsnXFx1MDVkMicsICdEJ10sXHJcbiAgICAgICAgWydcXHUwNWRiJywgJ0YnXSxcclxuICAgICAgICBbJ1xcdTA1ZTInLCAnRyddLFxyXG4gICAgICAgIFsnXFx1MDVkOScsICdIJywgJ1xcdTA1ZjInXSxcclxuICAgICAgICBbJ1xcdTA1ZDcnLCAnSicsICdcXHUwNWYxJ10sXHJcbiAgICAgICAgWydcXHUwNWRjJywgJ0snXSxcclxuICAgICAgICBbJ1xcdTA1ZGEnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDVlMycsICc6J10sXHJcbiAgICAgICAgWycsJywgJ1wiJ10sXHJcbiAgICAgICAgWyddJywgJ30nXSxcclxuICAgICAgICBbJ1snLCAneyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNWQ2JywgJ1onXSxcclxuICAgICAgICBbJ1xcdTA1ZTEnLCAnWCddLFxyXG4gICAgICAgIFsnXFx1MDVkMScsICdDJ10sXHJcbiAgICAgICAgWydcXHUwNWQ0JywgJ1YnXSxcclxuICAgICAgICBbJ1xcdTA1ZTAnLCAnQiddLFxyXG4gICAgICAgIFsnXFx1MDVkZScsICdOJ10sXHJcbiAgICAgICAgWydcXHUwNWU2JywgJ00nXSxcclxuICAgICAgICBbJ1xcdTA1ZWEnLCAnPiddLFxyXG4gICAgICAgIFsnXFx1MDVlNScsICc8J10sXHJcbiAgICAgICAgWycuJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydoZSddXHJcbiAgfSxcclxuICAnXFx1MDkyNlxcdTA5NDdcXHUwOTM1XFx1MDkyOFxcdTA5M2VcXHUwOTE3XFx1MDkzMFxcdTA5NDAnOiB7XHJcbiAgICAnbmFtZSc6ICdEZXZhbmFnYXJpJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwOTRBJywgJ1xcdTA5MTInXSxcclxuICAgICAgICBbJzEnLCAnXFx1MDkwRCcsICdcXHUwOTY3J10sXHJcbiAgICAgICAgWycyJywgJ1xcdTA5NDUnLCAnXFx1MDk2OCddLFxyXG4gICAgICAgIFsnMycsICdcXHUwOTREXFx1MDkzMCcsICdcXHUwOTY5J10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTA5MzBcXHUwOTREJywgJ1xcdTA5NkEnXSxcclxuICAgICAgICBbJzUnLCAnXFx1MDkxQ1xcdTA5NERcXHUwOTFFJywgJ1xcdTA5NkInXSxcclxuICAgICAgICBbJzYnLCAnXFx1MDkyNFxcdTA5NERcXHUwOTMwJywgJ1xcdTA5NkMnXSxcclxuICAgICAgICBbJzcnLCAnXFx1MDkxNVxcdTA5NERcXHUwOTM3JywgJ1xcdTA5NkQnXSxcclxuICAgICAgICBbJzgnLCAnXFx1MDkzNlxcdTA5NERcXHUwOTMwJywgJ1xcdTA5NkUnXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwOTZGJ10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MDk2NiddLFxyXG4gICAgICAgIFsnLScsICdcXHUwOTAzJ10sXHJcbiAgICAgICAgWydcXHUwOTQzJywgJ1xcdTA5MEInLCAnXFx1MDk0NCcsICdcXHUwOTYwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwOTRDJywgJ1xcdTA5MTQnXSxcclxuICAgICAgICBbJ1xcdTA5NDgnLCAnXFx1MDkxMCddLFxyXG4gICAgICAgIFsnXFx1MDkzRScsICdcXHUwOTA2J10sXHJcbiAgICAgICAgWydcXHUwOTQwJywgJ1xcdTA5MDgnLCAnXFx1MDk2MycsICdcXHUwOTYxJ10sXHJcbiAgICAgICAgWydcXHUwOTQyJywgJ1xcdTA5MEEnXSxcclxuICAgICAgICBbJ1xcdTA5MkMnLCAnXFx1MDkyRCddLFxyXG4gICAgICAgIFsnXFx1MDkzOScsICdcXHUwOTE5J10sXHJcbiAgICAgICAgWydcXHUwOTE3JywgJ1xcdTA5MTgnLCAnXFx1MDk1QSddLFxyXG4gICAgICAgIFsnXFx1MDkyNicsICdcXHUwOTI3J10sXHJcbiAgICAgICAgWydcXHUwOTFDJywgJ1xcdTA5MUQnLCAnXFx1MDk1QiddLFxyXG4gICAgICAgIFsnXFx1MDkyMScsICdcXHUwOTIyJywgJ1xcdTA5NUMnLCAnXFx1MDk1RCddLFxyXG4gICAgICAgIFsnXFx1MDkzQycsICdcXHUwOTFFJ10sXHJcbiAgICAgICAgWydcXHUwOTQ5JywgJ1xcdTA5MTEnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwOTRCJywgJ1xcdTA5MTMnXSxcclxuICAgICAgICBbJ1xcdTA5NDcnLCAnXFx1MDkwRiddLFxyXG4gICAgICAgIFsnXFx1MDk0RCcsICdcXHUwOTA1J10sXHJcbiAgICAgICAgWydcXHUwOTNGJywgJ1xcdTA5MDcnLCAnXFx1MDk2MicsICdcXHUwOTBDJ10sXHJcbiAgICAgICAgWydcXHUwOTQxJywgJ1xcdTA5MDknXSxcclxuICAgICAgICBbJ1xcdTA5MkEnLCAnXFx1MDkyQicsICcnLCAnXFx1MDk1RSddLFxyXG4gICAgICAgIFsnXFx1MDkzMCcsICdcXHUwOTMxJ10sXHJcbiAgICAgICAgWydcXHUwOTE1JywgJ1xcdTA5MTYnLCAnXFx1MDk1OCcsICdcXHUwOTU5J10sXHJcbiAgICAgICAgWydcXHUwOTI0JywgJ1xcdTA5MjUnXSxcclxuICAgICAgICBbJ1xcdTA5MUEnLCAnXFx1MDkxQicsICdcXHUwOTUyJ10sXHJcbiAgICAgICAgWydcXHUwOTFGJywgJ1xcdTA5MjAnLCAnJywgJ1xcdTA5NTEnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA5NDYnLCAnXFx1MDkwRScsICdcXHUwOTUzJ10sXHJcbiAgICAgICAgWydcXHUwOTAyJywgJ1xcdTA5MDEnLCAnJywgJ1xcdTA5NTAnXSxcclxuICAgICAgICBbJ1xcdTA5MkUnLCAnXFx1MDkyMycsICdcXHUwOTU0J10sXHJcbiAgICAgICAgWydcXHUwOTI4JywgJ1xcdTA5MjknXSxcclxuICAgICAgICBbJ1xcdTA5MzUnLCAnXFx1MDkzNCddLFxyXG4gICAgICAgIFsnXFx1MDkzMicsICdcXHUwOTMzJ10sXHJcbiAgICAgICAgWydcXHUwOTM4JywgJ1xcdTA5MzYnXSxcclxuICAgICAgICBbJywnLCAnXFx1MDkzNycsICdcXHUwOTcwJ10sXHJcbiAgICAgICAgWycuJywgJ1xcdTA5NjQnLCAnXFx1MDk2NScsICdcXHUwOTNEJ10sXHJcbiAgICAgICAgWydcXHUwOTJGJywgJ1xcdTA5NUYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydoaS1ERVZBJ11cclxuICB9LFxyXG4gICdcXHUwOTM5XFx1MDkzZlxcdTA5MDJcXHUwOTI2XFx1MDk0MCc6IHtcclxuICAgICduYW1lJzogJ0hpbmRpJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUyMDBkJywgJ1xcdTIwMGMnLCAnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJ1xcdTA5MEQnLCAnXFx1MDk2NycsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1xcdTA5NDUnLCAnXFx1MDk2OCcsICdAJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTA5NERcXHUwOTMwJywgJ1xcdTA5NjknLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwOTMwXFx1MDk0RCcsICdcXHUwOTZBJywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnXFx1MDkxQ1xcdTA5NERcXHUwOTFFJywgJ1xcdTA5NkInLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdcXHUwOTI0XFx1MDk0RFxcdTA5MzAnLCAnXFx1MDk2QycsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJ1xcdTA5MTVcXHUwOTREXFx1MDkzNycsICdcXHUwOTZEJywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnXFx1MDkzNlxcdTA5NERcXHUwOTMwJywgJ1xcdTA5NkUnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTA5NkYnLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTA5NjYnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdcXHUwOTAzJywgJy0nLCAnXyddLFxyXG4gICAgICAgIFsnXFx1MDk0MycsICdcXHUwOTBCJywgJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDk0QycsICdcXHUwOTE0J10sXHJcbiAgICAgICAgWydcXHUwOTQ4JywgJ1xcdTA5MTAnXSxcclxuICAgICAgICBbJ1xcdTA5M0UnLCAnXFx1MDkwNiddLFxyXG4gICAgICAgIFsnXFx1MDk0MCcsICdcXHUwOTA4J10sXHJcbiAgICAgICAgWydcXHUwOTQyJywgJ1xcdTA5MEEnXSxcclxuICAgICAgICBbJ1xcdTA5MkMnLCAnXFx1MDkyRCddLFxyXG4gICAgICAgIFsnXFx1MDkzOScsICdcXHUwOTE5J10sXHJcbiAgICAgICAgWydcXHUwOTE3JywgJ1xcdTA5MTgnXSxcclxuICAgICAgICBbJ1xcdTA5MjYnLCAnXFx1MDkyNyddLFxyXG4gICAgICAgIFsnXFx1MDkxQycsICdcXHUwOTFEJ10sXHJcbiAgICAgICAgWydcXHUwOTIxJywgJ1xcdTA5MjInLCAnWycsICd7J10sXHJcbiAgICAgICAgWydcXHUwOTNDJywgJ1xcdTA5MUUnLCAnXScsICd9J10sXHJcbiAgICAgICAgWydcXHUwOTQ5JywgJ1xcdTA5MTEnLCAnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDk0QicsICdcXHUwOTEzJ10sXHJcbiAgICAgICAgWydcXHUwOTQ3JywgJ1xcdTA5MEYnXSxcclxuICAgICAgICBbJ1xcdTA5NEQnLCAnXFx1MDkwNSddLFxyXG4gICAgICAgIFsnXFx1MDkzRicsICdcXHUwOTA3J10sXHJcbiAgICAgICAgWydcXHUwOTQxJywgJ1xcdTA5MDknXSxcclxuICAgICAgICBbJ1xcdTA5MkEnLCAnXFx1MDkyQiddLFxyXG4gICAgICAgIFsnXFx1MDkzMCcsICdcXHUwOTMxJ10sXHJcbiAgICAgICAgWydcXHUwOTE1JywgJ1xcdTA5MTYnXSxcclxuICAgICAgICBbJ1xcdTA5MjQnLCAnXFx1MDkyNSddLFxyXG4gICAgICAgIFsnXFx1MDkxQScsICdcXHUwOTFCJywgJzsnLCAnOiddLFxyXG4gICAgICAgIFsnXFx1MDkxRicsICdcXHUwOTIwJywgJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnJ10sXHJcbiAgICAgICAgWydcXHUwOTAyJywgJ1xcdTA5MDEnLCAnJywgJ1xcdTA5NTAnXSxcclxuICAgICAgICBbJ1xcdTA5MkUnLCAnXFx1MDkyMyddLFxyXG4gICAgICAgIFsnXFx1MDkyOCddLFxyXG4gICAgICAgIFsnXFx1MDkzNSddLFxyXG4gICAgICAgIFsnXFx1MDkzMicsICdcXHUwOTMzJ10sXHJcbiAgICAgICAgWydcXHUwOTM4JywgJ1xcdTA5MzYnXSxcclxuICAgICAgICBbJywnLCAnXFx1MDkzNycsICcsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnXFx1MDk2NCcsICcuJywgJz4nXSxcclxuICAgICAgICBbJ1xcdTA5MkYnLCAnXFx1MDk1RicsICcvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydoaSddXHJcbiAgfSxcclxuICAnXFx1MDU0MFxcdTA1NjFcXHUwNTc1XFx1MDU2NVxcdTA1ODBcXHUwNTY1XFx1MDU3NiBcXHUwNTYxXFx1MDU4MFxcdTA1NjVcXHUwNTgyXFx1MDU3NFxcdTA1NzhcXHUwNTgyXFx1MDU3ZlxcdTA1ODQnOiB7XHJcbiAgICAnbmFtZSc6ICdXZXN0ZXJuIEFybWVuaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNTVEJywgJ1xcdTA1NUMnXSxcclxuICAgICAgICBbJzonLCAnMSddLFxyXG4gICAgICAgIFsnXFx1MDU3MScsICdcXHUwNTQxJ10sXHJcbiAgICAgICAgWydcXHUwNTc1JywgJ1xcdTA1NDUnXSxcclxuICAgICAgICBbJ1xcdTA1NUInLCAnMyddLFxyXG4gICAgICAgIFsnLCcsICc0J10sXHJcbiAgICAgICAgWyctJywgJzknXSxcclxuICAgICAgICBbJy4nLCAnXFx1MDU4NyddLFxyXG4gICAgICAgIFsnXFx1MDBBQicsICcoJ10sXHJcbiAgICAgICAgWydcXHUwMEJCJywgJyknXSxcclxuICAgICAgICBbJ1xcdTA1ODUnLCAnXFx1MDU1NSddLFxyXG4gICAgICAgIFsnXFx1MDU3QycsICdcXHUwNTRDJ10sXHJcbiAgICAgICAgWydcXHUwNTZBJywgJ1xcdTA1M0EnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA1NkQnLCAnXFx1MDUzRCddLFxyXG4gICAgICAgIFsnXFx1MDU3RScsICdcXHUwNTRFJ10sXHJcbiAgICAgICAgWydcXHUwNTY3JywgJ1xcdTA1MzcnXSxcclxuICAgICAgICBbJ1xcdTA1ODAnLCAnXFx1MDU1MCddLFxyXG4gICAgICAgIFsnXFx1MDU2NCcsICdcXHUwNTM0J10sXHJcbiAgICAgICAgWydcXHUwNTY1JywgJ1xcdTA1MzUnXSxcclxuICAgICAgICBbJ1xcdTA1NjgnLCAnXFx1MDUzOCddLFxyXG4gICAgICAgIFsnXFx1MDU2QicsICdcXHUwNTNCJ10sXHJcbiAgICAgICAgWydcXHUwNTc4JywgJ1xcdTA1NDgnXSxcclxuICAgICAgICBbJ1xcdTA1NjInLCAnXFx1MDUzMiddLFxyXG4gICAgICAgIFsnXFx1MDU3OScsICdcXHUwNTQ5J10sXHJcbiAgICAgICAgWydcXHUwNTdCJywgJ1xcdTA1NEInXSxcclxuICAgICAgICBbJ1xcJycsICdcXHUwNTVFJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDU2MScsICdcXHUwNTMxJ10sXHJcbiAgICAgICAgWydcXHUwNTdEJywgJ1xcdTA1NEQnXSxcclxuICAgICAgICBbJ1xcdTA1N0YnLCAnXFx1MDU0RiddLFxyXG4gICAgICAgIFsnXFx1MDU4NicsICdcXHUwNTU2J10sXHJcbiAgICAgICAgWydcXHUwNTZGJywgJ1xcdTA1M0YnXSxcclxuICAgICAgICBbJ1xcdTA1NzAnLCAnXFx1MDU0MCddLFxyXG4gICAgICAgIFsnXFx1MDU3MycsICdcXHUwNTQzJ10sXHJcbiAgICAgICAgWydcXHUwNTg0JywgJ1xcdTA1NTQnXSxcclxuICAgICAgICBbJ1xcdTA1NkMnLCAnXFx1MDUzQyddLFxyXG4gICAgICAgIFsnXFx1MDU2OScsICdcXHUwNTM5J10sXHJcbiAgICAgICAgWydcXHUwNTgzJywgJ1xcdTA1NTMnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA1NjYnLCAnXFx1MDUzNiddLFxyXG4gICAgICAgIFsnXFx1MDU4MScsICdcXHUwNTUxJ10sXHJcbiAgICAgICAgWydcXHUwNTYzJywgJ1xcdTA1MzMnXSxcclxuICAgICAgICBbJ1xcdTA1ODInLCAnXFx1MDU1MiddLFxyXG4gICAgICAgIFsnXFx1MDU3QScsICdcXHUwNTRBJ10sXHJcbiAgICAgICAgWydcXHUwNTc2JywgJ1xcdTA1NDYnXSxcclxuICAgICAgICBbJ1xcdTA1NzQnLCAnXFx1MDU0NCddLFxyXG4gICAgICAgIFsnXFx1MDU3NycsICdcXHUwNTQ3J10sXHJcbiAgICAgICAgWydcXHUwNTcyJywgJ1xcdTA1NDInXSxcclxuICAgICAgICBbJ1xcdTA1NkUnLCAnXFx1MDUzRSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnaHktQVJFVk1BVEEnXVxyXG4gIH0sXHJcbiAgJ1xcdTA1NDBcXHUwNTYxXFx1MDU3NVxcdTA1NjVcXHUwNTgwXFx1MDU2NVxcdTA1NzYgXFx1MDU2MVxcdTA1ODBcXHUwNTY1XFx1MDU4MlxcdTA1NjVcXHUwNTZjXFx1MDU4NCc6IHtcclxuICAgICduYW1lJzogJ0Vhc3Rlcm4gQXJtZW5pYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTA1NUQnLCAnXFx1MDU1QyddLFxyXG4gICAgICAgIFsnOicsICcxJ10sXHJcbiAgICAgICAgWydcXHUwNTcxJywgJ1xcdTA1NDEnXSxcclxuICAgICAgICBbJ1xcdTA1NzUnLCAnXFx1MDU0NSddLFxyXG4gICAgICAgIFsnXFx1MDU1QicsICczJ10sXHJcbiAgICAgICAgWycsJywgJzQnXSxcclxuICAgICAgICBbJy0nLCAnOSddLFxyXG4gICAgICAgIFsnLicsICdcXHUwNTg3J10sXHJcbiAgICAgICAgWydcXHUwMEFCJywgJygnXSxcclxuICAgICAgICBbJ1xcdTAwQkInLCAnKSddLFxyXG4gICAgICAgIFsnXFx1MDU4NScsICdcXHUwNTU1J10sXHJcbiAgICAgICAgWydcXHUwNTdDJywgJ1xcdTA1NEMnXSxcclxuICAgICAgICBbJ1xcdTA1NkEnLCAnXFx1MDUzQSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDU2RCcsICdcXHUwNTNEJ10sXHJcbiAgICAgICAgWydcXHUwNTgyJywgJ1xcdTA1NTInXSxcclxuICAgICAgICBbJ1xcdTA1NjcnLCAnXFx1MDUzNyddLFxyXG4gICAgICAgIFsnXFx1MDU4MCcsICdcXHUwNTUwJ10sXHJcbiAgICAgICAgWydcXHUwNTdGJywgJ1xcdTA1NEYnXSxcclxuICAgICAgICBbJ1xcdTA1NjUnLCAnXFx1MDUzNSddLFxyXG4gICAgICAgIFsnXFx1MDU2OCcsICdcXHUwNTM4J10sXHJcbiAgICAgICAgWydcXHUwNTZCJywgJ1xcdTA1M0InXSxcclxuICAgICAgICBbJ1xcdTA1NzgnLCAnXFx1MDU0OCddLFxyXG4gICAgICAgIFsnXFx1MDU3QScsICdcXHUwNTRBJ10sXHJcbiAgICAgICAgWydcXHUwNTc5JywgJ1xcdTA1NDknXSxcclxuICAgICAgICBbJ1xcdTA1N0InLCAnXFx1MDU0QiddLFxyXG4gICAgICAgIFsnXFwnJywgJ1xcdTA1NUUnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNTYxJywgJ1xcdTA1MzEnXSxcclxuICAgICAgICBbJ1xcdTA1N0QnLCAnXFx1MDU0RCddLFxyXG4gICAgICAgIFsnXFx1MDU2NCcsICdcXHUwNTM0J10sXHJcbiAgICAgICAgWydcXHUwNTg2JywgJ1xcdTA1NTYnXSxcclxuICAgICAgICBbJ1xcdTA1ODQnLCAnXFx1MDU1NCddLFxyXG4gICAgICAgIFsnXFx1MDU3MCcsICdcXHUwNTQwJ10sXHJcbiAgICAgICAgWydcXHUwNTczJywgJ1xcdTA1NDMnXSxcclxuICAgICAgICBbJ1xcdTA1NkYnLCAnXFx1MDUzRiddLFxyXG4gICAgICAgIFsnXFx1MDU2QycsICdcXHUwNTNDJ10sXHJcbiAgICAgICAgWydcXHUwNTY5JywgJ1xcdTA1MzknXSxcclxuICAgICAgICBbJ1xcdTA1ODMnLCAnXFx1MDU1MyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDU2NicsICdcXHUwNTM2J10sXHJcbiAgICAgICAgWydcXHUwNTgxJywgJ1xcdTA1NTEnXSxcclxuICAgICAgICBbJ1xcdTA1NjMnLCAnXFx1MDUzMyddLFxyXG4gICAgICAgIFsnXFx1MDU3RScsICdcXHUwNTRFJ10sXHJcbiAgICAgICAgWydcXHUwNTYyJywgJ1xcdTA1MzInXSxcclxuICAgICAgICBbJ1xcdTA1NzYnLCAnXFx1MDU0NiddLFxyXG4gICAgICAgIFsnXFx1MDU3NCcsICdcXHUwNTQ0J10sXHJcbiAgICAgICAgWydcXHUwNTc3JywgJ1xcdTA1NDcnXSxcclxuICAgICAgICBbJ1xcdTA1NzInLCAnXFx1MDU0MiddLFxyXG4gICAgICAgIFsnXFx1MDU2RScsICdcXHUwNTNFJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydoeSddXHJcbiAgfSxcclxuICAnXFx1MDBjZHNsZW5za2EnOiB7XHJcbiAgICAnbmFtZSc6ICdJY2VsYW5kaWMnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwQjAnLCAnXFx1MDBBOCcsICdcXHUwMEIwJ10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInXSxcclxuICAgICAgICBbJzMnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAneyddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcclxuICAgICAgICBbJzknLCAnKScsICddJ10sXHJcbiAgICAgICAgWycwJywgJz0nLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDBGNicsICdcXHUwMEQ2JywgJ1xcXFwnXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ0AnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBGMCcsICdcXHUwMEQwJ10sXHJcbiAgICAgICAgWydcXCcnLCAnPycsICd+J10sXHJcbiAgICAgICAgWycrJywgJyonLCAnYCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAwRTYnLCAnXFx1MDBDNiddLFxyXG4gICAgICAgIFsnXFx1MDBCNCcsICdcXCcnLCAnXiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ3wnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMEI1J10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnXFx1MDBGRScsICdcXHUwMERFJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnaXMnXVxyXG4gIH0sXHJcbiAgJ0l0YWxpYW5vJzoge1xyXG4gICAgJ25hbWUnOiAnSXRhbGlhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFxcXCcsICd8J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInXSxcclxuICAgICAgICBbJzMnLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nXSxcclxuICAgICAgICBbJzgnLCAnKCddLFxyXG4gICAgICAgIFsnOScsICcpJ10sXHJcbiAgICAgICAgWycwJywgJz0nXSxcclxuICAgICAgICBbJ1xcJycsICc/J10sXHJcbiAgICAgICAgWydcXHUwMGVjJywgJ14nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMGU4JywgJ1xcdTAwZTknLCAnWycsICd7J10sXHJcbiAgICAgICAgWycrJywgJyonLCAnXScsICd9J10sXHJcbiAgICAgICAgWydcXHUwMGY5JywgJ1xcdTAwYTcnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMGYyJywgJ1xcdTAwZTcnLCAnQCddLFxyXG4gICAgICAgIFsnXFx1MDBlMCcsICdcXHUwMGIwJywgJyMnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnaXQnXVxyXG4gIH0sXHJcbiAgJ1xcdTY1ZTVcXHU2NzJjXFx1OGE5ZSc6IHtcclxuICAgICduYW1lJzogJ0phcGFuZXNlIEhpcmFnYW5hL0thdGFrYW5hJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHVmZjVlJ10sXHJcbiAgICAgICAgWydcXHUzMDZjJywgJ1xcdTMwY2MnXSxcclxuICAgICAgICBbJ1xcdTMwNzUnLCAnXFx1MzBkNSddLFxyXG4gICAgICAgIFsnXFx1MzA0MicsICdcXHUzMGEyJywgJ1xcdTMwNDEnLCAnXFx1MzBhMSddLFxyXG4gICAgICAgIFsnXFx1MzA0NicsICdcXHUzMGE2JywgJ1xcdTMwNDUnLCAnXFx1MzBhNSddLFxyXG4gICAgICAgIFsnXFx1MzA0OCcsICdcXHUzMGE4JywgJ1xcdTMwNDcnLCAnXFx1MzBhNyddLFxyXG4gICAgICAgIFsnXFx1MzA0YScsICdcXHUzMGFhJywgJ1xcdTMwNDknLCAnXFx1MzBhOSddLFxyXG4gICAgICAgIFsnXFx1MzA4NCcsICdcXHUzMGU0JywgJ1xcdTMwODMnLCAnXFx1MzBlMyddLFxyXG4gICAgICAgIFsnXFx1MzA4NicsICdcXHUzMGU2JywgJ1xcdTMwODUnLCAnXFx1MzBlNSddLFxyXG4gICAgICAgIFsnXFx1MzA4OCcsICdcXHUzMGU4JywgJ1xcdTMwODcnLCAnXFx1MzBlNyddLFxyXG4gICAgICAgIFsnXFx1MzA4ZicsICdcXHUzMGVmJywgJ1xcdTMwOTInLCAnXFx1MzBmMiddLFxyXG4gICAgICAgIFsnXFx1MzA3YicsICdcXHUzMGRiJywgJ1xcdTMwZmMnLCAnXFx1ZmYxZCddLFxyXG4gICAgICAgIFsnXFx1MzA3OCcsICdcXHUzMGQ4JywgJ1xcdWZmM2UnLCAnXFx1ZmY1ZSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MzA1ZicsICdcXHUzMGJmJ10sXHJcbiAgICAgICAgWydcXHUzMDY2JywgJ1xcdTMwYzYnXSxcclxuICAgICAgICBbJ1xcdTMwNDQnLCAnXFx1MzBhNCcsICdcXHUzMDQzJywgJ1xcdTMwYTMnXSxcclxuICAgICAgICBbJ1xcdTMwNTknLCAnXFx1MzBiOSddLFxyXG4gICAgICAgIFsnXFx1MzA0YicsICdcXHUzMGFiJ10sXHJcbiAgICAgICAgWydcXHUzMDkzJywgJ1xcdTMwZjMnXSxcclxuICAgICAgICBbJ1xcdTMwNmEnLCAnXFx1MzBjYSddLFxyXG4gICAgICAgIFsnXFx1MzA2YicsICdcXHUzMGNiJ10sXHJcbiAgICAgICAgWydcXHUzMDg5JywgJ1xcdTMwZTknXSxcclxuICAgICAgICBbJ1xcdTMwNWInLCAnXFx1MzBiYiddLFxyXG4gICAgICAgIFsnXFx1MzAwMScsICdcXHUzMDAxJywgJ1xcdWZmMjAnLCAnXFx1MjAxOCddLFxyXG4gICAgICAgIFsnXFx1MzAwMicsICdcXHUzMDAyJywgJ1xcdTMwMGMnLCAnXFx1ZmY1YiddLFxyXG4gICAgICAgIFsnXFx1ZmZlNScsICcnLCAnJywgJ1xcdWZmMGEnXSxcclxuICAgICAgICBbJ1xcdTMwOUInLCAnXCInLCAnXFx1ZmZlNScsICdcXHVmZjVjJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MzA2MScsICdcXHUzMGMxJ10sXHJcbiAgICAgICAgWydcXHUzMDY4JywgJ1xcdTMwYzgnXSxcclxuICAgICAgICBbJ1xcdTMwNTcnLCAnXFx1MzBiNyddLFxyXG4gICAgICAgIFsnXFx1MzA2ZicsICdcXHUzMGNmJ10sXHJcbiAgICAgICAgWydcXHUzMDRkJywgJ1xcdTMwYWQnXSxcclxuICAgICAgICBbJ1xcdTMwNGYnLCAnXFx1MzBhZiddLFxyXG4gICAgICAgIFsnXFx1MzA3ZScsICdcXHUzMGRlJ10sXHJcbiAgICAgICAgWydcXHUzMDZlJywgJ1xcdTMwY2UnXSxcclxuICAgICAgICBbJ1xcdTMwOGMnLCAnXFx1MzBlYycsICdcXHVmZjFiJywgJ1xcdWZmMGInXSxcclxuICAgICAgICBbJ1xcdTMwNTEnLCAnXFx1MzBiMScsICdcXHVmZjFhJywgJ1xcdTMwZjYnXSxcclxuICAgICAgICBbJ1xcdTMwODAnLCAnXFx1MzBlMCcsICdcXHUzMDBkJywgJ1xcdWZmNWQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTMwNjQnLCAnXFx1MzBjNCddLFxyXG4gICAgICAgIFsnXFx1MzA1NScsICdcXHUzMGI1J10sXHJcbiAgICAgICAgWydcXHUzMDVkJywgJ1xcdTMwYmQnXSxcclxuICAgICAgICBbJ1xcdTMwNzInLCAnXFx1MzBkMiddLFxyXG4gICAgICAgIFsnXFx1MzA1MycsICdcXHUzMGIzJ10sXHJcbiAgICAgICAgWydcXHUzMDdmJywgJ1xcdTMwZGYnXSxcclxuICAgICAgICBbJ1xcdTMwODInLCAnXFx1MzBlMiddLFxyXG4gICAgICAgIFsnXFx1MzA2ZCcsICdcXHUzMGNkJywgJ1xcdTMwMDEnLCAnXFx1ZmYxYyddLFxyXG4gICAgICAgIFsnXFx1MzA4YicsICdcXHUzMGViJywgJ1xcdTMwMDInLCAnXFx1ZmYxZSddLFxyXG4gICAgICAgIFsnXFx1MzA4MScsICdcXHUzMGUxJywgJ1xcdTMwZmInLCAnXFx1ZmYxZiddLFxyXG4gICAgICAgIFsnXFx1MzA4ZCcsICdcXHUzMGVkJywgJycsICdcXHVmZjNmJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMaywgS2V5Ym9hcmRDbGFzc0tleS5BbHRMa10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydqYSddXHJcbiAgfSxcclxuICAnXFx1MTBlNVxcdTEwZDBcXHUxMGUwXFx1MTBkN1xcdTEwZTNcXHUxMGRhXFx1MTBkOCc6IHtcclxuICAgICduYW1lJzogJ0dlb3JnaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUyMDFFJywgJ1xcdTIwMUMnXSxcclxuICAgICAgICBbJyEnLCAnMSddLFxyXG4gICAgICAgIFsnPycsICcyJ10sXHJcbiAgICAgICAgWydcXHUyMTE2JywgJzMnXSxcclxuICAgICAgICBbJ1xcdTAwQTcnLCAnNCddLFxyXG4gICAgICAgIFsnJScsICc1J10sXHJcbiAgICAgICAgWyc6JywgJzYnXSxcclxuICAgICAgICBbJy4nLCAnNyddLFxyXG4gICAgICAgIFsnOycsICc4J10sXHJcbiAgICAgICAgWycsJywgJzknXSxcclxuICAgICAgICBbJy8nLCAnMCddLFxyXG4gICAgICAgIFsnXFx1MjAxMycsICctJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTEwRTYnLCAnXFx1MTBFNiddLFxyXG4gICAgICAgIFsnXFx1MTBFRicsICdcXHUxMEVGJ10sXHJcbiAgICAgICAgWydcXHUxMEUzJywgJ1xcdTEwRTMnXSxcclxuICAgICAgICBbJ1xcdTEwRDknLCAnXFx1MTBEOSddLFxyXG4gICAgICAgIFsnXFx1MTBENCcsICdcXHUxMEQ0JywgJ1xcdTEwRjEnXSxcclxuICAgICAgICBbJ1xcdTEwREMnLCAnXFx1MTBEQyddLFxyXG4gICAgICAgIFsnXFx1MTBEMicsICdcXHUxMEQyJ10sXHJcbiAgICAgICAgWydcXHUxMEU4JywgJ1xcdTEwRTgnXSxcclxuICAgICAgICBbJ1xcdTEwRUMnLCAnXFx1MTBFQyddLFxyXG4gICAgICAgIFsnXFx1MTBENicsICdcXHUxMEQ2J10sXHJcbiAgICAgICAgWydcXHUxMEVFJywgJ1xcdTEwRUUnLCAnXFx1MTBGNCddLFxyXG4gICAgICAgIFsnXFx1MTBFQScsICdcXHUxMEVBJ10sXHJcbiAgICAgICAgWycoJywgJyknXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUxMEU0JywgJ1xcdTEwRTQnLCAnXFx1MTBGNiddLFxyXG4gICAgICAgIFsnXFx1MTBFQicsICdcXHUxMEVCJ10sXHJcbiAgICAgICAgWydcXHUxMEQ1JywgJ1xcdTEwRDUnLCAnXFx1MTBGMyddLFxyXG4gICAgICAgIFsnXFx1MTBENycsICdcXHUxMEQ3J10sXHJcbiAgICAgICAgWydcXHUxMEQwJywgJ1xcdTEwRDAnXSxcclxuICAgICAgICBbJ1xcdTEwREUnLCAnXFx1MTBERSddLFxyXG4gICAgICAgIFsnXFx1MTBFMCcsICdcXHUxMEUwJ10sXHJcbiAgICAgICAgWydcXHUxMEREJywgJ1xcdTEwREQnXSxcclxuICAgICAgICBbJ1xcdTEwREEnLCAnXFx1MTBEQSddLFxyXG4gICAgICAgIFsnXFx1MTBEMycsICdcXHUxMEQzJ10sXHJcbiAgICAgICAgWydcXHUxMERGJywgJ1xcdTEwREYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTEwRUQnLCAnXFx1MTBFRCddLFxyXG4gICAgICAgIFsnXFx1MTBFOScsICdcXHUxMEU5J10sXHJcbiAgICAgICAgWydcXHUxMEU3JywgJ1xcdTEwRTcnXSxcclxuICAgICAgICBbJ1xcdTEwRTEnLCAnXFx1MTBFMSddLFxyXG4gICAgICAgIFsnXFx1MTBEQicsICdcXHUxMERCJ10sXHJcbiAgICAgICAgWydcXHUxMEQ4JywgJ1xcdTEwRDgnLCAnXFx1MTBGMiddLFxyXG4gICAgICAgIFsnXFx1MTBFMicsICdcXHUxMEUyJ10sXHJcbiAgICAgICAgWydcXHUxMEU1JywgJ1xcdTEwRTUnXSxcclxuICAgICAgICBbJ1xcdTEwRDEnLCAnXFx1MTBEMSddLFxyXG4gICAgICAgIFsnXFx1MTBGMCcsICdcXHUxMEYwJywgJ1xcdTEwRjUnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydrYSddXHJcbiAgfSxcclxuICAnXFx1MDQ5YVxcdTA0MzBcXHUwNDM3XFx1MDQzMFxcdTA0OWJcXHUwNDQ4XFx1MDQzMCc6IHtcclxuICAgICduYW1lJzogJ0themFraCcsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnKCcsICcpJ10sXHJcbiAgICAgICAgWydcIicsICchJ10sXHJcbiAgICAgICAgWydcXHUwNGQ5JywgJ1xcdTA0ZDgnXSxcclxuICAgICAgICBbJ1xcdTA0NTYnLCAnXFx1MDQwNiddLFxyXG4gICAgICAgIFsnXFx1MDRhMycsICdcXHUwNGEyJ10sXHJcbiAgICAgICAgWydcXHUwNDkzJywgJ1xcdTA0OTInXSxcclxuICAgICAgICBbJywnLCAnOyddLFxyXG4gICAgICAgIFsnLicsICc6J10sXHJcbiAgICAgICAgWydcXHUwNGFmJywgJ1xcdTA0YWUnXSxcclxuICAgICAgICBbJ1xcdTA0YjEnLCAnXFx1MDRiMCddLFxyXG4gICAgICAgIFsnXFx1MDQ5YicsICdcXHUwNDlhJ10sXHJcbiAgICAgICAgWydcXHUwNGU5JywgJ1xcdTA0ZTgnXSxcclxuICAgICAgICBbJ1xcdTA0YmInLCAnXFx1MDRiYSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDQzOScsICdcXHUwNDE5J10sXHJcbiAgICAgICAgWydcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcclxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxyXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcclxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcclxuICAgICAgICBbJ1xcdTA0NDknLCAnXFx1MDQyOSddLFxyXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXHJcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcclxuICAgICAgICBbJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxyXG4gICAgICAgIFsnXFxcXCcsICcvJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXHJcbiAgICAgICAgWydcXHUwNDRCJywgJ1xcdTA0MkInXSxcclxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxyXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXHJcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcclxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxyXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJ10sXHJcbiAgICAgICAgWydcXHUwNDNCJywgJ1xcdTA0MUInXSxcclxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxyXG4gICAgICAgIFsnXFx1MDQzNicsICdcXHUwNDE2J10sXHJcbiAgICAgICAgWydcXHUwNDREJywgJ1xcdTA0MkQnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxyXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXHJcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcclxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxyXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJ10sXHJcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcclxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxyXG4gICAgICAgIFsnXFx1MDQ0QycsICdcXHUwNDJDJ10sXHJcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcclxuICAgICAgICBbJ1xcdTA0NEUnLCAnXFx1MDQyRSddLFxyXG4gICAgICAgIFsnXFx1MjExNicsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydrayddXHJcbiAgfSxcclxuICAnXFx1MTc5N1xcdTE3YjZcXHUxNzlmXFx1MTdiNlxcdTE3ODFcXHUxN2QyXFx1MTc5OFxcdTE3YzJcXHUxNzlhJzoge1xyXG4gICAgJ25hbWUnOiAnS2htZXInLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwQUInLCAnXFx1MDBCQicsICdcXHUyMDBEJ10sXHJcbiAgICAgICAgWydcXHUxN0UxJywgJyEnLCAnXFx1MjAwQycsICdcXHUxN0YxJ10sXHJcbiAgICAgICAgWydcXHUxN0UyJywgJ1xcdTE3RDcnLCAnQCcsICdcXHUxN0YyJ10sXHJcbiAgICAgICAgWydcXHUxN0UzJywgJ1wiJywgJ1xcdTE3RDEnLCAnXFx1MTdGMyddLFxyXG4gICAgICAgIFsnXFx1MTdFNCcsICdcXHUxN0RCJywgJyQnLCAnXFx1MTdGNCddLFxyXG4gICAgICAgIFsnXFx1MTdFNScsICclJywgJ1xcdTIwQUMnLCAnXFx1MTdGNSddLFxyXG4gICAgICAgIFsnXFx1MTdFNicsICdcXHUxN0NEJywgJ1xcdTE3RDknLCAnXFx1MTdGNiddLFxyXG4gICAgICAgIFsnXFx1MTdFNycsICdcXHUxN0QwJywgJ1xcdTE3REEnLCAnXFx1MTdGNyddLFxyXG4gICAgICAgIFsnXFx1MTdFOCcsICdcXHUxN0NGJywgJyonLCAnXFx1MTdGOCddLFxyXG4gICAgICAgIFsnXFx1MTdFOScsICcoJywgJ3snLCAnXFx1MTdGOSddLFxyXG4gICAgICAgIFsnXFx1MTdFMCcsICcpJywgJ30nLCAnXFx1MTdGMCddLFxyXG4gICAgICAgIFsnXFx1MTdBNScsICdcXHUxN0NDJywgJ3gnXSxcclxuICAgICAgICBbJ1xcdTE3QjInLCAnPScsICdcXHUxN0NFJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUxNzg2JywgJ1xcdTE3ODgnLCAnXFx1MTdEQycsICdcXHUxOUUwJ10sXHJcbiAgICAgICAgWydcXHUxN0I5JywgJ1xcdTE3QkEnLCAnXFx1MTdERCcsICdcXHUxOUUxJ10sXHJcbiAgICAgICAgWydcXHUxN0MxJywgJ1xcdTE3QzInLCAnXFx1MTdBRicsICdcXHUxOUUyJ10sXHJcbiAgICAgICAgWydcXHUxNzlBJywgJ1xcdTE3QUMnLCAnXFx1MTdBQicsICdcXHUxOUUzJ10sXHJcbiAgICAgICAgWydcXHUxNzhGJywgJ1xcdTE3OTEnLCAnXFx1MTdBOCcsICdcXHUxOUU0J10sXHJcbiAgICAgICAgWydcXHUxNzk5JywgJ1xcdTE3QkQnLCAnXFx1MTc5OVxcdTE3QkVcXHUxNzg0JywgJ1xcdTE5RTUnXSxcclxuICAgICAgICBbJ1xcdTE3QkInLCAnXFx1MTdCQycsICcnLCAnXFx1MTlFNiddLFxyXG4gICAgICAgIFsnXFx1MTdCNycsICdcXHUxN0I4JywgJ1xcdTE3QTYnLCAnXFx1MTlFNyddLFxyXG4gICAgICAgIFsnXFx1MTdDNCcsICdcXHUxN0M1JywgJ1xcdTE3QjEnLCAnXFx1MTlFOCddLFxyXG4gICAgICAgIFsnXFx1MTc5NScsICdcXHUxNzk3JywgJ1xcdTE3QjAnLCAnXFx1MTlFOSddLFxyXG4gICAgICAgIFsnXFx1MTdDMCcsICdcXHUxN0JGJywgJ1xcdTE3QTknLCAnXFx1MTlFQSddLFxyXG4gICAgICAgIFsnXFx1MTdBQScsICdcXHUxN0E3JywgJ1xcdTE3QjMnLCAnXFx1MTlFQiddLFxyXG4gICAgICAgIFsnXFx1MTdBRScsICdcXHUxN0FEJywgJ1xcXFwnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUxN0I2JywgJ1xcdTE3QjZcXHUxN0M2JywgJ1xcdTE3QjUnLCAnXFx1MTlFQyddLFxyXG4gICAgICAgIFsnXFx1MTc5RicsICdcXHUxN0MzJywgJycsICdcXHUxOUVEJ10sXHJcbiAgICAgICAgWydcXHUxNzhBJywgJ1xcdTE3OEMnLCAnXFx1MTdEMycsICdcXHUxOUVFJ10sXHJcbiAgICAgICAgWydcXHUxNzkwJywgJ1xcdTE3OTInLCAnJywgJ1xcdTE5RUYnXSxcclxuICAgICAgICBbJ1xcdTE3ODQnLCAnXFx1MTdBMicsICdcXHUxN0E0JywgJ1xcdTE5RjAnXSxcclxuICAgICAgICBbJ1xcdTE3QTAnLCAnXFx1MTdDNycsICdcXHUxN0EzJywgJ1xcdTE5RjEnXSxcclxuICAgICAgICBbJ1xcdTE3RDInLCAnXFx1MTc4OScsICdcXHUxN0I0JywgJ1xcdTE5RjInXSxcclxuICAgICAgICBbJ1xcdTE3ODAnLCAnXFx1MTc4MicsICdcXHUxNzlEJywgJ1xcdTE5RjMnXSxcclxuICAgICAgICBbJ1xcdTE3OUInLCAnXFx1MTdBMScsICdcXHUxN0Q4JywgJ1xcdTE5RjQnXSxcclxuICAgICAgICBbJ1xcdTE3QkUnLCAnXFx1MTdDNFxcdTE3QzcnLCAnXFx1MTdENicsICdcXHUxOUY1J10sXHJcbiAgICAgICAgWydcXHUxN0NCJywgJ1xcdTE3QzknLCAnXFx1MTdDOCcsICdcXHUxOUY2J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUxNzhCJywgJ1xcdTE3OEQnLCAnfCcsICdcXHUxOUY3J10sXHJcbiAgICAgICAgWydcXHUxNzgxJywgJ1xcdTE3ODMnLCAnXFx1MTc4MVxcdTE3RDJcXHUxNzg5XFx1MTdCQlxcdTE3QzYnLCAnXFx1MTlGOCddLFxyXG4gICAgICAgIFsnXFx1MTc4NScsICdcXHUxNzg3JywgJy0nLCAnXFx1MTlGOSddLFxyXG4gICAgICAgIFsnXFx1MTc5QycsICdcXHUxN0MxXFx1MTdDNycsICcrJywgJ1xcdTE5RkEnXSxcclxuICAgICAgICBbJ1xcdTE3OTQnLCAnXFx1MTc5NicsICdcXHUxNzlFJywgJ1xcdTE5RkInXSxcclxuICAgICAgICBbJ1xcdTE3OTMnLCAnXFx1MTc4RScsICdbJywgJ1xcdTE5RkMnXSxcclxuICAgICAgICBbJ1xcdTE3OTgnLCAnXFx1MTdDNicsICddJywgJ1xcdTE5RkQnXSxcclxuICAgICAgICBbJ1xcdTE3QkJcXHUxN0M2JywgJ1xcdTE3QkJcXHUxN0M3JywgJywnLCAnXFx1MTlGRSddLFxyXG4gICAgICAgIFsnXFx1MTdENCcsICdcXHUxN0Q1JywgJy4nLCAnXFx1MTlGRiddLFxyXG4gICAgICAgIFsnXFx1MTdDQScsICc/JywgJy8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MjAwQicsICcgJywgJ1xcdTAwQTAnLCAnICddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2ttJ11cclxuICB9LFxyXG4gICdcXHUwYzk1XFx1MGNhOFxcdTBjY2RcXHUwY2E4XFx1MGNhMSc6IHtcclxuICAgICduYW1lJzogJ0thbm5hZGEnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTBDQ0EnLCAnXFx1MEM5MiddLFxyXG4gICAgICAgIFsnMScsICcnLCAnXFx1MENFNyddLFxyXG4gICAgICAgIFsnMicsICcnLCAnXFx1MENFOCddLFxyXG4gICAgICAgIFsnMycsICdcXHUwQ0NEXFx1MENCMCcsICdcXHUwQ0U5J10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTBDQjBcXHUwQ0NEJywgJ1xcdTBDRUEnXSxcclxuICAgICAgICBbJzUnLCAnXFx1MEM5Q1xcdTBDQ0RcXHUwQzlFJywgJ1xcdTBDRUInXSxcclxuICAgICAgICBbJzYnLCAnXFx1MENBNFxcdTBDQ0RcXHUwQ0IwJywgJ1xcdTBDRUMnXSxcclxuICAgICAgICBbJzcnLCAnXFx1MEM5NVxcdTBDQ0RcXHUwQ0I3JywgJ1xcdTBDRUQnXSxcclxuICAgICAgICBbJzgnLCAnXFx1MENCNlxcdTBDQ0RcXHUwQ0IwJywgJ1xcdTBDRUUnXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwQ0VGJ10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MENFNiddLFxyXG4gICAgICAgIFsnLScsICdcXHUwQzgzJ10sXHJcbiAgICAgICAgWydcXHUwQ0MzJywgJ1xcdTBDOEInLCAnXFx1MENDNCcsICdcXHUwQ0UwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwQ0NDJywgJ1xcdTBDOTQnXSxcclxuICAgICAgICBbJ1xcdTBDQzgnLCAnXFx1MEM5MCcsICdcXHUwQ0Q2J10sXHJcbiAgICAgICAgWydcXHUwQ0JFJywgJ1xcdTBDODYnXSxcclxuICAgICAgICBbJ1xcdTBDQzAnLCAnXFx1MEM4OCcsICcnLCAnXFx1MENFMSddLFxyXG4gICAgICAgIFsnXFx1MENDMicsICdcXHUwQzhBJ10sXHJcbiAgICAgICAgWydcXHUwQ0FDJywgJ1xcdTBDQUQnXSxcclxuICAgICAgICBbJ1xcdTBDQjknLCAnXFx1MEM5OSddLFxyXG4gICAgICAgIFsnXFx1MEM5NycsICdcXHUwQzk4J10sXHJcbiAgICAgICAgWydcXHUwQ0E2JywgJ1xcdTBDQTcnXSxcclxuICAgICAgICBbJ1xcdTBDOUMnLCAnXFx1MEM5RCddLFxyXG4gICAgICAgIFsnXFx1MENBMScsICdcXHUwQ0EyJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTBDQ0InLCAnXFx1MEM5MyddLFxyXG4gICAgICAgIFsnXFx1MENDNycsICdcXHUwQzhGJywgJ1xcdTBDRDUnXSxcclxuICAgICAgICBbJ1xcdTBDQ0QnLCAnXFx1MEM4NSddLFxyXG4gICAgICAgIFsnXFx1MENCRicsICdcXHUwQzg3JywgJycsICdcXHUwQzhDJ10sXHJcbiAgICAgICAgWydcXHUwQ0MxJywgJ1xcdTBDODknXSxcclxuICAgICAgICBbJ1xcdTBDQUEnLCAnXFx1MENBQicsICcnLCAnXFx1MENERSddLFxyXG4gICAgICAgIFsnXFx1MENCMCcsICdcXHUwQ0IxJ10sXHJcbiAgICAgICAgWydcXHUwQzk1JywgJ1xcdTBDOTYnXSxcclxuICAgICAgICBbJ1xcdTBDQTQnLCAnXFx1MENBNSddLFxyXG4gICAgICAgIFsnXFx1MEM5QScsICdcXHUwQzlCJ10sXHJcbiAgICAgICAgWydcXHUwQzlGJywgJ1xcdTBDQTAnXSxcclxuICAgICAgICBbJycsICdcXHUwQzlFJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTBDQzYnLCAnXFx1MEM4RiddLFxyXG4gICAgICAgIFsnXFx1MEM4MiddLFxyXG4gICAgICAgIFsnXFx1MENBRScsICdcXHUwQ0EzJ10sXHJcbiAgICAgICAgWydcXHUwQ0E4J10sXHJcbiAgICAgICAgWydcXHUwQ0I1J10sXHJcbiAgICAgICAgWydcXHUwQ0IyJywgJ1xcdTBDQjMnXSxcclxuICAgICAgICBbJ1xcdTBDQjgnLCAnXFx1MENCNiddLFxyXG4gICAgICAgIFsnLCcsICdcXHUwQ0I3J10sXHJcbiAgICAgICAgWycuJywgJ3wnXSxcclxuICAgICAgICBbJ1xcdTBDQUYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydrbiddXHJcbiAgfSxcclxuICAnXFx1ZDU1Y1xcdWFkNmRcXHVjNWI0Jzoge1xyXG4gICAgJ25hbWUnOiAnS29yZWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nLCAnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ0AnLCAnMicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnMycsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnNCcsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJ14nLCAnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnLCAnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonLCAnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnOScsICcpJ10sXHJcbiAgICAgICAgWycwJywgJygnLCAnMCcsICcoJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnPScsICcrJ10sXHJcbiAgICAgICAgWydcXHUyMEE5JywgJ3wnLCAnXFx1MjBBOScsICd8J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUxMTA3JywgJ1xcdTExMDgnLCAncScsICdRJ10sXHJcbiAgICAgICAgWydcXHUxMTBDJywgJ1xcdTExMEQnLCAndycsICdXJ10sXHJcbiAgICAgICAgWydcXHUxMTAzJywgJ1xcdTExMDQnLCAnZScsICdFJ10sXHJcbiAgICAgICAgWydcXHUxMTAwJywgJ1xcdTExMDEnLCAncicsICdSJ10sXHJcbiAgICAgICAgWydcXHUxMTA5JywgJ1xcdTExMEEnLCAndCcsICdUJ10sXHJcbiAgICAgICAgWydcXHUxMTZEJywgJycsICd5JywgJ1knXSxcclxuICAgICAgICBbJ1xcdTExNjcnLCAnJywgJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnXFx1MTE2MycsICcnLCAnaScsICdJJ10sXHJcbiAgICAgICAgWydcXHUxMTYyJywgJ1xcdTExNjQnLCAnbycsICdPJ10sXHJcbiAgICAgICAgWydcXHUxMTY2JywgJ1xcdTExNjgnLCAncCcsICdQJ10sXHJcbiAgICAgICAgWydbJywgJ3snLCAnWycsICd7J10sXHJcbiAgICAgICAgWyddJywgJ30nLCAnXScsICd9J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MTEwNicsICcnLCAnYScsICdBJ10sXHJcbiAgICAgICAgWydcXHUxMTAyJywgJycsICdzJywgJ1MnXSxcclxuICAgICAgICBbJ1xcdTExMEInLCAnJywgJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnXFx1MTEwNScsICcnLCAnZicsICdGJ10sXHJcbiAgICAgICAgWydcXHUxMTEyJywgJycsICdnJywgJ0cnXSxcclxuICAgICAgICBbJ1xcdTExNjknLCAnJywgJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnXFx1MTE2NScsICcnLCAnaicsICdKJ10sXHJcbiAgICAgICAgWydcXHUxMTYxJywgJycsICdrJywgJ0snXSxcclxuICAgICAgICBbJ1xcdTExNzUnLCAnJywgJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnOycsICc6JywgJzsnLCAnOiddLFxyXG4gICAgICAgIFsnXFwnJywgJ1wiJywgJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MTEwRicsICcnLCAneicsICdaJ10sXHJcbiAgICAgICAgWydcXHUxMTEwJywgJycsICd4JywgJ1gnXSxcclxuICAgICAgICBbJ1xcdTExMEUnLCAnJywgJ2MnLCAnQyddLFxyXG4gICAgICAgIFsnXFx1MTExMScsICcnLCAndicsICdWJ10sXHJcbiAgICAgICAgWydcXHUxMTcyJywgJycsICdiJywgJ0InXSxcclxuICAgICAgICBbJ1xcdTExNkUnLCAnJywgJ24nLCAnTiddLFxyXG4gICAgICAgIFsnXFx1MTE3MycsICcnLCAnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzwnLCAnLCcsICc8J10sXHJcbiAgICAgICAgWycuJywgJz4nLCAnLicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nLCAnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgWydLb3InLCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydrbyddXHJcbiAgfSxcclxuICAnS3VyZFxcdTAwZWUnOiB7XHJcbiAgICAnbmFtZSc6ICdLdXJkaXNoJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUyMGFjJywgJ34nXSxcclxuICAgICAgICBbJ1xcdTA2NjEnLCAnISddLFxyXG4gICAgICAgIFsnXFx1MDY2MicsICdAJ10sXHJcbiAgICAgICAgWydcXHUwNjYzJywgJyMnXSxcclxuICAgICAgICBbJ1xcdTA2NjQnLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MDY2NScsICclJ10sXHJcbiAgICAgICAgWydcXHUwNjY2JywgJ14nXSxcclxuICAgICAgICBbJ1xcdTA2NjcnLCAnJiddLFxyXG4gICAgICAgIFsnXFx1MDY2OCcsICcqJ10sXHJcbiAgICAgICAgWydcXHUwNjY5JywgJygnXSxcclxuICAgICAgICBbJ1xcdTA2NjAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA2NDInLCAnYCddLFxyXG4gICAgICAgIFsnXFx1MDY0OCcsICdcXHUwNjQ4XFx1MDY0OCddLFxyXG4gICAgICAgIFsnXFx1MDZkNScsICdcXHUwNjRhJ10sXHJcbiAgICAgICAgWydcXHUwNjMxJywgJ1xcdTA2OTUnXSxcclxuICAgICAgICBbJ1xcdTA2MmEnLCAnXFx1MDYzNyddLFxyXG4gICAgICAgIFsnXFx1MDZjYycsICdcXHUwNmNlJ10sXHJcbiAgICAgICAgWydcXHUwNjI2JywgJ1xcdTA2MjEnXSxcclxuICAgICAgICBbJ1xcdTA2MmQnLCAnXFx1MDYzOSddLFxyXG4gICAgICAgIFsnXFx1MDZjNicsICdcXHUwNjI0J10sXHJcbiAgICAgICAgWydcXHUwNjdlJywgJ1xcdTA2MmInXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNjI3JywgJ1xcdTA2MjInXSxcclxuICAgICAgICBbJ1xcdTA2MzMnLCAnXFx1MDYzNCddLFxyXG4gICAgICAgIFsnXFx1MDYyZicsICdcXHUwNjMwJ10sXHJcbiAgICAgICAgWydcXHUwNjQxJywgJ1xcdTA2MjUnXSxcclxuICAgICAgICBbJ1xcdTA2YWYnLCAnXFx1MDYzYSddLFxyXG4gICAgICAgIFsnXFx1MDY0NycsICdcXHUyMDBjJ10sXHJcbiAgICAgICAgWydcXHUwNjk4JywgJ1xcdTA2MjMnXSxcclxuICAgICAgICBbJ1xcdTA2YTknLCAnXFx1MDY0MyddLFxyXG4gICAgICAgIFsnXFx1MDY0NCcsICdcXHUwNmI1J10sXHJcbiAgICAgICAgWydcXHUwNjFiJywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDYzMicsICdcXHUwNjM2J10sXHJcbiAgICAgICAgWydcXHUwNjJlJywgJ1xcdTA2MzUnXSxcclxuICAgICAgICBbJ1xcdTA2MmMnLCAnXFx1MDY4NiddLFxyXG4gICAgICAgIFsnXFx1MDZhNCcsICdcXHUwNjM4J10sXHJcbiAgICAgICAgWydcXHUwNjI4JywgJ1xcdTA2NDknXSxcclxuICAgICAgICBbJ1xcdTA2NDYnLCAnXFx1MDYyOSddLFxyXG4gICAgICAgIFsnXFx1MDY0NScsICdcXHUwNjQwJ10sXHJcbiAgICAgICAgWydcXHUwNjBjJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICdcXHUwNjFmJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydrdSddXHJcbiAgfSxcclxuICAnXFx1MDQxYVxcdTA0NGJcXHUwNDQwXFx1MDQzM1xcdTA0NGJcXHUwNDM3XFx1MDQ0N1xcdTA0MzAnOiB7XHJcbiAgICAnbmFtZSc6ICdLeXJneXonLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTA0NTEnLCAnXFx1MDQwMSddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTIxMTYnXSxcclxuICAgICAgICBbJzQnLCAnOyddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJzonXSxcclxuICAgICAgICBbJzcnLCAnPyddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA0MzknLCAnXFx1MDQxOSddLFxyXG4gICAgICAgIFsnXFx1MDQ0NicsICdcXHUwNDI2J10sXHJcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnLCAnXFx1MDRBRicsICdcXHUwNEFFJ10sXHJcbiAgICAgICAgWydcXHUwNDNBJywgJ1xcdTA0MUEnXSxcclxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxyXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJywgJ1xcdTA0QTMnLCAnXFx1MDRBMiddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcclxuICAgICAgICBbJ1xcdTA0NDknLCAnXFx1MDQyOSddLFxyXG4gICAgICAgIFsnXFx1MDQzNycsICdcXHUwNDE3J10sXHJcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcclxuICAgICAgICBbJ1xcdTA0NEEnLCAnXFx1MDQyQSddLFxyXG4gICAgICAgIFsnXFxcXCcsICcvJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXHJcbiAgICAgICAgWydcXHUwNDRCJywgJ1xcdTA0MkInXSxcclxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxyXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXHJcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcclxuICAgICAgICBbJ1xcdTA0NDAnLCAnXFx1MDQyMCddLFxyXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJywgJ1xcdTA0RTknLCAnXFx1MDRFOCddLFxyXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXHJcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcclxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0RCcsICdcXHUwNDJEJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNDRGJywgJ1xcdTA0MkYnXSxcclxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnXSxcclxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDRDJywgJ1xcdTA0MkMnXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxyXG4gICAgICAgIFsnXFx1MDQ0RScsICdcXHUwNDJFJ10sXHJcbiAgICAgICAgWycuJywgJywnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydreSddXHJcbiAgfSxcclxuICAnTGF0dmllXFx1MDE2MXUnOiB7XHJcbiAgICAnbmFtZSc6ICdMYXR2aWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMEFEJywgJz8nXSxcclxuICAgICAgICBbJzEnLCAnIScsICdcXHUwMEFCJ10sXHJcbiAgICAgICAgWycyJywgJ1xcdTAwQUInLCAnJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnXFx1MDBCQicsICcnLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTIwQUMnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1wiJywgJ34nXSxcclxuICAgICAgICBbJzYnLCAnLycsICdcXHUyMDE5JywgJ14nXSxcclxuICAgICAgICBbJzcnLCAnJicsICcnLCAnXFx1MDBCMSddLFxyXG4gICAgICAgIFsnOCcsICdcXHUwMEQ3JywgJzonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MjAxMycsICdcXHUyMDE0J10sXHJcbiAgICAgICAgWydmJywgJ0YnLCAnPScsICc7J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwMTZCJywgJ1xcdTAxNkEnLCAncScsICdRJ10sXHJcbiAgICAgICAgWydnJywgJ0cnLCAnXFx1MDEyMycsICdcXHUwMTIyJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ3InLCAnUicsICdcXHUwMTU3JywgJ1xcdTAxNTYnXSxcclxuICAgICAgICBbJ20nLCAnTScsICd3JywgJ1cnXSxcclxuICAgICAgICBbJ3YnLCAnVicsICd5JywgJ1knXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWydcXHUwMTEzJywgJ1xcdTAxMTInXSxcclxuICAgICAgICBbJ1xcdTAxMEQnLCAnXFx1MDEwQyddLFxyXG4gICAgICAgIFsnXFx1MDE3RScsICdcXHUwMTdEJywgJ1snLCAneyddLFxyXG4gICAgICAgIFsnaCcsICdIJywgJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDEzNycsICdcXHUwMTM2J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDE2MScsICdcXHUwMTYwJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ1xcdTAwQjQnLCAnXFx1MDBCMCcsICdcXHUwMEI0JywgJ1xcdTAwQTgnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTAxNDYnLCAnXFx1MDE0NSddLFxyXG4gICAgICAgIFsnYicsICdCJywgJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnXFx1MDEyQicsICdcXHUwMTJBJ10sXHJcbiAgICAgICAgWydrJywgJ0snLCAnXFx1MDEzNycsICdcXHUwMTM2J10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ28nLCAnTycsICdcXHUwMEY1JywgJ1xcdTAwRDUnXSxcclxuICAgICAgICBbJ1xcdTAxMDEnLCAnXFx1MDEwMCddLFxyXG4gICAgICAgIFsnLCcsICc7JywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnOicsICc+J10sXHJcbiAgICAgICAgWydcXHUwMTNDJywgJ1xcdTAxM0InXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydsdiddXHJcbiAgfSxcclxuICAnTGlldHV2aVxcdTAxNzMnOiB7XHJcbiAgICAnbmFtZSc6ICdMaXRodWFuaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nXSxcclxuICAgICAgICBbJ1xcdTAxMDUnLCAnXFx1MDEwNCddLFxyXG4gICAgICAgIFsnXFx1MDEwRCcsICdcXHUwMTBDJ10sXHJcbiAgICAgICAgWydcXHUwMTE5JywgJ1xcdTAxMTgnXSxcclxuICAgICAgICBbJ1xcdTAxMTcnLCAnXFx1MDExNiddLFxyXG4gICAgICAgIFsnXFx1MDEyRicsICdcXHUwMTJFJ10sXHJcbiAgICAgICAgWydcXHUwMTYxJywgJ1xcdTAxNjAnXSxcclxuICAgICAgICBbJ1xcdTAxNzMnLCAnXFx1MDE3MiddLFxyXG4gICAgICAgIFsnXFx1MDE2QicsICdcXHUwMTZBJ10sXHJcbiAgICAgICAgWydcXHUyMDFFJywgJygnXSxcclxuICAgICAgICBbJ1xcdTIwMUMnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWydcXHUwMTdFJywgJ1xcdTAxN0QnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnWycsICd7J10sXHJcbiAgICAgICAgWyddJywgJ30nXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJzsnLCAnOiddLFxyXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUyMDEzJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc8J10sXHJcbiAgICAgICAgWycuJywgJz4nXSxcclxuICAgICAgICBbJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnbHQnXVxyXG4gIH0sXHJcbiAgJ01hZ3lhcic6IHtcclxuICAgICduYW1lJzogJ0h1bmdhcmlhbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnMCcsICdcXHUwMGE3J10sXHJcbiAgICAgICAgWycxJywgJ1xcJycsICd+J10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ1xcdTAyYzcnXSxcclxuICAgICAgICBbJzMnLCAnKycsICdcXHUwMmM2J10sXHJcbiAgICAgICAgWyc0JywgJyEnLCAnXFx1MDJkOCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwYjAnXSxcclxuICAgICAgICBbJzYnLCAnLycsICdcXHUwMmRiJ10sXHJcbiAgICAgICAgWyc3JywgJz0nLCAnYCddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1xcdTAyZDknXSxcclxuICAgICAgICBbJzknLCAnKScsICdcXHUwMGI0J10sXHJcbiAgICAgICAgWydcXHUwMGY2JywgJ1xcdTAwZDYnLCAnXFx1MDJkZCddLFxyXG4gICAgICAgIFsnXFx1MDBmYycsICdcXHUwMGRjJywgJ1xcdTAwYTgnXSxcclxuICAgICAgICBbJ1xcdTAwZjMnLCAnXFx1MDBkMycsICdcXHUwMGI4J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnLCAnXFxcXCddLFxyXG4gICAgICAgIFsndycsICdXJywgJ3wnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUwMGM0J10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsnaScsICdJJywgJ1xcdTAwY2QnXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMTUxJywgJ1xcdTAxNTAnLCAnXFx1MDBmNyddLFxyXG4gICAgICAgIFsnXFx1MDBmYScsICdcXHUwMGRhJywgJ1xcdTAwZDcnXSxcclxuICAgICAgICBbJ1xcdTAxNzEnLCAnXFx1MDE3MCcsICdcXHUwMGE0J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJywgJ1xcdTAwZTQnXSxcclxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMTExJ10sXHJcbiAgICAgICAgWydkJywgJ0QnLCAnXFx1MDExMCddLFxyXG4gICAgICAgIFsnZicsICdGJywgJ1snXSxcclxuICAgICAgICBbJ2cnLCAnRycsICddJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSicsICdcXHUwMGVkJ10sXHJcbiAgICAgICAgWydrJywgJ0snLCAnXFx1MDE0MSddLFxyXG4gICAgICAgIFsnbCcsICdMJywgJ1xcdTAxNDInXSxcclxuICAgICAgICBbJ1xcdTAwZTknLCAnXFx1MDBjOScsICckJ10sXHJcbiAgICAgICAgWydcXHUwMGUxJywgJ1xcdTAwYzEnLCAnXFx1MDBkZiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDBlZCcsICdcXHUwMGNkJywgJzwnXSxcclxuICAgICAgICBbJ3knLCAnWScsICc+J10sXHJcbiAgICAgICAgWyd4JywgJ1gnLCAnIyddLFxyXG4gICAgICAgIFsnYycsICdDJywgJyYnXSxcclxuICAgICAgICBbJ3YnLCAnVicsICdAJ10sXHJcbiAgICAgICAgWydiJywgJ0InLCAneyddLFxyXG4gICAgICAgIFsnbicsICdOJywgJ30nXSxcclxuICAgICAgICBbJ20nLCAnTScsICc8J10sXHJcbiAgICAgICAgWycsJywgJz8nLCAnOyddLFxyXG4gICAgICAgIFsnLicsICc6JywgJz4nXSxcclxuICAgICAgICBbJy0nLCAnXycsICcqJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnaHUnXVxyXG4gIH0sXHJcbiAgJ01hbHRpJzoge1xyXG4gICAgJ25hbWUnOiAnTWFsdGVzZSA0OCcsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDEwQicsICdcXHUwMTBBJywgJ2AnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIiddLFxyXG4gICAgICAgIFsnMycsICdcXHUyMGFjJywgJ1xcdTAwQTMnXSxcclxuICAgICAgICBbJzQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJ14nXSxcclxuICAgICAgICBbJzcnLCAnJiddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MDBFOCcsICdcXHUwMEM4J10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnLCAnXFx1MDBGOScsICdcXHUwMEQ5J10sXHJcbiAgICAgICAgWydpJywgJ0knLCAnXFx1MDBFQycsICdcXHUwMGNjJ10sXHJcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBGMicsICdcXHUwMEQyJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAxMjEnLCAnXFx1MDEyMCcsICdbJywgJ3snXSxcclxuICAgICAgICBbJ1xcdTAxMjcnLCAnXFx1MDEyNicsICddJywgJ30nXSxcclxuICAgICAgICBbJyMnLCAnXFx1MDE3ZSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQScsICdcXHUwMEUwJywgJ1xcdTAwQzAnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdAJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwMTdjJywgJ1xcdTAxN2InLCAnXFxcXCcsICd8J10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nLCAnJywgJ2AnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydtdCddXHJcbiAgfSxcclxuICAnXFx1MDQxY1xcdTA0MzBcXHUwNDNhXFx1MDQzNVxcdTA0MzRcXHUwNDNlXFx1MDQzZFxcdTA0NDFcXHUwNDNhXFx1MDQzOCc6IHtcclxuICAgICduYW1lJzogJ01hY2Vkb25pYW4gQ3lyaWxsaWMnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1xcdTIwMUUnXSxcclxuICAgICAgICBbJzMnLCAnXFx1MjAxQyddLFxyXG4gICAgICAgIFsnNCcsICdcXHUyMDE5J10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnXFx1MjAxOCddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MDQ1OScsICdcXHUwNDA5J10sXHJcbiAgICAgICAgWydcXHUwNDVBJywgJ1xcdTA0MEEnXSxcclxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcclxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxyXG4gICAgICAgIFsnXFx1MDQ1NScsICdcXHUwNDA1J10sXHJcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcclxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxyXG4gICAgICAgIFsnXFx1MDQzRScsICdcXHUwNDFFJ10sXHJcbiAgICAgICAgWydcXHUwNDNGJywgJ1xcdTA0MUYnXSxcclxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCcsICdcXHUwNDAyJ10sXHJcbiAgICAgICAgWydcXHUwNDUzJywgJ1xcdTA0MDMnLCAnXFx1MDQ1MiddLFxyXG4gICAgICAgIFsnXFx1MDQzNicsICdcXHUwNDE2J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXHJcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcclxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxyXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0JywgJ1snXSxcclxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMycsICddJ10sXHJcbiAgICAgICAgWydcXHUwNDQ1JywgJ1xcdTA0MjUnXSxcclxuICAgICAgICBbJ1xcdTA0NTgnLCAnXFx1MDQwOCddLFxyXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXHJcbiAgICAgICAgWydcXHUwNDNCJywgJ1xcdTA0MUInXSxcclxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNycsICdcXHUwNDBCJ10sXHJcbiAgICAgICAgWydcXHUwNDVDJywgJ1xcdTA0MEMnLCAnXFx1MDQ1QiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDQ1MScsICdcXHUwNDAxJ10sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0NUYnLCAnXFx1MDQwRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0NicsICdcXHUwNDI2J10sXHJcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInLCAnQCddLFxyXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJywgJ3snXSxcclxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCcsICd9J10sXHJcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnLCAnXFx1MDBBNyddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ21rJ11cclxuICB9LFxyXG4gICdcXHUwZDJlXFx1MGQzMlxcdTBkMmZcXHUwZDNlXFx1MGQzM1xcdTBkMDInOiB7XHJcbiAgICAnbmFtZSc6ICdNYWxheWFsYW0nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTBENEEnLCAnXFx1MEQxMiddLFxyXG4gICAgICAgIFsnMScsICcnLCAnXFx1MEQ2NyddLFxyXG4gICAgICAgIFsnMicsICcnLCAnXFx1MEQ2OCddLFxyXG4gICAgICAgIFsnMycsICdcXHUwRDREXFx1MEQzMCcsICdcXHUwRDY5J10sXHJcbiAgICAgICAgWyc0JywgJycsICdcXHUwRDZBJ10sXHJcbiAgICAgICAgWyc1JywgJycsICdcXHUwRDZCJ10sXHJcbiAgICAgICAgWyc2JywgJycsICdcXHUwRDZDJ10sXHJcbiAgICAgICAgWyc3JywgJ1xcdTBEMTVcXHUwRDREXFx1MEQzNycsICdcXHUwRDZEJ10sXHJcbiAgICAgICAgWyc4JywgJycsICdcXHUwRDZFJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MEQ2RiddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTBENjYnXSxcclxuICAgICAgICBbJy0nLCAnXFx1MEQwMyddLFxyXG4gICAgICAgIFsnXFx1MEQ0MycsICdcXHUwRDBCJywgJycsICdcXHUwRDYwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwRDRDJywgJ1xcdTBEMTQnLCAnXFx1MEQ1NyddLFxyXG4gICAgICAgIFsnXFx1MEQ0OCcsICdcXHUwRDEwJ10sXHJcbiAgICAgICAgWydcXHUwRDNFJywgJ1xcdTBEMDYnXSxcclxuICAgICAgICBbJ1xcdTBENDAnLCAnXFx1MEQwOCcsICcnLCAnXFx1MEQ2MSddLFxyXG4gICAgICAgIFsnXFx1MEQ0MicsICdcXHUwRDBBJ10sXHJcbiAgICAgICAgWydcXHUwRDJDJywgJ1xcdTBEMkQnXSxcclxuICAgICAgICBbJ1xcdTBEMzknLCAnXFx1MEQxOSddLFxyXG4gICAgICAgIFsnXFx1MEQxNycsICdcXHUwRDE4J10sXHJcbiAgICAgICAgWydcXHUwRDI2JywgJ1xcdTBEMjcnXSxcclxuICAgICAgICBbJ1xcdTBEMUMnLCAnXFx1MEQxRCddLFxyXG4gICAgICAgIFsnXFx1MEQyMScsICdcXHUwRDIyJ10sXHJcbiAgICAgICAgWycnLCAnXFx1MEQxRSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTBENEInLCAnXFx1MEQxMyddLFxyXG4gICAgICAgIFsnXFx1MEQ0NycsICdcXHUwRDBGJ10sXHJcbiAgICAgICAgWydcXHUwRDREJywgJ1xcdTBEMDUnLCAnJywgJ1xcdTBEMEMnXSxcclxuICAgICAgICBbJ1xcdTBEM0YnLCAnXFx1MEQwNyddLFxyXG4gICAgICAgIFsnXFx1MEQ0MScsICdcXHUwRDA5J10sXHJcbiAgICAgICAgWydcXHUwRDJBJywgJ1xcdTBEMkInXSxcclxuICAgICAgICBbJ1xcdTBEMzAnLCAnXFx1MEQzMSddLFxyXG4gICAgICAgIFsnXFx1MEQxNScsICdcXHUwRDE2J10sXHJcbiAgICAgICAgWydcXHUwRDI0JywgJ1xcdTBEMjUnXSxcclxuICAgICAgICBbJ1xcdTBEMUEnLCAnXFx1MEQxQiddLFxyXG4gICAgICAgIFsnXFx1MEQxRicsICdcXHUwRDIwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwRDQ2JywgJ1xcdTBEMEYnXSxcclxuICAgICAgICBbJ1xcdTBEMDInXSxcclxuICAgICAgICBbJ1xcdTBEMkUnLCAnXFx1MEQyMyddLFxyXG4gICAgICAgIFsnXFx1MEQyOCddLFxyXG4gICAgICAgIFsnXFx1MEQzNScsICdcXHUwRDM0J10sXHJcbiAgICAgICAgWydcXHUwRDMyJywgJ1xcdTBEMzMnXSxcclxuICAgICAgICBbJ1xcdTBEMzgnLCAnXFx1MEQzNiddLFxyXG4gICAgICAgIFsnLCcsICdcXHUwRDM3J10sXHJcbiAgICAgICAgWycuJ10sXHJcbiAgICAgICAgWydcXHUwRDJGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnbWwnXVxyXG4gIH0sXHJcbiAgJ01pc2MuIFN5bWJvbHMnOiB7XHJcbiAgICAnbmFtZSc6ICdNaXNjLiBTeW1ib2xzJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUyNjA1JywgJ1xcdTI2MDYnLCAnXFx1MjYwZScsICdcXHUyNjBmJ10sXHJcbiAgICAgICAgWydcXHUyNjQ4JywgJ1xcdTI2NzMnLCAnXFx1MjY1OScsICdcXHUyNjMwJ10sXHJcbiAgICAgICAgWydcXHUyNjQ5JywgJ1xcdTI2NzQnLCAnXFx1MjY1OCcsICdcXHUyNjMxJ10sXHJcbiAgICAgICAgWydcXHUyNjRhJywgJ1xcdTI2NzUnLCAnXFx1MjY1NycsICdcXHUyNjMyJ10sXHJcbiAgICAgICAgWydcXHUyNjRiJywgJ1xcdTI2NzYnLCAnXFx1MjY1NicsICdcXHUyNjMzJ10sXHJcbiAgICAgICAgWydcXHUyNjRjJywgJ1xcdTI2NzcnLCAnXFx1MjY1NScsICdcXHUyNjM0J10sXHJcbiAgICAgICAgWydcXHUyNjRkJywgJ1xcdTI2NzgnLCAnXFx1MjY1NCcsICdcXHUyNjM1J10sXHJcbiAgICAgICAgWydcXHUyNjRlJywgJ1xcdTI2NzknLCAnXFx1MjY1ZicsICdcXHUyNjM2J10sXHJcbiAgICAgICAgWydcXHUyNjRmJywgJ1xcdTI2N2EnLCAnXFx1MjY1ZScsICdcXHUyNjM3J10sXHJcbiAgICAgICAgWydcXHUyNjUwJywgJ1xcdTI2N2InLCAnXFx1MjY1ZCcsICdcXHUyNjg2J10sXHJcbiAgICAgICAgWydcXHUyNjUxJywgJ1xcdTI2N2MnLCAnXFx1MjY1YycsICdcXHUyNjg3J10sXHJcbiAgICAgICAgWydcXHUyNjUyJywgJ1xcdTI2N2QnLCAnXFx1MjY1YicsICdcXHUyNjg4J10sXHJcbiAgICAgICAgWydcXHUyNjUzJywgJ1xcdTI2NzInLCAnXFx1MjY1YScsICdcXHUyNjg5J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MjYzZicsICdcXHUyNjgwJywgJ1xcdTI2OGEnLCAnXFx1MjZhMiddLFxyXG4gICAgICAgIFsnXFx1MjY0MCcsICdcXHUyNjgxJywgJ1xcdTI2OGInLCAnXFx1MjZhMyddLFxyXG4gICAgICAgIFsnXFx1MjY0MScsICdcXHUyNjgyJywgJ1xcdTI2OGMnLCAnXFx1MjZhNCddLFxyXG4gICAgICAgIFsnXFx1MjY0MicsICdcXHUyNjgzJywgJ1xcdTI2OGQnLCAnXFx1MjZhNSddLFxyXG4gICAgICAgIFsnXFx1MjY0MycsICdcXHUyNjg0JywgJ1xcdTI2OGUnLCAnXFx1MjZhNiddLFxyXG4gICAgICAgIFsnXFx1MjY0NCcsICdcXHUyNjg1JywgJ1xcdTI2OGYnLCAnXFx1MjZhNyddLFxyXG4gICAgICAgIFsnXFx1MjY0NScsICdcXHUyNjIwJywgJ1xcdTI2ZmYnLCAnXFx1MjZhOCddLFxyXG4gICAgICAgIFsnXFx1MjY0NicsICdcXHUyNjIyJywgJ1xcdTI2OTInLCAnXFx1MjZhOSddLFxyXG4gICAgICAgIFsnXFx1MjY0NycsICdcXHUyNjIzJywgJ1xcdTI2OTMnLCAnXFx1MjZiMiddLFxyXG4gICAgICAgIFsnXFx1MjY2OScsICdcXHUyNjZkJywgJ1xcdTI2OTQnLCAnXFx1MjZhYyddLFxyXG4gICAgICAgIFsnXFx1MjY2YScsICdcXHUyNjZlJywgJ1xcdTI2OTUnLCAnXFx1MjZhZCddLFxyXG4gICAgICAgIFsnXFx1MjY2YicsICdcXHUyNjZmJywgJ1xcdTI2OTYnLCAnXFx1MjZhZSddLFxyXG4gICAgICAgIFsnXFx1MjY2YycsICdcXHUyNjA3JywgJ1xcdTI2OTcnLCAnXFx1MjZhZiddLFxyXG4gICAgICAgIFsnXFx1MjZmOScsICdcXHUyNjA4JywgJ1xcdTI2OTgnLCAnXFx1MjZiMCddLFxyXG4gICAgICAgIFsnXFx1MjY3ZicsICdcXHUyNjJlJywgJ1xcdTI2MzgnLCAnXFx1MjYwOSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MjYxZScsICdcXHUyNjFjJywgJ1xcdTI2MWQnLCAnXFx1MjYxZiddLFxyXG4gICAgICAgIFsnXFx1MjYxYicsICdcXHUyNjFhJywgJ1xcdTI2MTgnLCAnXFx1MjYxOSddLFxyXG4gICAgICAgIFsnXFx1MjYwMicsICdcXHUyNjE0JywgJ1xcdTI2ZjEnLCAnXFx1MjZkOSddLFxyXG4gICAgICAgIFsnXFx1MjYxNScsICdcXHUyNjY4JywgJ1xcdTI2ZmUnLCAnXFx1MjZkOCddLFxyXG4gICAgICAgIFsnXFx1MjYzYScsICdcXHUyNjM5JywgJ1xcdTI2M2InLCAnXFx1MjZkYyddLFxyXG4gICAgICAgIFsnXFx1MjYxNycsICdcXHUyNjE2JywgJ1xcdTI2Y2EnLCAnXFx1MjZjOSddLFxyXG4gICAgICAgIFsnXFx1MjY2MCcsICdcXHUyNjYzJywgJ1xcdTI2NjUnLCAnXFx1MjY2NiddLFxyXG4gICAgICAgIFsnXFx1MjY2NCcsICdcXHUyNjY3JywgJ1xcdTI2NjEnLCAnXFx1MjY2MiddLFxyXG4gICAgICAgIFsnXFx1MjZjMicsICdcXHUyNmMwJywgJ1xcdTI2YzMnLCAnXFx1MjZjMSddLFxyXG4gICAgICAgIFsnXFx1MjYyNCcsICdcXHUyNjI1JywgJ1xcdTI2OWEnLCAnXFx1MjZiMSddLFxyXG4gICAgICAgIFsnXFx1MjYxMCcsICdcXHUyNjExJywgJ1xcdTI2MTInLCAnXFx1MjYxMyddLFxyXG4gICAgICAgIFsnXFx1MjYyOCcsICdcXHUyNjI2JywgJ1xcdTI2MjcnLCAnXFx1MjYyOSddLFxyXG4gICAgICAgIFsnXFx1MjYyYScsICdcXHUyNjJiJywgJ1xcdTI2MmMnLCAnXFx1MjYyZCddLFxyXG4gICAgICAgIFsnXFx1MjZmYScsICdcXHUyNmZiJywgJ1xcdTI2ZmMnLCAnXFx1MjZmZCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTI2MmYnLCAnXFx1MjY3MCcsICdcXHUyNjcxJywgJ1xcdTI2N2UnXSxcclxuICAgICAgICBbJ1xcdTI2M2MnLCAnXFx1MjY5OScsICdcXHUyNjNkJywgJ1xcdTI2M2UnXSxcclxuICAgICAgICBbJ1xcdTI2YzQnLCAnXFx1MjYwMycsICdcXHUyNmM3JywgJ1xcdTI2YzYnXSxcclxuICAgICAgICBbJ1xcdTI2YTAnLCAnXFx1MjZhMScsICdcXHUyNjIxJywgJ1xcdTI2ZDQnXSxcclxuICAgICAgICBbJ1xcdTI2ZTQnLCAnXFx1MjZlNScsICdcXHUyNmU2JywgJ1xcdTI2ZTcnXSxcclxuICAgICAgICBbJ1xcdTI2MGEnLCAnXFx1MjYwYicsICdcXHUyNjBjJywgJ1xcdTI2MGQnXSxcclxuICAgICAgICBbJ1xcdTI2OWMnLCAnXFx1MjY5YicsICdcXHUyNjlkJywgJ1xcdTI2MDQnXSxcclxuICAgICAgICBbJ1xcdTI2YjMnLCAnXFx1MjZiNCcsICdcXHUyNmI1JywgJ1xcdTI2YjYnXSxcclxuICAgICAgICBbJ1xcdTI2YjcnLCAnXFx1MjZiZicsICdcXHUyNmI4JywgJ1xcdTI2ZjgnXSxcclxuICAgICAgICBbJ1xcdTI2YjknLCAnXFx1MjZiYScsICdcXHUyNmJiJywgJ1xcdTI2YmMnXSxcclxuICAgICAgICBbJ1xcdTI2YmQnLCAnXFx1MjZiZScsICdcXHUyNjlmJywgJ1xcdTI2OWUnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTI2MDAnLCAnXFx1MjYwMScsICdcXHUyNmM1JywgJ1xcdTI2YzgnXSxcclxuICAgICAgICBbJ1xcdTI2OTEnLCAnXFx1MjY5MCcsICdcXHUyNmFiJywgJ1xcdTI2YWEnXSxcclxuICAgICAgICBbJ1xcdTI2Y2InLCAnXFx1MjZjYycsICdcXHUyNmNkJywgJ1xcdTI2Y2UnXSxcclxuICAgICAgICBbJ1xcdTI2Y2YnLCAnXFx1MjZkMCcsICdcXHUyNmQxJywgJ1xcdTI2ZDInXSxcclxuICAgICAgICBbJ1xcdTI2ZDMnLCAnXFx1MjZkNScsICdcXHUyNmQ2JywgJ1xcdTI2ZDcnXSxcclxuICAgICAgICBbJ1xcdTI2ZGEnLCAnXFx1MjZkYicsICdcXHUyNmRkJywgJ1xcdTI2ZGUnXSxcclxuICAgICAgICBbJ1xcdTI2ZGYnLCAnXFx1MjZlMCcsICdcXHUyNmUxJywgJ1xcdTI2ZTInXSxcclxuICAgICAgICBbJ1xcdTI2ZTMnLCAnXFx1MjZlOCcsICdcXHUyNmU5JywgJ1xcdTI2ZWEnXSxcclxuICAgICAgICBbJ1xcdTI2ZWInLCAnXFx1MjZlYycsICdcXHUyNmVkJywgJ1xcdTI2ZWUnXSxcclxuICAgICAgICBbJ1xcdTI2ZWYnLCAnXFx1MjZmMCcsICdcXHUyNmYyJywgJ1xcdTI2ZjMnXSxcclxuICAgICAgICBbJ1xcdTI2ZjQnLCAnXFx1MjZmNScsICdcXHUyNmY2JywgJ1xcdTI2ZjcnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxyXG4gICAgICBdXHJcbiAgICBdXHJcbiAgfSxcclxuICAnXFx1MDQxY1xcdTA0M2VcXHUwNDNkXFx1MDQzM1xcdTA0M2VcXHUwNDNiJzoge1xyXG4gICAgJ25hbWUnOiAnTW9uZ29saWFuIEN5cmlsbGljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbJ1xcdTIxMTYnLCAnMSddLFxyXG4gICAgICAgIFsnLScsICcyJ10sXHJcbiAgICAgICAgWydcIicsICczJ10sXHJcbiAgICAgICAgWydcXHUyMEFFJywgJzQnXSxcclxuICAgICAgICBbJzonLCAnNSddLFxyXG4gICAgICAgIFsnLicsICc2J10sXHJcbiAgICAgICAgWydfJywgJzcnXSxcclxuICAgICAgICBbJywnLCAnOCddLFxyXG4gICAgICAgIFsnJScsICc5J10sXHJcbiAgICAgICAgWyc/JywgJzAnXSxcclxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxyXG4gICAgICAgIFsnXFx1MDQ0OScsICdcXHUwNDI5J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcclxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXHJcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcclxuICAgICAgICBbJ1xcdTA0NGQnLCAnXFx1MDQyZCddLFxyXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJ10sXHJcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcclxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxyXG4gICAgICAgIFsnXFx1MDRhZicsICdcXHUwNEFFJ10sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxYSddLFxyXG4gICAgICAgIFsnXFx1MDQ0QScsICdcXHUwNDJBJ10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcclxuICAgICAgICBbJ1xcdTA0NEInLCAnXFx1MDQyQiddLFxyXG4gICAgICAgIFsnXFx1MDQzMScsICdcXHUwNDExJ10sXHJcbiAgICAgICAgWydcXHUwNGU5JywgJ1xcdTA0ZTgnXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXHJcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcclxuICAgICAgICBbJ1xcdTA0M2UnLCAnXFx1MDQxZSddLFxyXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFiJ10sXHJcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcclxuICAgICAgICBbJ1xcdTA0M2YnLCAnXFx1MDQxZiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXHJcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcclxuICAgICAgICBbJ1xcdTA0NTEnLCAnXFx1MDQwMSddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDNjJywgJ1xcdTA0MWMnXSxcclxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDRjJywgJ1xcdTA0MmMnXSxcclxuICAgICAgICBbJ1xcdTA0MzInLCAnXFx1MDQxMiddLFxyXG4gICAgICAgIFsnXFx1MDQ0ZScsICdcXHUwNDJlJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydtbiddXHJcbiAgfSxcclxuICAnXFx1MDkyZVxcdTA5MzBcXHUwOTNlXFx1MDkyMFxcdTA5NDAnOiB7XHJcbiAgICAnbmFtZSc6ICdNYXJhdGhpJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWycnLCAnJywgJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnXFx1MDk2NycsICdcXHUwOTBEJywgJzEnLCAnISddLFxyXG4gICAgICAgIFsnXFx1MDk2OCcsICdcXHUwOTQ1JywgJzInLCAnQCddLFxyXG4gICAgICAgIFsnXFx1MDk2OScsICdcXHUwOTREXFx1MDkzMCcsICczJywgJyMnXSxcclxuICAgICAgICBbJ1xcdTA5NkEnLCAnXFx1MDkzMFxcdTA5NEQnLCAnNCcsICckJ10sXHJcbiAgICAgICAgWydcXHUwOTZCJywgJ1xcdTA5MUNcXHUwOTREXFx1MDkxRScsICc1JywgJyUnXSxcclxuICAgICAgICBbJ1xcdTA5NkMnLCAnXFx1MDkyNFxcdTA5NERcXHUwOTMwJywgJzYnLCAnXiddLFxyXG4gICAgICAgIFsnXFx1MDk2RCcsICdcXHUwOTE1XFx1MDk0RFxcdTA5MzcnLCAnNycsICcmJ10sXHJcbiAgICAgICAgWydcXHUwOTZFJywgJ1xcdTA5MzZcXHUwOTREXFx1MDkzMCcsICc4JywgJyonXSxcclxuICAgICAgICBbJ1xcdTA5NkYnLCAnKCcsICc5JywgJygnXSxcclxuICAgICAgICBbJ1xcdTA5NjYnLCAnKScsICcwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXFx1MDkwMycsICctJywgJ18nXSxcclxuICAgICAgICBbJ1xcdTA5NDMnLCAnXFx1MDkwQicsICc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA5NEMnLCAnXFx1MDkxNCddLFxyXG4gICAgICAgIFsnXFx1MDk0OCcsICdcXHUwOTEwJ10sXHJcbiAgICAgICAgWydcXHUwOTNFJywgJ1xcdTA5MDYnXSxcclxuICAgICAgICBbJ1xcdTA5NDAnLCAnXFx1MDkwOCddLFxyXG4gICAgICAgIFsnXFx1MDk0MicsICdcXHUwOTBBJ10sXHJcbiAgICAgICAgWydcXHUwOTJDJywgJ1xcdTA5MkQnXSxcclxuICAgICAgICBbJ1xcdTA5MzknLCAnXFx1MDkxOSddLFxyXG4gICAgICAgIFsnXFx1MDkxNycsICdcXHUwOTE4J10sXHJcbiAgICAgICAgWydcXHUwOTI2JywgJ1xcdTA5MjcnXSxcclxuICAgICAgICBbJ1xcdTA5MUMnLCAnXFx1MDkxRCddLFxyXG4gICAgICAgIFsnXFx1MDkyMScsICdcXHUwOTIyJywgJ1snLCAneyddLFxyXG4gICAgICAgIFsnXFx1MDkzQycsICdcXHUwOTFFJywgJ10nLCAnfSddLFxyXG4gICAgICAgIFsnXFx1MDk0OScsICdcXHUwOTExJywgJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA5NEInLCAnXFx1MDkxMyddLFxyXG4gICAgICAgIFsnXFx1MDk0NycsICdcXHUwOTBGJ10sXHJcbiAgICAgICAgWydcXHUwOTREJywgJ1xcdTA5MDUnXSxcclxuICAgICAgICBbJ1xcdTA5M0YnLCAnXFx1MDkwNyddLFxyXG4gICAgICAgIFsnXFx1MDk0MScsICdcXHUwOTA5J10sXHJcbiAgICAgICAgWydcXHUwOTJBJywgJ1xcdTA5MkInXSxcclxuICAgICAgICBbJ1xcdTA5MzAnLCAnXFx1MDkzMSddLFxyXG4gICAgICAgIFsnXFx1MDkxNScsICdcXHUwOTE2J10sXHJcbiAgICAgICAgWydcXHUwOTI0JywgJ1xcdTA5MjUnXSxcclxuICAgICAgICBbJ1xcdTA5MUEnLCAnXFx1MDkxQicsICc7JywgJzonXSxcclxuICAgICAgICBbJ1xcdTA5MUYnLCAnXFx1MDkyMCcsICdcXCcnLCAnXCInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJyddLFxyXG4gICAgICAgIFsnXFx1MDkwMicsICdcXHUwOTAxJywgJycsICdcXHUwOTUwJ10sXHJcbiAgICAgICAgWydcXHUwOTJFJywgJ1xcdTA5MjMnXSxcclxuICAgICAgICBbJ1xcdTA5MjgnXSxcclxuICAgICAgICBbJ1xcdTA5MzUnXSxcclxuICAgICAgICBbJ1xcdTA5MzInLCAnXFx1MDkzMyddLFxyXG4gICAgICAgIFsnXFx1MDkzOCcsICdcXHUwOTM2J10sXHJcbiAgICAgICAgWycsJywgJ1xcdTA5MzcnLCAnLCcsICc8J10sXHJcbiAgICAgICAgWycuJywgJ1xcdTA5NjQnLCAnLicsICc+J10sXHJcbiAgICAgICAgWydcXHUwOTJGJywgJ1xcdTA5NUYnLCAnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnbXInXVxyXG4gIH0sXHJcbiAgJ1xcdTEwMTlcXHUxMDNjXFx1MTAxNFxcdTEwM2FcXHUxMDE5XFx1MTAyY1xcdTEwMThcXHUxMDJjXFx1MTAxZVxcdTEwMmMnOiB7XHJcbiAgICAnbmFtZSc6ICdCdXJtZXNlJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUxMDM5YCcsICd+J10sXHJcbiAgICAgICAgWydcXHUxMDQxJywgJ1xcdTEwMEQnXSxcclxuICAgICAgICBbJ1xcdTEwNDInLCAnXFx1MTAwRSddLFxyXG4gICAgICAgIFsnXFx1MTA0MycsICdcXHUxMDBCJ10sXHJcbiAgICAgICAgWydcXHUxMDQ0JywgJ1xcdTEwMDBcXHUxMDNCXFx1MTAxNVxcdTEwM0EnXSxcclxuICAgICAgICBbJ1xcdTEwNDUnLCAnJSddLFxyXG4gICAgICAgIFsnXFx1MTA0NicsICcvJ10sXHJcbiAgICAgICAgWydcXHUxMDQ3JywgJ1xcdTEwMUInXSxcclxuICAgICAgICBbJ1xcdTEwNDgnLCAnXFx1MTAwMiddLFxyXG4gICAgICAgIFsnXFx1MTA0OScsICcoJ10sXHJcbiAgICAgICAgWydcXHUxMDQwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUxMDA2JywgJ1xcdTEwMjknXSxcclxuICAgICAgICBbJ1xcdTEwMTAnLCAnXFx1MTA0MCddLFxyXG4gICAgICAgIFsnXFx1MTAxNCcsICdcXHUxMDNGJ10sXHJcbiAgICAgICAgWydcXHUxMDE5JywgJ1xcdTEwMjMnXSxcclxuICAgICAgICBbJ1xcdTEwMjEnLCAnXFx1MTAyNCddLFxyXG4gICAgICAgIFsnXFx1MTAxNScsICdcXHUxMDRDJ10sXHJcbiAgICAgICAgWydcXHUxMDAwJywgJ1xcdTEwMDknXSxcclxuICAgICAgICBbJ1xcdTEwMDQnLCAnXFx1MTA0RCddLFxyXG4gICAgICAgIFsnXFx1MTAxRScsICdcXHUxMDI1J10sXHJcbiAgICAgICAgWydcXHUxMDA1JywgJ1xcdTEwMEYnXSxcclxuICAgICAgICBbJ1xcdTEwMUYnLCAnXFx1MTAyNyddLFxyXG4gICAgICAgIFsnXFx1MjAxOCcsICdcXHUyMDE5J10sXHJcbiAgICAgICAgWydcXHUxMDRGJywgJ1xcdTEwMEJcXHUxMDM5XFx1MTAwQyddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDMxJywgJ1xcdTEwMTcnXSxcclxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDNCJywgJ1xcdTIwMEJcXHUxMDNFJ10sXHJcbiAgICAgICAgWydcXHUyMDBCXFx1MTAyRCcsICdcXHUyMDBCXFx1MTAyRSddLFxyXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwM0EnLCAnXFx1MTAwNFxcdTEwM0FcXHUxMDM5XFx1MjAwQiddLFxyXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwMkInLCAnXFx1MjAwQlxcdTEwM0QnXSxcclxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDM3JywgJ1xcdTIwMEJcXHUxMDM2J10sXHJcbiAgICAgICAgWydcXHUyMDBCXFx1MTAzQycsICdcXHUyMDBCXFx1MTAzMiddLFxyXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwMkYnLCAnXFx1MjAwQlxcdTEwMkYnXSxcclxuICAgICAgICBbJ1xcdTIwMEJcXHUxMDMwJywgJ1xcdTIwMEJcXHUxMDMwJ10sXHJcbiAgICAgICAgWydcXHUyMDBCXFx1MTAzOCcsICdcXHUyMDBCXFx1MTAyQlxcdTEwM0EnXSxcclxuICAgICAgICBbJ1xcdTEwMTInLCAnXFx1MTAxMyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MTAxNicsICdcXHUxMDA3J10sXHJcbiAgICAgICAgWydcXHUxMDExJywgJ1xcdTEwMEMnXSxcclxuICAgICAgICBbJ1xcdTEwMDEnLCAnXFx1MTAwMyddLFxyXG4gICAgICAgIFsnXFx1MTAxQycsICdcXHUxMDIwJ10sXHJcbiAgICAgICAgWydcXHUxMDE4JywgJ1xcdTEwMjYnXSxcclxuICAgICAgICBbJ1xcdTEwMEEnLCAnXFx1MTAwOCddLFxyXG4gICAgICAgIFsnXFx1MjAwQlxcdTEwMkMnLCAnXFx1MTAyQSddLFxyXG4gICAgICAgIFsnXFx1MTAxQScsICdcXHUxMDFCJ10sXHJcbiAgICAgICAgWycuJywgJ1xcdTEwMUInXSxcclxuICAgICAgICBbJ1xcdTEwNEInLCAnXFx1MTA0QSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnbXknXVxyXG4gIH0sXHJcbiAgJ05lZGVybGFuZHMnOiB7XHJcbiAgICAnbmFtZSc6ICdEdXRjaCcsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnQCcsICdcXHUwMGE3JywgJ1xcdTAwYWMnXSxcclxuICAgICAgICBbJzEnLCAnIScsICdcXHUwMGI5J10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ1xcdTAwYjInXSxcclxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGIzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDBiYyddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwYmQnXSxcclxuICAgICAgICBbJzYnLCAnJicsICdcXHUwMGJlJ10sXHJcbiAgICAgICAgWyc3JywgJ18nLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ3snXSxcclxuICAgICAgICBbJzknLCAnKScsICd9J10sXHJcbiAgICAgICAgWycwJywgJ1xcJyddLFxyXG4gICAgICAgIFsnLycsICc/JywgJ1xcXFwnXSxcclxuICAgICAgICBbJ1xcdTAwYjAnLCAnficsICdcXHUwMGI4J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ3InLCAnUicsICdcXHUwMGI2J10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMGE4JywgJ14nXSxcclxuICAgICAgICBbJyonLCAnfCddLFxyXG4gICAgICAgIFsnPCcsICc+J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDBkZiddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWycrJywgJ1xcdTAwYjEnXSxcclxuICAgICAgICBbJ1xcdTAwYjQnLCAnYCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXScsICdbJywgJ1xcdTAwYTYnXSxcclxuICAgICAgICBbJ3onLCAnWicsICdcXHUwMGFiJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnLCAnXFx1MDBiYiddLFxyXG4gICAgICAgIFsnYycsICdDJywgJ1xcdTAwYTInXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMGI1J10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOicsICdcXHUwMGI3J10sXHJcbiAgICAgICAgWyctJywgJz0nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydubCddXHJcbiAgfSxcclxuICAnTm9yc2snOiB7XHJcbiAgICAnbmFtZSc6ICdOb3J3ZWdpYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ3wnLCAnXFx1MDBhNyddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGEzJ10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTAwYTQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJyYnXSxcclxuICAgICAgICBbJzcnLCAnLycsICd7J10sXHJcbiAgICAgICAgWyc4JywgJygnLCAnWyddLFxyXG4gICAgICAgIFsnOScsICcpJywgJ10nXSxcclxuICAgICAgICBbJzAnLCAnPScsICd9J10sXHJcbiAgICAgICAgWycrJywgJz8nXSxcclxuICAgICAgICBbJ1xcXFwnLCAnYCcsICdcXHUwMGI0J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnXFx1MDBlNScsICdcXHUwMGM1J10sXHJcbiAgICAgICAgWydcXHUwMGE4JywgJ14nLCAnfiddLFxyXG4gICAgICAgIFsnXFwnJywgJyonXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMGY4JywgJ1xcdTAwZDgnXSxcclxuICAgICAgICBbJ1xcdTAwZTYnLCAnXFx1MDBjNiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+J10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDNiYycsICdcXHUwMzljJ10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnbm8nLCAnbmInLCAnbm4nXVxyXG4gIH0sXHJcbiAgJ1xcdTA2N2VcXHUwNjlhXFx1MDYyYVxcdTA2NDgnOiB7XHJcbiAgICAnbmFtZSc6ICdQYXNodG8nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTIwMGQnLCAnXFx1MDBmNycsICdgJ10sXHJcbiAgICAgICAgWydcXHUwNmYxJywgJyEnLCAnYCddLFxyXG4gICAgICAgIFsnXFx1MDZmMicsICdcXHUwNjZjJywgJ0AnXSxcclxuICAgICAgICBbJ1xcdTA2ZjMnLCAnXFx1MDY2YicsICdcXHUwNjZiJ10sXHJcbiAgICAgICAgWydcXHUwNmY0JywgJ1xcdTAwYTQnLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsnXFx1MDZmNScsICdcXHUwNjZhJywgJyUnXSxcclxuICAgICAgICBbJ1xcdTA2ZjYnLCAnXFx1MDBkNycsICdeJ10sXHJcbiAgICAgICAgWydcXHUwNmY3JywgJ1xcdTAwYWInLCAnJiddLFxyXG4gICAgICAgIFsnXFx1MDZmOCcsICdcXHUwMGJiJywgJyonXSxcclxuICAgICAgICBbJ1xcdTA2ZjknLCAnKCcsICdcXHVmZGYyJ10sXHJcbiAgICAgICAgWydcXHUwNmYwJywgJyknLCAnXFx1ZmVmYiddLFxyXG4gICAgICAgIFsnLScsICdcXHUwNjQwJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKycsICdcXHVmZTg3JywgJ1xcdTAwZjcnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA2MzYnLCAnXFx1MDY1MicsICdcXHUwNmQ1J10sXHJcbiAgICAgICAgWydcXHUwNjM1JywgJ1xcdTA2NGMnLCAnXFx1MDY1MyddLFxyXG4gICAgICAgIFsnXFx1MDYyYicsICdcXHUwNjRkJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ1xcdTA2NDInLCAnXFx1MDY0YicsICdcXHVmZWY3J10sXHJcbiAgICAgICAgWydcXHUwNjQxJywgJ1xcdTA2NGYnLCAnXFx1ZmVmNSddLFxyXG4gICAgICAgIFsnXFx1MDYzYScsICdcXHUwNjUwJywgJ1xcJyddLFxyXG4gICAgICAgIFsnXFx1MDYzOScsICdcXHUwNjRlJywgJ1xcdWZlODQnXSxcclxuICAgICAgICBbJ1xcdTA2NDcnLCAnXFx1MDY1MScsICdcXHUwNjcwJ10sXHJcbiAgICAgICAgWydcXHUwNjJlJywgJ1xcdTA2ODEnLCAnXFwnJ10sXHJcbiAgICAgICAgWydcXHUwNjJkJywgJ1xcdTA2ODUnLCAnXCInXSxcclxuICAgICAgICBbJ1xcdTA2MmMnLCAnXScsICd9J10sXHJcbiAgICAgICAgWydcXHUwNjg2JywgJ1snLCAneyddLFxyXG4gICAgICAgIFsnXFxcXCcsICdcXHUwNjZkJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNjM0JywgJ1xcdTA2OWEnLCAnXFx1ZmJiMCddLFxyXG4gICAgICAgIFsnXFx1MDYzMycsICdcXHUwNmNkJywgJ1xcdTA2ZDInXSxcclxuICAgICAgICBbJ1xcdTA2Y2MnLCAnXFx1MDY0YScsICdcXHUwNmQyJ10sXHJcbiAgICAgICAgWydcXHUwNjI4JywgJ1xcdTA2N2UnLCAnXFx1MDZiYSddLFxyXG4gICAgICAgIFsnXFx1MDY0NCcsICdcXHUwNjIzJywgJ1xcdTA2YjcnXSxcclxuICAgICAgICBbJ1xcdTA2MjcnLCAnXFx1MDYyMicsICdcXHUwNjcxJ10sXHJcbiAgICAgICAgWydcXHUwNjJhJywgJ1xcdTA2N2MnLCAnXFx1MDY3OSddLFxyXG4gICAgICAgIFsnXFx1MDY0NicsICdcXHUwNmJjJywgJzwnXSxcclxuICAgICAgICBbJ1xcdTA2NDUnLCAnXFx1MDYyOScsICc+J10sXHJcbiAgICAgICAgWydcXHUwNmE5JywgJzonLCAnXFx1MDY0MyddLFxyXG4gICAgICAgIFsnXFx1MDZhZicsICdcXHUwNjFiJywgJ1xcdTA2YWInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA2MzgnLCAnXFx1MDYyNicsICc/J10sXHJcbiAgICAgICAgWydcXHUwNjM3JywgJ1xcdTA2ZDAnLCAnOyddLFxyXG4gICAgICAgIFsnXFx1MDYzMicsICdcXHUwNjk4JywgJ1xcdTA2NTUnXSxcclxuICAgICAgICBbJ1xcdTA2MzEnLCAnXFx1MDYyMScsICdcXHUwNjU0J10sXHJcbiAgICAgICAgWydcXHUwNjMwJywgJ1xcdTIwMGMnLCAnXFx1MDYyNSddLFxyXG4gICAgICAgIFsnXFx1MDYyZicsICdcXHUwNjg5JywgJ1xcdTA2ODgnXSxcclxuICAgICAgICBbJ1xcdTA2OTMnLCAnXFx1MDYyNCcsICdcXHUwNjkxJ10sXHJcbiAgICAgICAgWydcXHUwNjQ4JywgJ1xcdTA2MGMnLCAnLCddLFxyXG4gICAgICAgIFsnXFx1MDY5NicsICcuJywgJ1xcdTA2YzcnXSxcclxuICAgICAgICBbJy8nLCAnXFx1MDYxZicsICdcXHUwNmM5J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsICdcXHUwNjRkJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsncHMnXVxyXG4gIH0sXHJcbiAgJ1xcdTBhMmFcXHUwYTcwXFx1MGExY1xcdTBhM2VcXHUwYTJjXFx1MGE0MCc6IHtcclxuICAgICduYW1lJzogJ1B1bmphYmkgKEd1cm11a2hpKScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnJ10sXHJcbiAgICAgICAgWycxJywgJ1xcdTBBNERcXHUwQTM1JywgJ1xcdTBBNjcnLCAnXFx1MEE2NyddLFxyXG4gICAgICAgIFsnMicsICdcXHUwQTREXFx1MEEyRicsICdcXHUwQTY4JywgJ1xcdTBBNjgnXSxcclxuICAgICAgICBbJzMnLCAnXFx1MEE0RFxcdTBBMzAnLCAnXFx1MEE2OScsICdcXHUwQTY5J10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTBBNzEnLCAnXFx1MEE2QScsICdcXHUwQTZBJ10sXHJcbiAgICAgICAgWyc1JywgJycsICdcXHUwQTZCJywgJ1xcdTBBNkInXSxcclxuICAgICAgICBbJzYnLCAnJywgJ1xcdTBBNkMnLCAnXFx1MEE2QyddLFxyXG4gICAgICAgIFsnNycsICcnLCAnXFx1MEE2RCcsICdcXHUwQTZEJ10sXHJcbiAgICAgICAgWyc4JywgJycsICdcXHUwQTZFJywgJ1xcdTBBNkUnXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwQTZGJywgJ1xcdTBBNkYnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUwQTY2JywgJ1xcdTBBNjYnXSxcclxuICAgICAgICBbJy0nXSxcclxuICAgICAgICBbJyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MEE0QycsICdcXHUwQTE0J10sXHJcbiAgICAgICAgWydcXHUwQTQ4JywgJ1xcdTBBMTAnXSxcclxuICAgICAgICBbJ1xcdTBBM0UnLCAnXFx1MEEwNiddLFxyXG4gICAgICAgIFsnXFx1MEE0MCcsICdcXHUwQTA4J10sXHJcbiAgICAgICAgWydcXHUwQTQyJywgJ1xcdTBBMEEnXSxcclxuICAgICAgICBbJ1xcdTBBMkMnLCAnXFx1MEEyRCddLFxyXG4gICAgICAgIFsnXFx1MEEzOScsICdcXHUwQTE5J10sXHJcbiAgICAgICAgWydcXHUwQTE3JywgJ1xcdTBBMTgnLCAnXFx1MEE1QScsICdcXHUwQTVBJ10sXHJcbiAgICAgICAgWydcXHUwQTI2JywgJ1xcdTBBMjcnXSxcclxuICAgICAgICBbJ1xcdTBBMUMnLCAnXFx1MEExRCcsICdcXHUwQTVCJywgJ1xcdTBBNUInXSxcclxuICAgICAgICBbJ1xcdTBBMjEnLCAnXFx1MEEyMicsICdcXHUwQTVDJywgJ1xcdTBBNUMnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MEE0QicsICdcXHUwQTEzJ10sXHJcbiAgICAgICAgWydcXHUwQTQ3JywgJ1xcdTBBMEYnXSxcclxuICAgICAgICBbJ1xcdTBBNEQnLCAnXFx1MEEwNSddLFxyXG4gICAgICAgIFsnXFx1MEEzRicsICdcXHUwQTA3J10sXHJcbiAgICAgICAgWydcXHUwQTQxJywgJ1xcdTBBMDknXSxcclxuICAgICAgICBbJ1xcdTBBMkEnLCAnXFx1MEEyQicsICdcXHUwQTVFJywgJ1xcdTBBNUUnXSxcclxuICAgICAgICBbJ1xcdTBBMzAnXSxcclxuICAgICAgICBbJ1xcdTBBMTUnLCAnXFx1MEExNicsICdcXHUwQTU5JywgJ1xcdTBBNTknXSxcclxuICAgICAgICBbJ1xcdTBBMjQnLCAnXFx1MEEyNSddLFxyXG4gICAgICAgIFsnXFx1MEExQScsICdcXHUwQTFCJ10sXHJcbiAgICAgICAgWydcXHUwQTFGJywgJ1xcdTBBMjAnXSxcclxuICAgICAgICBbJ1xcdTBBM0MnLCAnXFx1MEExRSddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWycnXSxcclxuICAgICAgICBbJ1xcdTBBMDInLCAnXFx1MEEwMiddLFxyXG4gICAgICAgIFsnXFx1MEEyRScsICdcXHUwQTIzJ10sXHJcbiAgICAgICAgWydcXHUwQTI4J10sXHJcbiAgICAgICAgWydcXHUwQTM1JywgJ1xcdTBBNzInLCAnXFx1MEE3MycsICdcXHUwQTczJ10sXHJcbiAgICAgICAgWydcXHUwQTMyJywgJ1xcdTBBMzMnXSxcclxuICAgICAgICBbJ1xcdTBBMzgnLCAnXFx1MEEzNiddLFxyXG4gICAgICAgIFsnLCddLFxyXG4gICAgICAgIFsnLicsICd8JywgJ1xcdTA5NjUnLCAnXFx1MDk2NSddLFxyXG4gICAgICAgIFsnXFx1MEEyRiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3BhJ11cclxuICB9LFxyXG4gICdcXHU2MmZjXFx1OTdmMyAoUGlueWluKSc6IHtcclxuICAgICduYW1lJzogJ1BpbnlpbicsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+JywgJ1xcdTRlOTMnLCAnXFx1MzAxQyddLFxyXG4gICAgICAgIFsnMScsICchJywgJ1xcdUZGNjInXSxcclxuICAgICAgICBbJzInLCAnQCcsICdcXHVGRjYzJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MzAxRCddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTMwMUUnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUzMDFGJ10sXHJcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MzAwOCddLFxyXG4gICAgICAgIFsnNycsICcmJywgJ1xcdTMwMDknXSxcclxuICAgICAgICBbJzgnLCAnKicsICdcXHUzMDJGJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAnXFx1MzAwQSddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ1xcdTMwMEInXSxcclxuICAgICAgICBbJy0nLCAnXycsICdcXHUzMDBFJ10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MzAwRiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ1xcdTAxMDEnLCAnXFx1MDEwMCddLFxyXG4gICAgICAgIFsndycsICdXJywgJ1xcdTAwRTEnLCAnXFx1MDBDMSddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTAxQ0UnLCAnXFx1MDFDRCddLFxyXG4gICAgICAgIFsncicsICdSJywgJ1xcdTAwRTAnLCAnXFx1MDBDMCddLFxyXG4gICAgICAgIFsndCcsICdUJywgJ1xcdTAxMTMnLCAnXFx1MDExMiddLFxyXG4gICAgICAgIFsneScsICdZJywgJ1xcdTAwRTknLCAnXFx1MDBDOSddLFxyXG4gICAgICAgIFsndScsICdVJywgJ1xcdTAxMUInLCAnXFx1MDExQSddLFxyXG4gICAgICAgIFsnaScsICdJJywgJ1xcdTAwRTgnLCAnXFx1MDBDOCddLFxyXG4gICAgICAgIFsnbycsICdPJywgJ1xcdTAxMkInLCAnXFx1MDEyQSddLFxyXG4gICAgICAgIFsncCcsICdQJywgJ1xcdTAwRUQnLCAnXFx1MDBDRCddLFxyXG4gICAgICAgIFsnWycsICd7JywgJ1xcdTAxRDAnLCAnXFx1MDFDRiddLFxyXG4gICAgICAgIFsnXScsICd9JywgJ1xcdTAwRUMnLCAnXFx1MDBDQyddLFxyXG4gICAgICAgIFsnXFxcXCcsICd8JywgJ1xcdTMwMjAnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDE0RCcsICdcXHUwMTRDJ10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDBGMycsICdcXHUwMEQzJ10sXHJcbiAgICAgICAgWydkJywgJ0QnLCAnXFx1MDFEMicsICdcXHUwMUQxJ10sXHJcbiAgICAgICAgWydmJywgJ0YnLCAnXFx1MDBGMicsICdcXHUwMEQyJ10sXHJcbiAgICAgICAgWydnJywgJ0cnLCAnXFx1MDBmYycsICdcXHUwMGRjJ10sXHJcbiAgICAgICAgWydoJywgJ0gnLCAnXFx1MDE2QicsICdcXHUwMTZBJ10sXHJcbiAgICAgICAgWydqJywgJ0onLCAnXFx1MDBGQScsICdcXHUwMERBJ10sXHJcbiAgICAgICAgWydrJywgJ0snLCAnXFx1MDFENCcsICdcXHUwMUQzJ10sXHJcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDBGOScsICdcXHUwMEQ5J10sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsneicsICdaJywgJ1xcdTAxRDYnLCAnXFx1MDFENSddLFxyXG4gICAgICAgIFsneCcsICdYJywgJ1xcdTAxRDgnLCAnXFx1MDFENyddLFxyXG4gICAgICAgIFsnYycsICdDJywgJ1xcdTAxREEnLCAnXFx1MDFEOSddLFxyXG4gICAgICAgIFsndicsICdWJywgJ1xcdTAxREMnLCAnXFx1MDFEQiddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc8JywgJ1xcdTMwMDEnXSxcclxuICAgICAgICBbJy4nLCAnPicsICdcXHUzMDAyJ10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrLCBLZXlib2FyZENsYXNzS2V5LkFsdExrXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3poLUxBVE4nXVxyXG4gIH0sXHJcbiAgJ1BvbHNraSc6IHtcclxuICAgICduYW1lJzogJ1BvbGlzaCAoMjE0KScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDJEQicsICdcXHUwMEI3J10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnfiddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdcXHUwMkM3J10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXiddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwMEE0JywgJ1xcdTAyRDgnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMEIwJ10sXHJcbiAgICAgICAgWyc2JywgJyYnLCAnXFx1MDJEQiddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ2AnXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdcXHUwMEI3J10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXFx1MDBCNCddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ1xcdTAyREQnXSxcclxuICAgICAgICBbJysnLCAnPycsICdcXHUwMEE4J10sXHJcbiAgICAgICAgWydcXCcnLCAnKicsICdcXHUwMEI4J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnLCAnXFxcXCddLFxyXG4gICAgICAgIFsndycsICdXJywgJ1xcdTAwQTYnXSxcclxuICAgICAgICBbJ2UnLCAnRSddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsndScsICdVJywgJ1xcdTIwQUMnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAxN0MnLCAnXFx1MDE0NCcsICdcXHUwMEY3J10sXHJcbiAgICAgICAgWydcXHUwMTVCJywgJ1xcdTAxMDcnLCAnXFx1MDBENyddLFxyXG4gICAgICAgIFsnXFx1MDBGMycsICdcXHUwMTdBJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDExMSddLFxyXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAxMTAnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAxNDInLCAnXFx1MDE0MScsICckJ10sXHJcbiAgICAgICAgWydcXHUwMTA1JywgJ1xcdTAxMTknLCAnXFx1MDBERiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+J10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnLCAnQCddLFxyXG4gICAgICAgIFsnYicsICdCJywgJ3snXSxcclxuICAgICAgICBbJ24nLCAnTicsICd9J10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBBNyddLFxyXG4gICAgICAgIFsnLCcsICc7JywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnOicsICc+J10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgJ1BvbHNraSBQcm9ncmFtaXN0eSc6IHtcclxuICAgICduYW1lJzogJ1BvbGlzaCBQcm9ncmFtbWVycycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTAxMTknLCAnXFx1MDExOCddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTycsICdcXHUwMGYzJywgJ1xcdTAwZDMnXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnWycsICd7J10sXHJcbiAgICAgICAgWyddJywgJ30nXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQScsICdcXHUwMTA1JywgJ1xcdTAxMDQnXSxcclxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMTViJywgJ1xcdTAxNWEnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCcsICdcXHUwMTQyJywgJ1xcdTAxNDEnXSxcclxuICAgICAgICBbJzsnLCAnOiddLFxyXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyd6JywgJ1onLCAnXFx1MDE3YycsICdcXHUwMTdiJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnLCAnXFx1MDE3YScsICdcXHUwMTc5J10sXHJcbiAgICAgICAgWydjJywgJ0MnLCAnXFx1MDEwNycsICdcXHUwMTA2J10sXHJcbiAgICAgICAgWyd2JywgJ1YnXSxcclxuICAgICAgICBbJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJywgJ1xcdTAxNDQnLCAnXFx1MDE0MyddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3BsJ11cclxuICB9LFxyXG4gICdQb3J0dWd1XFx1MDBlYXMgQnJhc2lsZWlybyc6IHtcclxuICAgICduYW1lJzogJ1BvcnR1Z3Vlc2UgKEJyYXppbCknLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFsnMScsICchJywgJ1xcdTAwYjknXSxcclxuICAgICAgICBbJzInLCAnQCcsICdcXHUwMGIyJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBiMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMGEyJ10sXHJcbiAgICAgICAgWyc2JywgJ1xcdTAwYTgnLCAnXFx1MDBhYyddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMGE3J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnLCAnLyddLFxyXG4gICAgICAgIFsndycsICdXJywgJz8nXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwYjQnLCAnYCddLFxyXG4gICAgICAgIFsnWycsICd7JywgJ1xcdTAwYWEnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDBlNycsICdcXHUwMGM3J10sXHJcbiAgICAgICAgWyd+JywgJ14nXSxcclxuICAgICAgICBbJ10nLCAnfScsICdcXHUwMGJhJ10sXHJcbiAgICAgICAgWycvJywgJz8nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJywgJ1xcdTIwYTInXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc8J10sXHJcbiAgICAgICAgWycuJywgJz4nXSxcclxuICAgICAgICBbJzonLCAnOiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3B0LUJSJ11cclxuICB9LFxyXG4gICdQb3J0dWd1XFx1MDBlYXMnOiB7XHJcbiAgICAnbmFtZSc6ICdQb3J0dWd1ZXNlJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsnNCcsICckJywgJ1xcdTAwYTcnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAneyddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1snXSxcclxuICAgICAgICBbJzknLCAnKScsICddJ10sXHJcbiAgICAgICAgWycwJywgJz0nLCAnfSddLFxyXG4gICAgICAgIFsnXFwnJywgJz8nXSxcclxuICAgICAgICBbJ1xcdTAwYWInLCAnXFx1MDBiYiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJysnLCAnKicsICdcXHUwMGE4J10sXHJcbiAgICAgICAgWydcXHUwMGI0JywgJ2AnXSxcclxuICAgICAgICBbJ34nLCAnXiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAwZTcnLCAnXFx1MDBjNyddLFxyXG4gICAgICAgIFsnXFx1MDBiYScsICdcXHUwMGFhJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nLCAnXFxcXCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsncHQnXVxyXG4gIH0sXHJcbiAgJ1JvbVxcdTAwZTJuXFx1MDEwMyc6IHtcclxuICAgICduYW1lJzogJ1JvbWFuaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUyMDFFJywgJ1xcdTIwMUQnLCAnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnfiddLFxyXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTAyQzcnXSxcclxuICAgICAgICBbJzMnLCAnIycsICdeJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDJEOCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwQjAnXSxcclxuICAgICAgICBbJzYnLCAnXicsICdcXHUwMkRCJ10sXHJcbiAgICAgICAgWyc3JywgJyYnLCAnYCddLFxyXG4gICAgICAgIFsnOCcsICcqJywgJ1xcdTAyRDknXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwMEI0J10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MDJERCddLFxyXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTAwQTgnXSxcclxuICAgICAgICBbJz0nLCAnKycsICdcXHUwMEI4JywgJ1xcdTAwQjEnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJywgJ1xcdTAwQTcnXSxcclxuICAgICAgICBbJ1xcdTAxMDMnLCAnXFx1MDEwMicsICdbJywgJ3snXSxcclxuICAgICAgICBbJ1xcdTAwRUUnLCAnXFx1MDBDRScsICddJywgJ30nXSxcclxuICAgICAgICBbJ1xcdTAwRTInLCAnXFx1MDBDMicsICdcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMGRmJ10sXHJcbiAgICAgICAgWydkJywgJ0QnLCAnXFx1MDBmMCcsICdcXHUwMEQwJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJywgJ1xcdTAxNDInLCAnXFx1MDE0MSddLFxyXG4gICAgICAgIFsnXFx1MDIxOScsICdcXHUwMjE4JywgJzsnLCAnOiddLFxyXG4gICAgICAgIFsnXFx1MDIxQicsICdcXHUwMjFBJywgJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFxcXCcsICd8J10sXHJcbiAgICAgICAgWyd6JywgJ1onXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJywgJ1xcdTAwQTknXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc7JywgJzwnLCAnXFx1MDBBQiddLFxyXG4gICAgICAgIFsnLicsICc6JywgJz4nLCAnXFx1MDBCQiddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsncm8nXVxyXG4gIH0sXHJcbiAgJ1xcdTA0MjBcXHUwNDQzXFx1MDQ0MVxcdTA0NDFcXHUwNDNhXFx1MDQzOFxcdTA0MzknOiB7XHJcbiAgICAnbmFtZSc6ICdSdXNzaWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNDUxJywgJ1xcdTA0MDEnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIiddLFxyXG4gICAgICAgIFsnMycsICdcXHUyMTE2J10sXHJcbiAgICAgICAgWyc0JywgJzsnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICc6J10sXHJcbiAgICAgICAgWyc3JywgJz8nXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcclxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXHJcbiAgICAgICAgWydcXHUwNDNBJywgJ1xcdTA0MUEnXSxcclxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxyXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJ10sXHJcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcclxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0OScsICdcXHUwNDI5J10sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxyXG4gICAgICAgIFsnXFx1MDQ0QScsICdcXHUwNDJBJ10sXHJcbiAgICAgICAgWydcXFxcJywgJy8nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcclxuICAgICAgICBbJ1xcdTA0NEInLCAnXFx1MDQyQiddLFxyXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXHJcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcclxuICAgICAgICBbJ1xcdTA0M0YnLCAnXFx1MDQxRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnXSxcclxuICAgICAgICBbJ1xcdTA0M0InLCAnXFx1MDQxQiddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcclxuICAgICAgICBbJ1xcdTA0NEQnLCAnXFx1MDQyRCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnLycsICd8J10sXHJcbiAgICAgICAgWydcXHUwNDRGJywgJ1xcdTA0MkYnXSxcclxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnXSxcclxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDRDJywgJ1xcdTA0MkMnXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxyXG4gICAgICAgIFsnXFx1MDQ0RScsICdcXHUwNDJFJ10sXHJcbiAgICAgICAgWycuJywgJywnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3J1J11cclxuICB9LFxyXG4gICdTY2h3ZWl6ZXJkZXV0c2NoJzoge1xyXG4gICAgJ25hbWUnOiAnU3dpc3MgR2VybWFuJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMEE3JywgJ1xcdTAwQjAnXSxcclxuICAgICAgICBbJzEnLCAnKycsICdcXHUwMEE2J10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnKicsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTAwRTcnLCAnXFx1MDBCMCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwQTcnXSxcclxuICAgICAgICBbJzYnLCAnJicsICdcXHUwMEFDJ10sXHJcbiAgICAgICAgWyc3JywgJy8nLCAnfCddLFxyXG4gICAgICAgIFsnOCcsICcoJywgJ1xcdTAwQTInXSxcclxuICAgICAgICBbJzknLCAnKSddLFxyXG4gICAgICAgIFsnMCcsICc9J10sXHJcbiAgICAgICAgWydcXCcnLCAnPycsICdcXHUwMEI0J10sXHJcbiAgICAgICAgWydeJywgJ2AnLCAnfiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwRkMnLCAnXFx1MDBFOCcsICdbJ10sXHJcbiAgICAgICAgWydcXHUwMEE4JywgJyEnLCAnXSddLFxyXG4gICAgICAgIFsnJCcsICdcXHUwMEEzJywgJ30nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMEY2JywgJ1xcdTAwRTknXSxcclxuICAgICAgICBbJ1xcdTAwRTQnLCAnXFx1MDBFMCcsICd7J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nLCAnXFxcXCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnZGUtQ0gnXVxyXG4gIH0sXHJcbiAgJ1NocWlwJzoge1xyXG4gICAgJ25hbWUnOiAnQWxiYW5pYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcXFwnLCAnfCddLFxyXG4gICAgICAgIFsnMScsICchJywgJ34nXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnXFx1MDJDNyddLFxyXG4gICAgICAgIFsnMycsICcjJywgJ14nXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUwMkQ4J10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBCMCddLFxyXG4gICAgICAgIFsnNicsICdeJywgJ1xcdTAyREInXSxcclxuICAgICAgICBbJzcnLCAnJicsICdgJ10sXHJcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDJEOSddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTAwQjQnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUwMkREJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBBOCddLFxyXG4gICAgICAgIFsnPScsICcrJywgJ1xcdTAwQjgnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUScsICdcXFxcJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnLCAnfCddLFxyXG4gICAgICAgIFsnZScsICdFJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwRTcnLCAnXFx1MDBDNycsICdcXHUwMEY3J10sXHJcbiAgICAgICAgWydbJywgJ3snLCAnXFx1MDBERiddLFxyXG4gICAgICAgIFsnXScsICd9JywgJ1xcdTAwQTQnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMTExJ10sXHJcbiAgICAgICAgWydkJywgJ0QnLCAnXFx1MDExMCddLFxyXG4gICAgICAgIFsnZicsICdGJywgJ1snXSxcclxuICAgICAgICBbJ2cnLCAnRycsICddJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJywgJ1xcdTAxNDInXSxcclxuICAgICAgICBbJ2wnLCAnTCcsICdcXHUwMTQxJ10sXHJcbiAgICAgICAgWydcXHUwMEVCJywgJ1xcdTAwQ0InLCAnJCddLFxyXG4gICAgICAgIFsnQCcsICdcXCcnLCAnXFx1MDBENyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+J10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWyd2JywgJ1YnLCAnQCddLFxyXG4gICAgICAgIFsnYicsICdCJywgJ3snXSxcclxuICAgICAgICBbJ24nLCAnTicsICd9J10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBBNyddLFxyXG4gICAgICAgIFsnLCcsICc7JywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnOicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydzcSddXHJcbiAgfSxcclxuICAnU2xvdmVuXFx1MDEwZGluYSc6IHtcclxuICAgICduYW1lJzogJ1Nsb3ZhaycsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnOycsICdcXHUwMGIwJ10sXHJcbiAgICAgICAgWycrJywgJzEnLCAnfiddLFxyXG4gICAgICAgIFsnXFx1MDEzRScsICcyJywgJ1xcdTAyQzcnXSxcclxuICAgICAgICBbJ1xcdTAxNjEnLCAnMycsICdeJ10sXHJcbiAgICAgICAgWydcXHUwMTBEJywgJzQnLCAnXFx1MDJEOCddLFxyXG4gICAgICAgIFsnXFx1MDE2NScsICc1JywgJ1xcdTAwQjAnXSxcclxuICAgICAgICBbJ1xcdTAxN0UnLCAnNicsICdcXHUwMkRCJ10sXHJcbiAgICAgICAgWydcXHUwMEZEJywgJzcnLCAnYCddLFxyXG4gICAgICAgIFsnXFx1MDBFMScsICc4JywgJ1xcdTAyRDknXSxcclxuICAgICAgICBbJ1xcdTAwRUQnLCAnOScsICdcXHUwMEI0J10sXHJcbiAgICAgICAgWydcXHUwMEU5JywgJzAnLCAnXFx1MDJERCddLFxyXG4gICAgICAgIFsnPScsICclJywgJ1xcdTAwQTgnXSxcclxuICAgICAgICBbJ1xcdTAwQjQnLCAnXFx1MDJjNycsICdcXHUwMEI4J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnLCAnXFxcXCddLFxyXG4gICAgICAgIFsndycsICdXJywgJ3wnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnLCAnXFwnJ10sXHJcbiAgICAgICAgWydcXHUwMEZBJywgJy8nLCAnXFx1MDBGNyddLFxyXG4gICAgICAgIFsnXFx1MDBFNCcsICcoJywgJ1xcdTAwRDcnXSxcclxuICAgICAgICBbJ1xcdTAxNDgnLCAnKScsICdcXHUwMEE0J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDExMSddLFxyXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAxMTAnXSxcclxuICAgICAgICBbJ2YnLCAnRicsICdbJ10sXHJcbiAgICAgICAgWydnJywgJ0cnLCAnXSddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSycsICdcXHUwMTQyJ10sXHJcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDE0MSddLFxyXG4gICAgICAgIFsnXFx1MDBGNCcsICdcIicsICckJ10sXHJcbiAgICAgICAgWydcXHUwMEE3JywgJyEnLCAnXFx1MDBERiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnJicsICcqJywgJzwnXSxcclxuICAgICAgICBbJ3knLCAnWScsICc+J10sXHJcbiAgICAgICAgWyd4JywgJ1gnLCAnIyddLFxyXG4gICAgICAgIFsnYycsICdDJywgJyYnXSxcclxuICAgICAgICBbJ3YnLCAnVicsICdAJ10sXHJcbiAgICAgICAgWydiJywgJ0InLCAneyddLFxyXG4gICAgICAgIFsnbicsICdOJywgJ30nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc/JywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnOicsICc+J10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnKiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3NrJ11cclxuICB9LFxyXG4gICdcXHUwNDQxXFx1MDQ0MFxcdTA0M2ZcXHUwNDQxXFx1MDQzYVxcdTA0MzgnOiB7XHJcbiAgICAnbmFtZSc6ICdTZXJiaWFuIEN5cmlsbGljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIiddLFxyXG4gICAgICAgIFsnMycsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICcmJ10sXHJcbiAgICAgICAgWyc3JywgJy8nXSxcclxuICAgICAgICBbJzgnLCAnKCddLFxyXG4gICAgICAgIFsnOScsICcpJ10sXHJcbiAgICAgICAgWycwJywgJz0nXSxcclxuICAgICAgICBbJ1xcJycsICc/J10sXHJcbiAgICAgICAgWycrJywgJyonXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA0NTknLCAnXFx1MDQwOSddLFxyXG4gICAgICAgIFsnXFx1MDQ1YScsICdcXHUwNDBhJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcclxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXHJcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcclxuICAgICAgICBbJ1xcdTA0M2UnLCAnXFx1MDQxZSddLFxyXG4gICAgICAgIFsnXFx1MDQzZicsICdcXHUwNDFmJ10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcclxuICAgICAgICBbJ1xcdTA0NTInLCAnXFx1MDQwMiddLFxyXG4gICAgICAgIFsnXFx1MDQzNicsICdcXHUwNDE2J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDQzMCcsICdcXHUwNDEwJ10sXHJcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcclxuICAgICAgICBbJ1xcdTA0MzQnLCAnXFx1MDQxNCddLFxyXG4gICAgICAgIFsnXFx1MDQ0NCcsICdcXHUwNDI0J10sXHJcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcclxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxyXG4gICAgICAgIFsnXFx1MDQ1OCcsICdcXHUwNDA4J10sXHJcbiAgICAgICAgWydcXHUwNDNhJywgJ1xcdTA0MWEnXSxcclxuICAgICAgICBbJ1xcdTA0M2InLCAnXFx1MDQxYiddLFxyXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXHJcbiAgICAgICAgWydcXHUwNDViJywgJ1xcdTA0MGInXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPiddLFxyXG4gICAgICAgIFsnXFx1MDQ1NScsICdcXHUwNDA1J10sXHJcbiAgICAgICAgWydcXHUwNDVmJywgJ1xcdTA0MGYnXSxcclxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxyXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXHJcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcclxuICAgICAgICBbJ1xcdTA0M2QnLCAnXFx1MDQxZCddLFxyXG4gICAgICAgIFsnXFx1MDQzYycsICdcXHUwNDFjJ10sXHJcbiAgICAgICAgWycsJywgJzsnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc6JywgJz4nXSxcclxuICAgICAgICBbJy0nLCAnXycsICdcXHUwMGE5J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsnc3ItQ1lSTCddXHJcbiAgfSxcclxuICAnU3VvbWknOiB7XHJcbiAgICAnbmFtZSc6ICdGaW5uaXNoJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwMGE3JywgJ1xcdTAwQkQnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDBBMyddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwMEE0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWyc2JywgJyYnXSxcclxuICAgICAgICBbJzcnLCAnLycsICd7J10sXHJcbiAgICAgICAgWyc4JywgJygnLCAnWyddLFxyXG4gICAgICAgIFsnOScsICcpJywgJ10nXSxcclxuICAgICAgICBbJzAnLCAnPScsICd9J10sXHJcbiAgICAgICAgWycrJywgJz8nLCAnXFxcXCddLFxyXG4gICAgICAgIFsnXFx1MDBCNCcsICdgJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnLCAnXFx1MDBFMicsICdcXHUwMEMyJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCcsICdcXHUwMTY3JywgJ1xcdTAxNjYnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knLCAnXFx1MDBlZicsICdcXHUwMENGJ10sXHJcbiAgICAgICAgWydvJywgJ08nLCAnXFx1MDBmNScsICdcXHUwMEQ1J10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAwRTUnLCAnXFx1MDBDNSddLFxyXG4gICAgICAgIFsnXFx1MDBBOCcsICdeJywgJ34nXSxcclxuICAgICAgICBbJ1xcJycsICcqJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJywgJ1xcdTAwRTEnLCAnXFx1MDBDMSddLFxyXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAxNjEnLCAnXFx1MDE2MCddLFxyXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAxMTEnLCAnXFx1MDExMCddLFxyXG4gICAgICAgIFsnZicsICdGJywgJ1xcdTAxZTUnLCAnXFx1MDFFNCddLFxyXG4gICAgICAgIFsnZycsICdHJywgJ1xcdTAxRTcnLCAnXFx1MDFFNiddLFxyXG4gICAgICAgIFsnaCcsICdIJywgJ1xcdTAyMUYnLCAnXFx1MDIxZSddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snLCAnXFx1MDFlOScsICdcXHUwMUU4J10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAwRjYnLCAnXFx1MDBENicsICdcXHUwMEY4JywgJ1xcdTAwRDgnXSxcclxuICAgICAgICBbJ1xcdTAwRTQnLCAnXFx1MDBDNCcsICdcXHUwMEU2JywgJ1xcdTAwQzYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJzwnLCAnPicsICd8J10sXHJcbiAgICAgICAgWyd6JywgJ1onLCAnXFx1MDE3RScsICdcXHUwMTdEJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQycsICdcXHUwMTBkJywgJ1xcdTAxMEMnXSxcclxuICAgICAgICBbJ3YnLCAnVicsICdcXHUwMUVGJywgJ1xcdTAxRUUnXSxcclxuICAgICAgICBbJ2InLCAnQicsICdcXHUwMjkyJywgJ1xcdTAxQjcnXSxcclxuICAgICAgICBbJ24nLCAnTicsICdcXHUwMTRCJywgJ1xcdTAxNEEnXSxcclxuICAgICAgICBbJ20nLCAnTScsICdcXHUwMEI1J10sXHJcbiAgICAgICAgWycsJywgJzsnXSxcclxuICAgICAgICBbJy4nLCAnOiddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydmaSddXHJcbiAgfSxcclxuICAnU3ZlbnNrYSc6IHtcclxuICAgICduYW1lJzogJ1N3ZWRpc2gnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwYTcnLCAnXFx1MDBiZCddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJywgJ0AnXSxcclxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGEzJ10sXHJcbiAgICAgICAgWyc0JywgJ1xcdTAwYTQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3snXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcclxuICAgICAgICBbJysnLCAnPycsICdcXFxcJ10sXHJcbiAgICAgICAgWydcXHUwMGI0JywgJ2AnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMGU1JywgJ1xcdTAwYzUnXSxcclxuICAgICAgICBbJ1xcdTAwYTgnLCAnXicsICd+J10sXHJcbiAgICAgICAgWydcXCcnLCAnKiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJ10sXHJcbiAgICAgICAgWydkJywgJ0QnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnXSxcclxuICAgICAgICBbJ1xcdTAwZjYnLCAnXFx1MDBkNiddLFxyXG4gICAgICAgIFsnXFx1MDBlNCcsICdcXHUwMGM0J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nLCAnfCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJywgJ1xcdTAzYmMnLCAnXFx1MDM5YyddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3N2J11cclxuICB9LFxyXG4gICdTd2lzcyBGcmFuXFx1MDBlN2Fpcyc6IHtcclxuICAgICduYW1lJzogJ1N3aXNzIEZyZW5jaCcsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MDBBNycsICdcXHUwMEIwJ10sXHJcbiAgICAgICAgWycxJywgJysnLCAnXFx1MDBBNiddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyonLCAnIyddLFxyXG4gICAgICAgIFsnNCcsICdcXHUwMEU3JywgJ1xcdTAwQjAnXSxcclxuICAgICAgICBbJzUnLCAnJScsICdcXHUwMEE3J10sXHJcbiAgICAgICAgWyc2JywgJyYnLCAnXFx1MDBBQyddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3wnXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdcXHUwMEEyJ10sXHJcbiAgICAgICAgWyc5JywgJyknXSxcclxuICAgICAgICBbJzAnLCAnPSddLFxyXG4gICAgICAgIFsnXFwnJywgJz8nLCAnXFx1MDBCNCddLFxyXG4gICAgICAgIFsnXicsICdgJywgJ34nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ3EnLCAnUSddLFxyXG4gICAgICAgIFsndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnXFx1MjBBQyddLFxyXG4gICAgICAgIFsncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMEU4JywgJ1xcdTAwRkMnLCAnWyddLFxyXG4gICAgICAgIFsnXFx1MDBBOCcsICchJywgJ10nXSxcclxuICAgICAgICBbJyQnLCAnXFx1MDBBMycsICd9J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJ10sXHJcbiAgICAgICAgWydzJywgJ1MnXSxcclxuICAgICAgICBbJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJ10sXHJcbiAgICAgICAgWydnJywgJ0cnXSxcclxuICAgICAgICBbJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJ10sXHJcbiAgICAgICAgWydrJywgJ0snXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnXFx1MDBFOScsICdcXHUwMEY2J10sXHJcbiAgICAgICAgWydcXHUwMEUwJywgJ1xcdTAwRTQnLCAneyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ1xcXFwnXSxcclxuICAgICAgICBbJ3knLCAnWSddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc7J10sXHJcbiAgICAgICAgWycuJywgJzonXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2ZyLUNIJ11cclxuICB9LFxyXG4gICdcXHUwNzIzXFx1MDcxOFxcdTA3MmFcXHUwNzFkXFx1MDcxZFxcdTA3MTAnOiB7XHJcbiAgICAnbmFtZSc6ICdTeXJpYWMnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTA3MGYnLCAnXFx1MDMyZScsICdcXHUwNjUxJywgJ1xcdTA2NTEnXSxcclxuICAgICAgICBbJzEnLCAnIScsICdcXHUwNzAxJywgJ1xcdTA3MDEnXSxcclxuICAgICAgICBbJzInLCAnXFx1MDMwYScsICdcXHUwNzAyJywgJ1xcdTA3MDInXSxcclxuICAgICAgICBbJzMnLCAnXFx1MDMyNScsICdcXHUwNzAzJywgJ1xcdTA3MDMnXSxcclxuICAgICAgICBbJzQnLCAnXFx1MDc0OScsICdcXHUwNzA0JywgJ1xcdTA3MDQnXSxcclxuICAgICAgICBbJzUnLCAnXFx1MjY3MCcsICdcXHUwNzA1JywgJ1xcdTA3MDUnXSxcclxuICAgICAgICBbJzYnLCAnXFx1MjY3MScsICdcXHUwNzA4JywgJ1xcdTA3MDgnXSxcclxuICAgICAgICBbJzcnLCAnXFx1MDcwYScsICdcXHUwNzA5JywgJ1xcdTA3MDknXSxcclxuICAgICAgICBbJzgnLCAnXFx1MDBiYicsICdcXHUwNzBCJywgJ1xcdTA3MEInXSxcclxuICAgICAgICBbJzknLCAnKScsICdcXHUwNzBDJywgJ1xcdTA3MEMnXSxcclxuICAgICAgICBbJzAnLCAnKCcsICdcXHUwNzBEJywgJ1xcdTA3MEQnXSxcclxuICAgICAgICBbJy0nLCAnXFx1MDBhYicsICdcXHUyNTBDJywgJ1xcdTI1MEMnXSxcclxuICAgICAgICBbJz0nLCAnKycsICdcXHUyNTEwJywgJ1xcdTI1MTAnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA3MTQnLCAnXFx1MDczMCcsICdcXHUwNjRFJywgJ1xcdTA2NEUnXSxcclxuICAgICAgICBbJ1xcdTA3MjgnLCAnXFx1MDczMycsICdcXHUwNjRCJywgJ1xcdTA2NEInXSxcclxuICAgICAgICBbJ1xcdTA3MTYnLCAnXFx1MDczNicsICdcXHUwNjRGJywgJ1xcdTA2NEYnXSxcclxuICAgICAgICBbJ1xcdTA3MjknLCAnXFx1MDczQScsICdcXHUwNjRDJywgJ1xcdTA2NEMnXSxcclxuICAgICAgICBbJ1xcdTA3MjYnLCAnXFx1MDczRCcsICdcXHUwNjUzJywgJ1xcdTA2NTMnXSxcclxuICAgICAgICBbJ1xcdTA3MWMnLCAnXFx1MDc0MCcsICdcXHUwNjU0JywgJ1xcdTA2NTQnXSxcclxuICAgICAgICBbJ1xcdTA3MjUnLCAnXFx1MDc0MScsICdcXHUwNzQ3JywgJ1xcdTA3NDcnXSxcclxuICAgICAgICBbJ1xcdTA3MTcnLCAnXFx1MDMwOCcsICdcXHUwNzQzJywgJ1xcdTA3NDMnXSxcclxuICAgICAgICBbJ1xcdTA3MWUnLCAnXFx1MDMwNCcsICdcXHUwNzQ1JywgJ1xcdTA3NDUnXSxcclxuICAgICAgICBbJ1xcdTA3MWEnLCAnXFx1MDMwNycsICdcXHUwMzJEJywgJ1xcdTAzMkQnXSxcclxuICAgICAgICBbJ1xcdTA3MTMnLCAnXFx1MDMwMyddLFxyXG4gICAgICAgIFsnXFx1MDcxNScsICdcXHUwNzRBJ10sXHJcbiAgICAgICAgWydcXHUwNzA2JywgJzonXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNzJiJywgJ1xcdTA3MzEnLCAnXFx1MDY1MCcsICdcXHUwNjUwJ10sXHJcbiAgICAgICAgWydcXHUwNzIzJywgJ1xcdTA3MzQnLCAnXFx1MDY0ZCcsICdcXHUwNjRkJ10sXHJcbiAgICAgICAgWydcXHUwNzFkJywgJ1xcdTA3MzcnXSxcclxuICAgICAgICBbJ1xcdTA3MTInLCAnXFx1MDczYicsICdcXHUwNjIxJywgJ1xcdTA2MjEnXSxcclxuICAgICAgICBbJ1xcdTA3MjAnLCAnXFx1MDczZScsICdcXHUwNjU1JywgJ1xcdTA2NTUnXSxcclxuICAgICAgICBbJ1xcdTA3MTAnLCAnXFx1MDcxMScsICdcXHUwNjcwJywgJ1xcdTA2NzAnXSxcclxuICAgICAgICBbJ1xcdTA3MmMnLCAnXFx1MDY0MCcsICdcXHUwNzQ4JywgJ1xcdTA3NDgnXSxcclxuICAgICAgICBbJ1xcdTA3MjInLCAnXFx1MDMyNCcsICdcXHUwNzQ0JywgJ1xcdTA3NDQnXSxcclxuICAgICAgICBbJ1xcdTA3MjEnLCAnXFx1MDMzMScsICdcXHUwNzQ2JywgJ1xcdTA3NDYnXSxcclxuICAgICAgICBbJ1xcdTA3MWYnLCAnXFx1MDMyMyddLFxyXG4gICAgICAgIFsnXFx1MDcxYicsICdcXHUwMzMwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyddJywgJ1xcdTA3MzInXSxcclxuICAgICAgICBbJ1snLCAnXFx1MDczNScsICdcXHUwNjUyJywgJ1xcdTA2NTInXSxcclxuICAgICAgICBbJ1xcdTA3MjQnLCAnXFx1MDczOCddLFxyXG4gICAgICAgIFsnXFx1MDcyYScsICdcXHUwNzNjJywgJ1xcdTIwMEQnXSxcclxuICAgICAgICBbJ1xcdTA3MjcnLCAnXFx1MDczZicsICdcXHUyMDBDJ10sXHJcbiAgICAgICAgWydcXHUwNzAwJywgJ1xcdTA3MzknLCAnXFx1MjAwRSddLFxyXG4gICAgICAgIFsnLicsICdcXHUwNzQyJywgJ1xcdTIwMEYnXSxcclxuICAgICAgICBbJ1xcdTA3MTgnLCAnXFx1MDYwYyddLFxyXG4gICAgICAgIFsnXFx1MDcxOScsICdcXHUwNjFiJ10sXHJcbiAgICAgICAgWydcXHUwNzA3JywgJ1xcdTA2MUYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHciwgS2V5Ym9hcmRDbGFzc0tleS5BbHRHcl1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydzeWMnXVxyXG4gIH0sXHJcbiAgJ1xcdTBiYTRcXHUwYmFlXFx1MGJiZlxcdTBiYjRcXHUwYmNkJzoge1xyXG4gICAgJ25hbWUnOiAnVGFtaWwnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTBCQ0EnLCAnXFx1MEI5MiddLFxyXG4gICAgICAgIFsnMScsICcnLCAnXFx1MEJFNyddLFxyXG4gICAgICAgIFsnMicsICcnLCAnXFx1MEJFOCddLFxyXG4gICAgICAgIFsnMycsICcnLCAnXFx1MEJFOSddLFxyXG4gICAgICAgIFsnNCcsICcnLCAnXFx1MEJFQSddLFxyXG4gICAgICAgIFsnNScsICcnLCAnXFx1MEJFQiddLFxyXG4gICAgICAgIFsnNicsICdcXHUwQkE0XFx1MEJDRFxcdTBCQjAnLCAnXFx1MEJFQyddLFxyXG4gICAgICAgIFsnNycsICdcXHUwQjk1XFx1MEJDRFxcdTBCQjcnLCAnXFx1MEJFRCddLFxyXG4gICAgICAgIFsnOCcsICdcXHUwQkI3XFx1MEJDRFxcdTBCQjAnLCAnXFx1MEJFRSddLFxyXG4gICAgICAgIFsnOScsICcnLCAnXFx1MEJFRiddLFxyXG4gICAgICAgIFsnMCcsICcnLCAnXFx1MEJGMCddLFxyXG4gICAgICAgIFsnLScsICdcXHUwQjgzJywgJ1xcdTBCRjEnXSxcclxuICAgICAgICBbJycsICcnLCAnXFx1MEJGMiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MEJDQycsICdcXHUwQjk0J10sXHJcbiAgICAgICAgWydcXHUwQkM4JywgJ1xcdTBCOTAnXSxcclxuICAgICAgICBbJ1xcdTBCQkUnLCAnXFx1MEI4NiddLFxyXG4gICAgICAgIFsnXFx1MEJDMCcsICdcXHUwQjg4J10sXHJcbiAgICAgICAgWydcXHUwQkMyJywgJ1xcdTBCOEEnXSxcclxuICAgICAgICBbJ1xcdTBCQUEnLCAnXFx1MEJBQSddLFxyXG4gICAgICAgIFsnXFx1MEJCOScsICdcXHUwQjk5J10sXHJcbiAgICAgICAgWydcXHUwQjk1JywgJ1xcdTBCOTUnXSxcclxuICAgICAgICBbJ1xcdTBCQTQnLCAnXFx1MEJBNCddLFxyXG4gICAgICAgIFsnXFx1MEI5QycsICdcXHUwQjlBJ10sXHJcbiAgICAgICAgWydcXHUwQjlGJywgJ1xcdTBCOUYnXSxcclxuICAgICAgICBbJ1xcdTBCOUUnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwQkNCJywgJ1xcdTBCOTMnXSxcclxuICAgICAgICBbJ1xcdTBCQzcnLCAnXFx1MEI4RiddLFxyXG4gICAgICAgIFsnXFx1MEJDRCcsICdcXHUwQjg1J10sXHJcbiAgICAgICAgWydcXHUwQkJGJywgJ1xcdTBCODcnXSxcclxuICAgICAgICBbJ1xcdTBCQzEnLCAnXFx1MEI4OSddLFxyXG4gICAgICAgIFsnXFx1MEJBQScsICdcXHUwQkFBJ10sXHJcbiAgICAgICAgWydcXHUwQkIwJywgJ1xcdTBCQjEnXSxcclxuICAgICAgICBbJ1xcdTBCOTUnLCAnXFx1MEI5NSddLFxyXG4gICAgICAgIFsnXFx1MEJBNCcsICdcXHUwQkE0J10sXHJcbiAgICAgICAgWydcXHUwQjlBJywgJ1xcdTBCOUEnXSxcclxuICAgICAgICBbJ1xcdTBCOUYnLCAnXFx1MEI5RiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MEJDNicsICdcXHUwQjhFJ10sXHJcbiAgICAgICAgWycnXSxcclxuICAgICAgICBbJ1xcdTBCQUUnLCAnXFx1MEJBMyddLFxyXG4gICAgICAgIFsnXFx1MEJBOCcsICdcXHUwQkE5J10sXHJcbiAgICAgICAgWydcXHUwQkI1JywgJ1xcdTBCQjQnXSxcclxuICAgICAgICBbJ1xcdTBCQjInLCAnXFx1MEJCMyddLFxyXG4gICAgICAgIFsnXFx1MEJCOCcsICdcXHUwQkI3J10sXHJcbiAgICAgICAgWycsJywgJ1xcdTBCQjcnXSxcclxuICAgICAgICBbJy4nLCAnXFx1MEJCOFxcdTBCQ0RcXHUwQkIwXFx1MEJDMCddLFxyXG4gICAgICAgIFsnXFx1MEJBRicsICdcXHUwQkFGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsndGEnXVxyXG4gIH0sXHJcbiAgJ1xcdTBjMjRcXHUwYzQ2XFx1MGMzMlxcdTBjNDFcXHUwYzE3XFx1MGM0MSc6IHtcclxuICAgICduYW1lJzogJ1RlbHVndScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnXFx1MEM0QScsICdcXHUwQzEyJ10sXHJcbiAgICAgICAgWycxJywgJycsICdcXHUwQzY3J10sXHJcbiAgICAgICAgWycyJywgJycsICdcXHUwQzY4J10sXHJcbiAgICAgICAgWyczJywgJ1xcdTBDNERcXHUwQzMwJywgJ1xcdTBDNjknXSxcclxuICAgICAgICBbJzQnLCAnJywgJ1xcdTBDNkEnXSxcclxuICAgICAgICBbJzUnLCAnXFx1MEMxQ1xcdTBDNERcXHUwQzFFJywgJ1xcdTBDNkInXSxcclxuICAgICAgICBbJzYnLCAnXFx1MEMyNFxcdTBDNERcXHUwQzMwJywgJ1xcdTBDNkMnXSxcclxuICAgICAgICBbJzcnLCAnXFx1MEMxNVxcdTBDNERcXHUwQzM3JywgJ1xcdTBDNkQnXSxcclxuICAgICAgICBbJzgnLCAnXFx1MEMzNlxcdTBDNERcXHUwQzMwJywgJ1xcdTBDNkUnXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwQzZGJ10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MEM2NiddLFxyXG4gICAgICAgIFsnLScsICdcXHUwQzAzJ10sXHJcbiAgICAgICAgWydcXHUwQzQzJywgJ1xcdTBDMEInLCAnXFx1MEM0NCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsnXFx1MEM0QycsICdcXHUwQzE0J10sXHJcbiAgICAgICAgWydcXHUwQzQ4JywgJ1xcdTBDMTAnLCAnXFx1MEM1NiddLFxyXG4gICAgICAgIFsnXFx1MEMzRScsICdcXHUwQzA2J10sXHJcbiAgICAgICAgWydcXHUwQzQwJywgJ1xcdTBDMDgnLCAnJywgJ1xcdTBDNjEnXSxcclxuICAgICAgICBbJ1xcdTBDNDInLCAnXFx1MEMwQSddLFxyXG4gICAgICAgIFsnXFx1MEMyQyddLFxyXG4gICAgICAgIFsnXFx1MEMzOScsICdcXHUwQzE5J10sXHJcbiAgICAgICAgWydcXHUwQzE3JywgJ1xcdTBDMTgnXSxcclxuICAgICAgICBbJ1xcdTBDMjYnLCAnXFx1MEMyNyddLFxyXG4gICAgICAgIFsnXFx1MEMxQycsICdcXHUwQzFEJ10sXHJcbiAgICAgICAgWydcXHUwQzIxJywgJ1xcdTBDMjInXSxcclxuICAgICAgICBbJycsICdcXHUwQzFFJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MEM0QicsICdcXHUwQzEzJ10sXHJcbiAgICAgICAgWydcXHUwQzQ3JywgJ1xcdTBDMEYnLCAnXFx1MEM1NSddLFxyXG4gICAgICAgIFsnXFx1MEM0RCcsICdcXHUwQzA1J10sXHJcbiAgICAgICAgWydcXHUwQzNGJywgJ1xcdTBDMDcnLCAnJywgJ1xcdTBDMEMnXSxcclxuICAgICAgICBbJ1xcdTBDNDEnLCAnXFx1MEMwOSddLFxyXG4gICAgICAgIFsnXFx1MEMyQScsICdcXHUwQzJCJ10sXHJcbiAgICAgICAgWydcXHUwQzMwJywgJ1xcdTBDMzEnXSxcclxuICAgICAgICBbJ1xcdTBDMTUnLCAnXFx1MEMxNiddLFxyXG4gICAgICAgIFsnXFx1MEMyNCcsICdcXHUwQzI1J10sXHJcbiAgICAgICAgWydcXHUwQzFBJywgJ1xcdTBDMUInXSxcclxuICAgICAgICBbJ1xcdTBDMUYnLCAnXFx1MEMyNSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MEM0NicsICdcXHUwQzBFJ10sXHJcbiAgICAgICAgWydcXHUwQzAyJywgJ1xcdTBDMDEnXSxcclxuICAgICAgICBbJ1xcdTBDMkUnLCAnXFx1MEMyMyddLFxyXG4gICAgICAgIFsnXFx1MEMyOCcsICdcXHUwQzI4J10sXHJcbiAgICAgICAgWydcXHUwQzM1J10sXHJcbiAgICAgICAgWydcXHUwQzMyJywgJ1xcdTBDMzMnXSxcclxuICAgICAgICBbJ1xcdTBDMzgnLCAnXFx1MEMzNiddLFxyXG4gICAgICAgIFsnLCcsICdcXHUwQzM3J10sXHJcbiAgICAgICAgWycuJ10sXHJcbiAgICAgICAgWydcXHUwQzJGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsndGUnXVxyXG4gIH0sXHJcbiAgJ1RpXFx1MWViZm5nIFZpXFx1MWVjN3QnOiB7XHJcbiAgICAnbmFtZSc6ICdWaWV0bmFtZXNlJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ34nLCAnYCcsICd+J10sXHJcbiAgICAgICAgWydcXHUwMTAzJywgJ1xcdTAxMDInLCAnMScsICchJ10sXHJcbiAgICAgICAgWydcXHUwMEUyJywgJ1xcdTAwQzInLCAnMicsICdAJ10sXHJcbiAgICAgICAgWydcXHUwMEVBJywgJ1xcdTAwQ0EnLCAnMycsICcjJ10sXHJcbiAgICAgICAgWydcXHUwMEY0JywgJ1xcdTAwRDQnLCAnNCcsICckJ10sXHJcbiAgICAgICAgWydcXHUwMzAwJywgJ1xcdTAzMDAnLCAnNScsICclJ10sXHJcbiAgICAgICAgWydcXHUwMzA5JywgJ1xcdTAzMDknLCAnNicsICdeJ10sXHJcbiAgICAgICAgWydcXHUwMzAzJywgJ1xcdTAzMDMnLCAnNycsICcmJ10sXHJcbiAgICAgICAgWydcXHUwMzAxJywgJ1xcdTAzMDEnLCAnOCcsICcqJ10sXHJcbiAgICAgICAgWydcXHUwMzIzJywgJ1xcdTAzMjMnLCAnOScsICcoJ10sXHJcbiAgICAgICAgWydcXHUwMTExJywgJ1xcdTAxMTAnLCAnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnLScsICdfJ10sXHJcbiAgICAgICAgWydcXHUyMEFCJywgJysnLCAnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnLCAncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnLCAndycsICdXJ10sXHJcbiAgICAgICAgWydlJywgJ0UnLCAnZScsICdFJ10sXHJcbiAgICAgICAgWydyJywgJ1InLCAncicsICdSJ10sXHJcbiAgICAgICAgWyd0JywgJ1QnLCAndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knLCAneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnLCAndScsICdVJ10sXHJcbiAgICAgICAgWydpJywgJ0knLCAnaScsICdJJ10sXHJcbiAgICAgICAgWydvJywgJ08nLCAnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnLCAncCcsICdQJ10sXHJcbiAgICAgICAgWydcXHUwMUIwJywgJ1xcdTAxQUYnLCAnWycsICd7J10sXHJcbiAgICAgICAgWydcXHUwMUExJywgJ1xcdTAxQTAnLCAnXScsICd9J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnLCAnXFxcXCcsICd8J11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnYScsICdBJywgJ2EnLCAnQSddLFxyXG4gICAgICAgIFsncycsICdTJywgJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJywgJ2QnLCAnRCddLFxyXG4gICAgICAgIFsnZicsICdGJywgJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJywgJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJywgJ2gnLCAnSCddLFxyXG4gICAgICAgIFsnaicsICdKJywgJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJywgJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJywgJ2wnLCAnTCddLFxyXG4gICAgICAgIFsnOycsICc6JywgJzsnLCAnOiddLFxyXG4gICAgICAgIFsnXFwnJywgJ1wiJywgJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsneicsICdaJywgJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJywgJ3gnLCAnWCddLFxyXG4gICAgICAgIFsnYycsICdDJywgJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJywgJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJywgJ2InLCAnQiddLFxyXG4gICAgICAgIFsnbicsICdOJywgJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJywgJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc8JywgJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+JywgJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/JywgJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3ZpJ11cclxuICB9LFxyXG4gICdcXHUwZTQ0XFx1MGUxN1xcdTBlMjIgS2VkbWFuZWUnOiB7XHJcbiAgICAnbmFtZSc6ICdUaGFpIEtlZG1hbmVlJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydfJywgJyUnXSxcclxuICAgICAgICBbJ1xcdTBFNDUnLCAnKyddLFxyXG4gICAgICAgIFsnLycsICdcXHUwRTUxJ10sXHJcbiAgICAgICAgWyctJywgJ1xcdTBFNTInXSxcclxuICAgICAgICBbJ1xcdTBFMjAnLCAnXFx1MEU1MyddLFxyXG4gICAgICAgIFsnXFx1MEUxNicsICdcXHUwRTU0J10sXHJcbiAgICAgICAgWydcXHUwRTM4JywgJ1xcdTBFMzknXSxcclxuICAgICAgICBbJ1xcdTBFMzYnLCAnXFx1MEUzRiddLFxyXG4gICAgICAgIFsnXFx1MEUwNCcsICdcXHUwRTU1J10sXHJcbiAgICAgICAgWydcXHUwRTE1JywgJ1xcdTBFNTYnXSxcclxuICAgICAgICBbJ1xcdTBFMDgnLCAnXFx1MEU1NyddLFxyXG4gICAgICAgIFsnXFx1MEUwMicsICdcXHUwRTU4J10sXHJcbiAgICAgICAgWydcXHUwRTBBJywgJ1xcdTBFNTknXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTBFNDYnLCAnXFx1MEU1MCddLFxyXG4gICAgICAgIFsnXFx1MEU0NCcsICdcIiddLFxyXG4gICAgICAgIFsnXFx1MEUzMycsICdcXHUwRTBFJ10sXHJcbiAgICAgICAgWydcXHUwRTFFJywgJ1xcdTBFMTEnXSxcclxuICAgICAgICBbJ1xcdTBFMzAnLCAnXFx1MEUxOCddLFxyXG4gICAgICAgIFsnXFx1MEUzMScsICdcXHUwRTREJ10sXHJcbiAgICAgICAgWydcXHUwRTM1JywgJ1xcdTBFNEEnXSxcclxuICAgICAgICBbJ1xcdTBFMjMnLCAnXFx1MEUxMyddLFxyXG4gICAgICAgIFsnXFx1MEUxOScsICdcXHUwRTJGJ10sXHJcbiAgICAgICAgWydcXHUwRTIyJywgJ1xcdTBFMEQnXSxcclxuICAgICAgICBbJ1xcdTBFMUEnLCAnXFx1MEUxMCddLFxyXG4gICAgICAgIFsnXFx1MEUyNScsICcsJ10sXHJcbiAgICAgICAgWydcXHUwRTAzJywgJ1xcdTBFMDUnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwRTFGJywgJ1xcdTBFMjQnXSxcclxuICAgICAgICBbJ1xcdTBFMkInLCAnXFx1MEUwNiddLFxyXG4gICAgICAgIFsnXFx1MEUwMScsICdcXHUwRTBGJ10sXHJcbiAgICAgICAgWydcXHUwRTE0JywgJ1xcdTBFNDInXSxcclxuICAgICAgICBbJ1xcdTBFNDAnLCAnXFx1MEUwQyddLFxyXG4gICAgICAgIFsnXFx1MEU0OScsICdcXHUwRTQ3J10sXHJcbiAgICAgICAgWydcXHUwRTQ4JywgJ1xcdTBFNEInXSxcclxuICAgICAgICBbJ1xcdTBFMzInLCAnXFx1MEUyOSddLFxyXG4gICAgICAgIFsnXFx1MEUyQScsICdcXHUwRTI4J10sXHJcbiAgICAgICAgWydcXHUwRTI3JywgJ1xcdTBFMEInXSxcclxuICAgICAgICBbJ1xcdTBFMDcnLCAnLiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MEUxQycsICcoJ10sXHJcbiAgICAgICAgWydcXHUwRTFCJywgJyknXSxcclxuICAgICAgICBbJ1xcdTBFNDEnLCAnXFx1MEUwOSddLFxyXG4gICAgICAgIFsnXFx1MEUyRCcsICdcXHUwRTJFJ10sXHJcbiAgICAgICAgWydcXHUwRTM0JywgJ1xcdTBFM0EnXSxcclxuICAgICAgICBbJ1xcdTBFMzcnLCAnXFx1MEU0QyddLFxyXG4gICAgICAgIFsnXFx1MEUxNycsICc/J10sXHJcbiAgICAgICAgWydcXHUwRTIxJywgJ1xcdTBFMTInXSxcclxuICAgICAgICBbJ1xcdTBFNDMnLCAnXFx1MEUyQyddLFxyXG4gICAgICAgIFsnXFx1MEUxRCcsICdcXHUwRTI2J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWyd0aCddXHJcbiAgfSxcclxuICAnXFx1MGU0NFxcdTBlMTdcXHUwZTIyIFBhdHRhY2hvdGUnOiB7XHJcbiAgICAnbmFtZSc6ICdUaGFpIFBhdHRhY2hvdGUnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ18nLCAnXFx1MEUzRiddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgWydcXHUwRTUyJywgJ1wiJ10sXHJcbiAgICAgICAgWydcXHUwRTUzJywgJy8nXSxcclxuICAgICAgICBbJ1xcdTBFNTQnLCAnLCddLFxyXG4gICAgICAgIFsnXFx1MEU1NScsICc/J10sXHJcbiAgICAgICAgWydcXHUwRTM5JywgJ1xcdTBFMzgnXSxcclxuICAgICAgICBbJ1xcdTBFNTcnLCAnXyddLFxyXG4gICAgICAgIFsnXFx1MEU1OCcsICcuJ10sXHJcbiAgICAgICAgWydcXHUwRTU5JywgJygnXSxcclxuICAgICAgICBbJ1xcdTBFNTAnLCAnKSddLFxyXG4gICAgICAgIFsnXFx1MEU1MScsICctJ10sXHJcbiAgICAgICAgWydcXHUwRTU2JywgJyUnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTBFNDcnLCAnXFx1MEU0QSddLFxyXG4gICAgICAgIFsnXFx1MEUxNScsICdcXHUwRTI0J10sXHJcbiAgICAgICAgWydcXHUwRTIyJywgJ1xcdTBFNDYnXSxcclxuICAgICAgICBbJ1xcdTBFMkQnLCAnXFx1MEUwRCddLFxyXG4gICAgICAgIFsnXFx1MEUyMycsICdcXHUwRTI5J10sXHJcbiAgICAgICAgWydcXHUwRTQ4JywgJ1xcdTBFMzYnXSxcclxuICAgICAgICBbJ1xcdTBFMTQnLCAnXFx1MEUxRCddLFxyXG4gICAgICAgIFsnXFx1MEUyMScsICdcXHUwRTBCJ10sXHJcbiAgICAgICAgWydcXHUwRTI3JywgJ1xcdTBFMTYnXSxcclxuICAgICAgICBbJ1xcdTBFNDEnLCAnXFx1MEUxMiddLFxyXG4gICAgICAgIFsnXFx1MEU0MycsICdcXHUwRTJGJ10sXHJcbiAgICAgICAgWydcXHUwRTBDJywgJ1xcdTBFMjYnXSxcclxuICAgICAgICBbJ1xcdUY4QzcnLCAnXFx1MEU0RCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTBFNDknLCAnXFx1MEU0QiddLFxyXG4gICAgICAgIFsnXFx1MEUxNycsICdcXHUwRTE4J10sXHJcbiAgICAgICAgWydcXHUwRTA3JywgJ1xcdTBFMzMnXSxcclxuICAgICAgICBbJ1xcdTBFMDEnLCAnXFx1MEUxMyddLFxyXG4gICAgICAgIFsnXFx1MEUzMScsICdcXHUwRTRDJ10sXHJcbiAgICAgICAgWydcXHUwRTM1JywgJ1xcdTBFMzcnXSxcclxuICAgICAgICBbJ1xcdTBFMzInLCAnXFx1MEUxQyddLFxyXG4gICAgICAgIFsnXFx1MEUxOScsICdcXHUwRTBBJ10sXHJcbiAgICAgICAgWydcXHUwRTQwJywgJ1xcdTBFNDInXSxcclxuICAgICAgICBbJ1xcdTBFNDQnLCAnXFx1MEUwNiddLFxyXG4gICAgICAgIFsnXFx1MEUwMicsICdcXHUwRTExJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwRTFBJywgJ1xcdTBFMEUnXSxcclxuICAgICAgICBbJ1xcdTBFMUInLCAnXFx1MEUwRiddLFxyXG4gICAgICAgIFsnXFx1MEUyNScsICdcXHUwRTEwJ10sXHJcbiAgICAgICAgWydcXHUwRTJCJywgJ1xcdTBFMjAnXSxcclxuICAgICAgICBbJ1xcdTBFMzQnLCAnXFx1MEUzMSddLFxyXG4gICAgICAgIFsnXFx1MEUwNCcsICdcXHUwRTI4J10sXHJcbiAgICAgICAgWydcXHUwRTJBJywgJ1xcdTBFMkUnXSxcclxuICAgICAgICBbJ1xcdTBFMzAnLCAnXFx1MEUxRiddLFxyXG4gICAgICAgIFsnXFx1MEUwOCcsICdcXHUwRTA5J10sXHJcbiAgICAgICAgWydcXHUwRTFFJywgJ1xcdTBFMkMnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdXHJcbiAgfSxcclxuICAnXFx1MDQyMlxcdTA0MzBcXHUwNDQyXFx1MDQzMFxcdTA0NDBcXHUwNDQ3XFx1MDQzMCc6IHtcclxuICAgICduYW1lJzogJ1RhdGFyJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNEJCJywgJ1xcdTA0QkEnLCAnXFx1MDQ1MScsICdcXHUwNDAxJ10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnXCInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICdcXHUyMTE2JywgJyMnXSxcclxuICAgICAgICBbJzQnLCAnOycsICckJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnOiddLFxyXG4gICAgICAgIFsnNycsICc/JywgJ1snXSxcclxuICAgICAgICBbJzgnLCAnKicsICddJ10sXHJcbiAgICAgICAgWyc5JywgJygnLCAneyddLFxyXG4gICAgICAgIFsnMCcsICcpJywgJ30nXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcclxuICAgICAgICBbJ1xcdTA0RTknLCAnXFx1MDRFOCcsICdcXHUwNDQ2JywgJ1xcdTA0MjYnXSxcclxuICAgICAgICBbJ1xcdTA0NDMnLCAnXFx1MDQyMyddLFxyXG4gICAgICAgIFsnXFx1MDQzQScsICdcXHUwNDFBJ10sXHJcbiAgICAgICAgWydcXHUwNDM1JywgJ1xcdTA0MTUnXSxcclxuICAgICAgICBbJ1xcdTA0M0QnLCAnXFx1MDQxRCddLFxyXG4gICAgICAgIFsnXFx1MDQzMycsICdcXHUwNDEzJ10sXHJcbiAgICAgICAgWydcXHUwNDQ4JywgJ1xcdTA0MjgnXSxcclxuICAgICAgICBbJ1xcdTA0RDknLCAnXFx1MDREOCcsICdcXHUwNDQ5JywgJ1xcdTA0MjknXSxcclxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXHJcbiAgICAgICAgWydcXHUwNEFGJywgJ1xcdTA0QUUnLCAnXFx1MDQ0QScsICdcXHUwNDJBJ10sXHJcbiAgICAgICAgWydcXFxcJywgJy8nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcclxuICAgICAgICBbJ1xcdTA0NEInLCAnXFx1MDQyQiddLFxyXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXHJcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcclxuICAgICAgICBbJ1xcdTA0M0YnLCAnXFx1MDQxRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnXSxcclxuICAgICAgICBbJ1xcdTA0M0InLCAnXFx1MDQxQiddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNEEzJywgJ1xcdTA0QTInLCAnXFx1MDQzNicsICdcXHUwNDE2J10sXHJcbiAgICAgICAgWydcXHUwNDREJywgJ1xcdTA0MkQnLCAnXFwnJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNDkxJywgJ1xcdTA0OTAnXSxcclxuICAgICAgICBbJ1xcdTA0NEYnLCAnXFx1MDQyRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0NycsICdcXHUwNDI3J10sXHJcbiAgICAgICAgWydcXHUwNDQxJywgJ1xcdTA0MjEnXSxcclxuICAgICAgICBbJ1xcdTA0M0MnLCAnXFx1MDQxQyddLFxyXG4gICAgICAgIFsnXFx1MDQzOCcsICdcXHUwNDE4J10sXHJcbiAgICAgICAgWydcXHUwNDQyJywgJ1xcdTA0MjInXSxcclxuICAgICAgICBbJ1xcdTA0OTcnLCAnXFx1MDQ5NicsICdcXHUwNDRDJywgJ1xcdTA0MkMnXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMScsICc8J10sXHJcbiAgICAgICAgWydcXHUwNDRFJywgJ1xcdTA0MkUnLCAnPiddLFxyXG4gICAgICAgIFsnLicsICcsJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsndHQnXVxyXG4gIH0sXHJcbiAgJ1RcXHUwMGZjcmtcXHUwMGU3ZSBGJzoge1xyXG4gICAgJ25hbWUnOiAnVHVya2lzaCBGJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWycrJywgJyonLCAnXFx1MDBhYyddLFxyXG4gICAgICAgIFsnMScsICchJywgJ1xcdTAwYjknLCAnXFx1MDBhMSddLFxyXG4gICAgICAgIFsnMicsICdcIicsICdcXHUwMGIyJ10sXHJcbiAgICAgICAgWyczJywgJ14nLCAnIycsICdcXHUwMGIzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDBiYycsICdcXHUwMGE0J10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDBiZCddLFxyXG4gICAgICAgIFsnNicsICcmJywgJ1xcdTAwYmUnXSxcclxuICAgICAgICBbJzcnLCAnXFwnJywgJ3snXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcclxuICAgICAgICBbJy8nLCAnPycsICdcXFxcJywgJ1xcdTAwYmYnXSxcclxuICAgICAgICBbJy0nLCAnXycsICd8J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydmJywgJ0YnLCAnQCddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydcXHUwMTFmJywgJ1xcdTAxMWUnXSxcclxuICAgICAgICBbJ1xcdTAxMzEnLCAnSScsICdcXHUwMGI2JywgJ1xcdTAwYWUnXSxcclxuICAgICAgICBbJ28nLCAnTyddLFxyXG4gICAgICAgIFsnZCcsICdEJywgJ1xcdTAwYTUnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsnbicsICdOJ10sXHJcbiAgICAgICAgWydoJywgJ0gnLCAnXFx1MDBmOCcsICdcXHUwMGQ4J10sXHJcbiAgICAgICAgWydwJywgJ1AnLCAnXFx1MDBhMyddLFxyXG4gICAgICAgIFsncScsICdRJywgJ1xcdTAwYTgnXSxcclxuICAgICAgICBbJ3cnLCAnVycsICd+J10sXHJcbiAgICAgICAgWyd4JywgJ1gnLCAnYCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ3UnLCAnVScsICdcXHUwMGU2JywgJ1xcdTAwYzYnXSxcclxuICAgICAgICBbJ2knLCAnXFx1MDEzMCcsICdcXHUwMGRmJywgJ1xcdTAwYTcnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWydhJywgJ0EnLCAnICcsICdcXHUwMGFhJ10sXHJcbiAgICAgICAgWydcXHUwMGZjJywgJ1xcdTAwZGMnXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydtJywgJ00nXSxcclxuICAgICAgICBbJ2wnLCAnTCddLFxyXG4gICAgICAgIFsneScsICdZJywgJ1xcdTAwYjQnXSxcclxuICAgICAgICBbJ1xcdTAxNWYnLCAnXFx1MDE1ZSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnPCcsICc+JywgJ3wnLCAnXFx1MDBhNiddLFxyXG4gICAgICAgIFsnaicsICdKJywgJ1xcdTAwYWInLCAnPCddLFxyXG4gICAgICAgIFsnXFx1MDBmNicsICdcXHUwMGQ2JywgJ1xcdTAwYmInLCAnPiddLFxyXG4gICAgICAgIFsndicsICdWJywgJ1xcdTAwYTInLCAnXFx1MDBhOSddLFxyXG4gICAgICAgIFsnYycsICdDJ10sXHJcbiAgICAgICAgWydcXHUwMGU3JywgJ1xcdTAwYzcnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsncycsICdTJywgJ1xcdTAwYjUnLCAnXFx1MDBiYSddLFxyXG4gICAgICAgIFsnYicsICdCJywgJ1xcdTAwZDcnXSxcclxuICAgICAgICBbJy4nLCAnOicsICdcXHUwMGY3J10sXHJcbiAgICAgICAgWycsJywgJzsnLCAnLSddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdXHJcbiAgfSxcclxuICAnVFxcdTAwZmNya1xcdTAwZTdlIFEnOiB7XHJcbiAgICAnbmFtZSc6ICdUdXJraXNoIFEnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1wiJywgJ1xcdTAwZTknLCAnPCddLFxyXG4gICAgICAgIFsnMScsICchJywgJz4nXSxcclxuICAgICAgICBbJzInLCAnXFwnJywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzMnLCAnXicsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJysnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTAwYmQnXSxcclxuICAgICAgICBbJzYnLCAnJiddLFxyXG4gICAgICAgIFsnNycsICcvJywgJ3snXSxcclxuICAgICAgICBbJzgnLCAnKCcsICdbJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXSddLFxyXG4gICAgICAgIFsnMCcsICc9JywgJ30nXSxcclxuICAgICAgICBbJyonLCAnPycsICdcXFxcJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnfCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ0AnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTIwYWMnXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVSddLFxyXG4gICAgICAgIFsnXFx1MDEzMScsICdJJywgJ2knLCAnXFx1MDEzMCddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1xcdTAxMWYnLCAnXFx1MDExZScsICdcXHUwMGE4J10sXHJcbiAgICAgICAgWydcXHUwMGZjJywgJ1xcdTAwZGMnLCAnfiddLFxyXG4gICAgICAgIFsnLCcsICc7JywgJ2AnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnLCAnXFx1MDBlNicsICdcXHUwMGM2J10sXHJcbiAgICAgICAgWydzJywgJ1MnLCAnXFx1MDBkZiddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWydcXHUwMTVmJywgJ1xcdTAxNWUnLCAnXFx1MDBiNCddLFxyXG4gICAgICAgIFsnaScsICdcXHUwMTMwJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyc8JywgJz4nLCAnfCddLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWydcXHUwMGY2JywgJ1xcdTAwZDYnXSxcclxuICAgICAgICBbJ1xcdTAwZTcnLCAnXFx1MDBjNyddLFxyXG4gICAgICAgIFsnLicsICc6J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3IsIEtleWJvYXJkQ2xhc3NLZXkuQWx0R3JdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsndHInXVxyXG4gIH0sXHJcbiAgJ1xcdTA0MjNcXHUwNDNhXFx1MDQ0MFxcdTA0MzBcXHUwNDU3XFx1MDQzZFxcdTA0NDFcXHUwNDRjXFx1MDQzYVxcdTA0MzAnOiB7XHJcbiAgICAnbmFtZSc6ICdVa3JhaW5pYW4nLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTAwYjQnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTIxMTYnXSxcclxuICAgICAgICBbJzQnLCAnOyddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJzonXSxcclxuICAgICAgICBbJzcnLCAnPyddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJygnXSxcclxuICAgICAgICBbJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA0MzknLCAnXFx1MDQxOSddLFxyXG4gICAgICAgIFsnXFx1MDQ0NicsICdcXHUwNDI2J10sXHJcbiAgICAgICAgWydcXHUwNDQzJywgJ1xcdTA0MjMnXSxcclxuICAgICAgICBbJ1xcdTA0M0EnLCAnXFx1MDQxQSddLFxyXG4gICAgICAgIFsnXFx1MDQzNScsICdcXHUwNDE1J10sXHJcbiAgICAgICAgWydcXHUwNDNEJywgJ1xcdTA0MUQnXSxcclxuICAgICAgICBbJ1xcdTA0MzMnLCAnXFx1MDQxMyddLFxyXG4gICAgICAgIFsnXFx1MDQ0OCcsICdcXHUwNDI4J10sXHJcbiAgICAgICAgWydcXHUwNDQ5JywgJ1xcdTA0MjknXSxcclxuICAgICAgICBbJ1xcdTA0MzcnLCAnXFx1MDQxNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0NScsICdcXHUwNDI1J10sXHJcbiAgICAgICAgWydcXHUwNDU3JywgJ1xcdTA0MDcnXSxcclxuICAgICAgICBbJ1xcdTA0OTEnLCAnXFx1MDQ5MCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTA0NDQnLCAnXFx1MDQyNCddLFxyXG4gICAgICAgIFsnXFx1MDQ1NicsICdcXHUwNDA2J10sXHJcbiAgICAgICAgWydcXHUwNDMyJywgJ1xcdTA0MTInXSxcclxuICAgICAgICBbJ1xcdTA0MzAnLCAnXFx1MDQxMCddLFxyXG4gICAgICAgIFsnXFx1MDQzRicsICdcXHUwNDFGJ10sXHJcbiAgICAgICAgWydcXHUwNDQwJywgJ1xcdTA0MjAnXSxcclxuICAgICAgICBbJ1xcdTA0M0UnLCAnXFx1MDQxRSddLFxyXG4gICAgICAgIFsnXFx1MDQzQicsICdcXHUwNDFCJ10sXHJcbiAgICAgICAgWydcXHUwNDM0JywgJ1xcdTA0MTQnXSxcclxuICAgICAgICBbJ1xcdTA0MzYnLCAnXFx1MDQxNiddLFxyXG4gICAgICAgIFsnXFx1MDQ1NCcsICdcXHUwNDA0J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUwNDRGJywgJ1xcdTA0MkYnXSxcclxuICAgICAgICBbJ1xcdTA0NDcnLCAnXFx1MDQyNyddLFxyXG4gICAgICAgIFsnXFx1MDQ0MScsICdcXHUwNDIxJ10sXHJcbiAgICAgICAgWydcXHUwNDNDJywgJ1xcdTA0MUMnXSxcclxuICAgICAgICBbJ1xcdTA0MzgnLCAnXFx1MDQxOCddLFxyXG4gICAgICAgIFsnXFx1MDQ0MicsICdcXHUwNDIyJ10sXHJcbiAgICAgICAgWydcXHUwNDRDJywgJ1xcdTA0MkMnXSxcclxuICAgICAgICBbJ1xcdTA0MzEnLCAnXFx1MDQxMSddLFxyXG4gICAgICAgIFsnXFx1MDQ0RScsICdcXHUwNDJFJ10sXHJcbiAgICAgICAgWycuJywgJywnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3VrJ11cclxuICB9LFxyXG4gICdVbml0ZWQgS2luZ2RvbSc6IHtcclxuICAgICduYW1lJzogJ1VuaXRlZCBLaW5nZG9tJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydgJywgJ1xcdTAwYWMnLCAnXFx1MDBhNiddLFxyXG4gICAgICAgIFsnMScsICchJ10sXHJcbiAgICAgICAgWycyJywgJ1wiJ10sXHJcbiAgICAgICAgWyczJywgJ1xcdTAwYTMnXSxcclxuICAgICAgICBbJzQnLCAnJCcsICdcXHUyMGFjJ10sXHJcbiAgICAgICAgWyc1JywgJyUnXSxcclxuICAgICAgICBbJzYnLCAnXiddLFxyXG4gICAgICAgIFsnNycsICcmJ10sXHJcbiAgICAgICAgWyc4JywgJyonXSxcclxuICAgICAgICBbJzknLCAnKCddLFxyXG4gICAgICAgIFsnMCcsICcpJ10sXHJcbiAgICAgICAgWyctJywgJ18nXSxcclxuICAgICAgICBbJz0nLCAnKyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJ10sXHJcbiAgICAgICAgWyd3JywgJ1cnXSxcclxuICAgICAgICBbJ2UnLCAnRScsICdcXHUwMGU5JywgJ1xcdTAwYzknXSxcclxuICAgICAgICBbJ3InLCAnUiddLFxyXG4gICAgICAgIFsndCcsICdUJ10sXHJcbiAgICAgICAgWyd5JywgJ1knXSxcclxuICAgICAgICBbJ3UnLCAnVScsICdcXHUwMGZhJywgJ1xcdTAwZGEnXSxcclxuICAgICAgICBbJ2knLCAnSScsICdcXHUwMGVkJywgJ1xcdTAwY2QnXSxcclxuICAgICAgICBbJ28nLCAnTycsICdcXHUwMGYzJywgJ1xcdTAwZDMnXSxcclxuICAgICAgICBbJ3AnLCAnUCddLFxyXG4gICAgICAgIFsnWycsICd7J10sXHJcbiAgICAgICAgWyddJywgJ30nXSxcclxuICAgICAgICBbJyMnLCAnfiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQScsICdcXHUwMGUxJywgJ1xcdTAwYzEnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdAJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXSxcclxuICAgICAgICBbJ3onLCAnWiddLFxyXG4gICAgICAgIFsneCcsICdYJ10sXHJcbiAgICAgICAgWydjJywgJ0MnXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nXSxcclxuICAgICAgICBbJ20nLCAnTSddLFxyXG4gICAgICAgIFsnLCcsICc8J10sXHJcbiAgICAgICAgWycuJywgJz4nXSxcclxuICAgICAgICBbJy8nLCAnPyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyLCBLZXlib2FyZENsYXNzS2V5LkFsdEdyXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ2VuLUdCJ11cclxuICB9LFxyXG4gICdcXHUwNjI3XFx1MDYzMVxcdTA2MmZcXHUwNjQ4Jzoge1xyXG4gICAgJ25hbWUnOiAnVXJkdScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnXFx1MDY2QSddLFxyXG4gICAgICAgIFsnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJ1xcdTA2RDYnXSxcclxuICAgICAgICBbJzgnLCAnXFx1MDY2RCddLFxyXG4gICAgICAgIFsnOScsICcpJ10sXHJcbiAgICAgICAgWycwJywgJygnXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNjM3JywgJ1xcdTA2MzgnXSxcclxuICAgICAgICBbJ1xcdTA2MzUnLCAnXFx1MDYzNiddLFxyXG4gICAgICAgIFsnXFx1MDZiZScsICdcXHUwNjMwJ10sXHJcbiAgICAgICAgWydcXHUwNjJmJywgJ1xcdTA2ODgnXSxcclxuICAgICAgICBbJ1xcdTA2NzknLCAnXFx1MDYyQiddLFxyXG4gICAgICAgIFsnXFx1MDY3ZScsICdcXHUwNjUxJ10sXHJcbiAgICAgICAgWydcXHUwNjJhJywgJ1xcdTA2QzMnXSxcclxuICAgICAgICBbJ1xcdTA2MjgnLCAnXFx1MDY0MCddLFxyXG4gICAgICAgIFsnXFx1MDYyYycsICdcXHUwNjg2J10sXHJcbiAgICAgICAgWydcXHUwNjJkJywgJ1xcdTA2MkUnXSxcclxuICAgICAgICBbJ10nLCAnfSddLFxyXG4gICAgICAgIFsnWycsICd7J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNjQ1JywgJ1xcdTA2OTgnXSxcclxuICAgICAgICBbJ1xcdTA2NDgnLCAnXFx1MDYzMiddLFxyXG4gICAgICAgIFsnXFx1MDYzMScsICdcXHUwNjkxJ10sXHJcbiAgICAgICAgWydcXHUwNjQ2JywgJ1xcdTA2QkEnXSxcclxuICAgICAgICBbJ1xcdTA2NDQnLCAnXFx1MDZDMiddLFxyXG4gICAgICAgIFsnXFx1MDZjMScsICdcXHUwNjIxJ10sXHJcbiAgICAgICAgWydcXHUwNjI3JywgJ1xcdTA2MjInXSxcclxuICAgICAgICBbJ1xcdTA2QTknLCAnXFx1MDZBRiddLFxyXG4gICAgICAgIFsnXFx1MDZDQycsICdcXHUwNjRBJ10sXHJcbiAgICAgICAgWydcXHUwNjFiJywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDY0MicsICdcXHUyMDBEJ10sXHJcbiAgICAgICAgWydcXHUwNjQxJywgJ1xcdTIwMEMnXSxcclxuICAgICAgICBbJ1xcdTA2RDInLCAnXFx1MDZEMyddLFxyXG4gICAgICAgIFsnXFx1MDYzMycsICdcXHUyMDBFJ10sXHJcbiAgICAgICAgWydcXHUwNjM0JywgJ1xcdTA2MjQnXSxcclxuICAgICAgICBbJ1xcdTA2M2EnLCAnXFx1MDYyNiddLFxyXG4gICAgICAgIFsnXFx1MDYzOScsICdcXHUyMDBGJ10sXHJcbiAgICAgICAgWydcXHUwNjBDJywgJz4nXSxcclxuICAgICAgICBbJ1xcdTA2RDQnLCAnPCddLFxyXG4gICAgICAgIFsnLycsICdcXHUwNjFGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWyd1ciddXHJcbiAgfSxcclxuICAnXFx1MDYyN1xcdTA2MzFcXHUwNjJmXFx1MDY0OCBQaG9uZXRpYyc6IHtcclxuICAgICduYW1lJzogJ1VyZHUgUGhvbmV0aWMnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ1xcdTA2NEQnLCAnXFx1MDY0QicsICd+J10sXHJcbiAgICAgICAgWydcXHUwNkYxJywgJzEnLCAnISddLFxyXG4gICAgICAgIFsnXFx1MDZGMicsICcyJywgJ0AnXSxcclxuICAgICAgICBbJ1xcdTA2RjMnLCAnMycsICcjJ10sXHJcbiAgICAgICAgWydcXHUwNkY0JywgJzQnLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MDZGNScsICc1JywgJ1xcdTA2NkEnXSxcclxuICAgICAgICBbJ1xcdTA2RjYnLCAnNicsICdeJ10sXHJcbiAgICAgICAgWydcXHUwNkY3JywgJzcnLCAnJiddLFxyXG4gICAgICAgIFsnXFx1MDZGOCcsICc4JywgJyonXSxcclxuICAgICAgICBbJ1xcdTA2RjknLCAnOScsICcoJ10sXHJcbiAgICAgICAgWydcXHUwNkYwJywgJzAnLCAnKSddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTA2NDInLCAnXFx1MDY1MiddLFxyXG4gICAgICAgIFsnXFx1MDY0OCcsICdcXHUwNjUxJywgJ1xcdTA2MDInXSxcclxuICAgICAgICBbJ1xcdTA2MzknLCAnXFx1MDY3MCcsICdcXHUwNjU2J10sXHJcbiAgICAgICAgWydcXHUwNjMxJywgJ1xcdTA2OTEnLCAnXFx1MDYxMyddLFxyXG4gICAgICAgIFsnXFx1MDYyQScsICdcXHUwNjc5JywgJ1xcdTA2MTQnXSxcclxuICAgICAgICBbJ1xcdTA2RDInLCAnXFx1MDY0RScsICdcXHUwNjAxJ10sXHJcbiAgICAgICAgWydcXHUwNjIxJywgJ1xcdTA2MjYnLCAnXFx1MDY1NCddLFxyXG4gICAgICAgIFsnXFx1MDZDQycsICdcXHUwNjUwJywgJ1xcdTA2MTEnXSxcclxuICAgICAgICBbJ1xcdTA2QzEnLCAnXFx1MDZDMyddLFxyXG4gICAgICAgIFsnXFx1MDY3RScsICdcXHUwNjRGJywgJ1xcdTA2NTcnXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNjI3JywgJ1xcdTA2MjInLCAnXFx1RkRGMiddLFxyXG4gICAgICAgIFsnXFx1MDYzMycsICdcXHUwNjM1JywgJ1xcdTA2MTAnXSxcclxuICAgICAgICBbJ1xcdTA2MkYnLCAnXFx1MDY4OCcsICdcXHVGREZBJ10sXHJcbiAgICAgICAgWydcXHUwNjQxJ10sXHJcbiAgICAgICAgWydcXHUwNkFGJywgJ1xcdTA2M0EnXSxcclxuICAgICAgICBbJ1xcdTA2MkQnLCAnXFx1MDZCRScsICdcXHUwNjEyJ10sXHJcbiAgICAgICAgWydcXHUwNjJDJywgJ1xcdTA2MzYnLCAnXFx1RkRGQiddLFxyXG4gICAgICAgIFsnXFx1MDZBOScsICdcXHUwNjJFJ10sXHJcbiAgICAgICAgWydcXHUwNjQ0J10sXHJcbiAgICAgICAgWydcXHUwNjFCJywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDYzMicsICdcXHUwNjMwJywgJ1xcdTA2MEYnXSxcclxuICAgICAgICBbJ1xcdTA2MzQnLCAnXFx1MDY5OCcsICdcXHUwNjBFJ10sXHJcbiAgICAgICAgWydcXHUwNjg2JywgJ1xcdTA2MkInLCAnXFx1MDYwMyddLFxyXG4gICAgICAgIFsnXFx1MDYzNycsICdcXHUwNjM4J10sXHJcbiAgICAgICAgWydcXHUwNjI4JywgJycsICdcXHVGREZEJ10sXHJcbiAgICAgICAgWydcXHUwNjQ2JywgJ1xcdTA2QkEnLCAnXFx1MDYwMCddLFxyXG4gICAgICAgIFsnXFx1MDY0NScsICdcXHUwNjU4J10sXHJcbiAgICAgICAgWydcXHUwNjBDJywgJycsICc8J10sXHJcbiAgICAgICAgWydcXHUwNkQ0JywgJ1xcdTA2NkInLCAnPiddLFxyXG4gICAgICAgIFsnLycsICdcXHUwNjFGJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxyXG4gICAgICBdXHJcbiAgICBdXHJcbiAgfSxcclxuICAnVVMgU3RhbmRhcmQnOiB7XHJcbiAgICAnbmFtZSc6ICdVUyBTdGFuZGFyZCcsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnYCcsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnXSxcclxuICAgICAgICBbJzInLCAnQCddLFxyXG4gICAgICAgIFsnMycsICcjJ10sXHJcbiAgICAgICAgWyc0JywgJyQnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICdeJ10sXHJcbiAgICAgICAgWyc3JywgJyYnXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJy0nLCAnXyddLFxyXG4gICAgICAgIFsnPScsICcrJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydxJywgJ1EnXSxcclxuICAgICAgICBbJ3cnLCAnVyddLFxyXG4gICAgICAgIFsnZScsICdFJ10sXHJcbiAgICAgICAgWydyJywgJ1InXSxcclxuICAgICAgICBbJ3QnLCAnVCddLFxyXG4gICAgICAgIFsneScsICdZJ10sXHJcbiAgICAgICAgWyd1JywgJ1UnXSxcclxuICAgICAgICBbJ2knLCAnSSddLFxyXG4gICAgICAgIFsnbycsICdPJ10sXHJcbiAgICAgICAgWydwJywgJ1AnXSxcclxuICAgICAgICBbJ1snLCAneyddLFxyXG4gICAgICAgIFsnXScsICd9J10sXHJcbiAgICAgICAgWydcXFxcJywgJ3wnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydhJywgJ0EnXSxcclxuICAgICAgICBbJ3MnLCAnUyddLFxyXG4gICAgICAgIFsnZCcsICdEJ10sXHJcbiAgICAgICAgWydmJywgJ0YnXSxcclxuICAgICAgICBbJ2cnLCAnRyddLFxyXG4gICAgICAgIFsnaCcsICdIJ10sXHJcbiAgICAgICAgWydqJywgJ0onXSxcclxuICAgICAgICBbJ2snLCAnSyddLFxyXG4gICAgICAgIFsnbCcsICdMJ10sXHJcbiAgICAgICAgWyc7JywgJzonXSxcclxuICAgICAgICBbJ1xcJycsICdcIiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsneicsICdaJ10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQyddLFxyXG4gICAgICAgIFsndicsICdWJ10sXHJcbiAgICAgICAgWydiJywgJ0InXSxcclxuICAgICAgICBbJ24nLCAnTiddLFxyXG4gICAgICAgIFsnbScsICdNJ10sXHJcbiAgICAgICAgWycsJywgJzwnXSxcclxuICAgICAgICBbJy4nLCAnPiddLFxyXG4gICAgICAgIFsnLycsICc/J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydlbi1VUyddXHJcbiAgfSxcclxuICAnVVMgSW50ZXJuYXRpb25hbCc6IHtcclxuICAgICduYW1lJzogJ1VTIEludGVybmF0aW9uYWwnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJ2AnLCAnfiddLFxyXG4gICAgICAgIFsnMScsICchJywgJ1xcdTAwYTEnLCAnXFx1MDBiOSddLFxyXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTAwYjInXSxcclxuICAgICAgICBbJzMnLCAnIycsICdcXHUwMGIzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDBhNCcsICdcXHUwMGEzJ10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MjBhYyddLFxyXG4gICAgICAgIFsnNicsICdeJywgJ1xcdTAwYmMnXSxcclxuICAgICAgICBbJzcnLCAnJicsICdcXHUwMGJkJ10sXHJcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDBiZSddLFxyXG4gICAgICAgIFsnOScsICcoJywgJ1xcdTIwMTgnXSxcclxuICAgICAgICBbJzAnLCAnKScsICdcXHUyMDE5J10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDBhNSddLFxyXG4gICAgICAgIFsnPScsICcrJywgJ1xcdTAwZDcnLCAnXFx1MDBmNyddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3BdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWJdLFxyXG4gICAgICAgIFsncScsICdRJywgJ1xcdTAwZTQnLCAnXFx1MDBjNCddLFxyXG4gICAgICAgIFsndycsICdXJywgJ1xcdTAwZTUnLCAnXFx1MDBjNSddLFxyXG4gICAgICAgIFsnZScsICdFJywgJ1xcdTAwZTknLCAnXFx1MDBjOSddLFxyXG4gICAgICAgIFsncicsICdSJywgJ1xcdTAwYWUnXSxcclxuICAgICAgICBbJ3QnLCAnVCcsICdcXHUwMGZlJywgJ1xcdTAwZGUnXSxcclxuICAgICAgICBbJ3knLCAnWScsICdcXHUwMGZjJywgJ1xcdTAwZGMnXSxcclxuICAgICAgICBbJ3UnLCAnVScsICdcXHUwMGZhJywgJ1xcdTAwZGEnXSxcclxuICAgICAgICBbJ2knLCAnSScsICdcXHUwMGVkJywgJ1xcdTAwY2QnXSxcclxuICAgICAgICBbJ28nLCAnTycsICdcXHUwMGYzJywgJ1xcdTAwZDMnXSxcclxuICAgICAgICBbJ3AnLCAnUCcsICdcXHUwMGY2JywgJ1xcdTAwZDYnXSxcclxuICAgICAgICBbJ1snLCAneycsICdcXHUwMGFiJ10sXHJcbiAgICAgICAgWyddJywgJ30nLCAnXFx1MDBiYiddLFxyXG4gICAgICAgIFsnXFxcXCcsICd8JywgJ1xcdTAwYWMnLCAnXFx1MDBhNiddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ2EnLCAnQScsICdcXHUwMGUxJywgJ1xcdTAwYzEnXSxcclxuICAgICAgICBbJ3MnLCAnUycsICdcXHUwMGRmJywgJ1xcdTAwYTcnXSxcclxuICAgICAgICBbJ2QnLCAnRCcsICdcXHUwMGYwJywgJ1xcdTAwZDAnXSxcclxuICAgICAgICBbJ2YnLCAnRiddLFxyXG4gICAgICAgIFsnZycsICdHJ10sXHJcbiAgICAgICAgWydoJywgJ0gnXSxcclxuICAgICAgICBbJ2onLCAnSiddLFxyXG4gICAgICAgIFsnaycsICdLJ10sXHJcbiAgICAgICAgWydsJywgJ0wnLCAnXFx1MDBmOCcsICdcXHUwMGQ4J10sXHJcbiAgICAgICAgWyc7JywgJzonLCAnXFx1MDBiNicsICdcXHUwMGIwJ10sXHJcbiAgICAgICAgWydcXCcnLCAnXCInLCAnXFx1MDBiNCcsICdcXHUwMGE4J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWyd6JywgJ1onLCAnXFx1MDBlNicsICdcXHUwMGM2J10sXHJcbiAgICAgICAgWyd4JywgJ1gnXSxcclxuICAgICAgICBbJ2MnLCAnQycsICdcXHUwMGE5JywgJ1xcdTAwYTInXSxcclxuICAgICAgICBbJ3YnLCAnViddLFxyXG4gICAgICAgIFsnYicsICdCJ10sXHJcbiAgICAgICAgWyduJywgJ04nLCAnXFx1MDBmMScsICdcXHUwMGQxJ10sXHJcbiAgICAgICAgWydtJywgJ00nLCAnXFx1MDBiNSddLFxyXG4gICAgICAgIFsnLCcsICc8JywgJ1xcdTAwZTcnLCAnXFx1MDBjNyddLFxyXG4gICAgICAgIFsnLicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nLCAnXFx1MDBiZiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2UsIEtleWJvYXJkQ2xhc3NLZXkuU3BhY2VdLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdF1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWydlbiddXHJcbiAgfSxcclxuICAnXFx1MDQwZVxcdTA0MzdcXHUwNDMxXFx1MDQzNVxcdTA0M2FcXHUwNDQ3XFx1MDQzMCc6IHtcclxuICAgICduYW1lJzogJ1V6YmVrIEN5cmlsbGljJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUwNDUxJywgJ1xcdTA0MDEnXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdcIiddLFxyXG4gICAgICAgIFsnMycsICdcXHUyMTE2J10sXHJcbiAgICAgICAgWyc0JywgJzsnXSxcclxuICAgICAgICBbJzUnLCAnJSddLFxyXG4gICAgICAgIFsnNicsICc6J10sXHJcbiAgICAgICAgWyc3JywgJz8nXSxcclxuICAgICAgICBbJzgnLCAnKiddLFxyXG4gICAgICAgIFsnOScsICcoJ10sXHJcbiAgICAgICAgWycwJywgJyknXSxcclxuICAgICAgICBbJ1xcdTA0OTMnLCAnXFx1MDQ5MiddLFxyXG4gICAgICAgIFsnXFx1MDRCMycsICdcXHUwNEIyJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWydcXHUwNDM5JywgJ1xcdTA0MTknXSxcclxuICAgICAgICBbJ1xcdTA0NDYnLCAnXFx1MDQyNiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MycsICdcXHUwNDIzJ10sXHJcbiAgICAgICAgWydcXHUwNDNBJywgJ1xcdTA0MUEnXSxcclxuICAgICAgICBbJ1xcdTA0MzUnLCAnXFx1MDQxNSddLFxyXG4gICAgICAgIFsnXFx1MDQzRCcsICdcXHUwNDFEJ10sXHJcbiAgICAgICAgWydcXHUwNDMzJywgJ1xcdTA0MTMnXSxcclxuICAgICAgICBbJ1xcdTA0NDgnLCAnXFx1MDQyOCddLFxyXG4gICAgICAgIFsnXFx1MDQ1RScsICdcXHUwNDBFJ10sXHJcbiAgICAgICAgWydcXHUwNDM3JywgJ1xcdTA0MTcnXSxcclxuICAgICAgICBbJ1xcdTA0NDUnLCAnXFx1MDQyNSddLFxyXG4gICAgICAgIFsnXFx1MDQ0QScsICdcXHUwNDJBJ10sXHJcbiAgICAgICAgWydcXFxcJywgJy8nXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNDQ0JywgJ1xcdTA0MjQnXSxcclxuICAgICAgICBbJ1xcdTA0OUInLCAnXFx1MDQ5QSddLFxyXG4gICAgICAgIFsnXFx1MDQzMicsICdcXHUwNDEyJ10sXHJcbiAgICAgICAgWydcXHUwNDMwJywgJ1xcdTA0MTAnXSxcclxuICAgICAgICBbJ1xcdTA0M0YnLCAnXFx1MDQxRiddLFxyXG4gICAgICAgIFsnXFx1MDQ0MCcsICdcXHUwNDIwJ10sXHJcbiAgICAgICAgWydcXHUwNDNFJywgJ1xcdTA0MUUnXSxcclxuICAgICAgICBbJ1xcdTA0M0InLCAnXFx1MDQxQiddLFxyXG4gICAgICAgIFsnXFx1MDQzNCcsICdcXHUwNDE0J10sXHJcbiAgICAgICAgWydcXHUwNDM2JywgJ1xcdTA0MTYnXSxcclxuICAgICAgICBbJ1xcdTA0NEQnLCAnXFx1MDQyRCddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDQ0RicsICdcXHUwNDJGJ10sXHJcbiAgICAgICAgWydcXHUwNDQ3JywgJ1xcdTA0MjcnXSxcclxuICAgICAgICBbJ1xcdTA0NDEnLCAnXFx1MDQyMSddLFxyXG4gICAgICAgIFsnXFx1MDQzQycsICdcXHUwNDFDJ10sXHJcbiAgICAgICAgWydcXHUwNDM4JywgJ1xcdTA0MTgnXSxcclxuICAgICAgICBbJ1xcdTA0NDInLCAnXFx1MDQyMiddLFxyXG4gICAgICAgIFsnXFx1MDQ0QycsICdcXHUwNDJDJ10sXHJcbiAgICAgICAgWydcXHUwNDMxJywgJ1xcdTA0MTEnXSxcclxuICAgICAgICBbJ1xcdTA0NEUnLCAnXFx1MDQyRSddLFxyXG4gICAgICAgIFsnLicsICcsJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV1cclxuICAgICAgXVxyXG4gICAgXSxcclxuICAgICdsYW5nJzogWyd1eiddXHJcbiAgfSxcclxuICAnXFx1MDVkOVxcdTA1ZDlcXHUwNWI0XFx1MDVkM1xcdTA1ZDlcXHUwNWU5JzogeyAvLyBmcm9tIGh0dHA6Ly93d3cueXYub3JnL3V5aXAvaGVieWlka2JkLnR4dCBodHRwOi8vdXlpcC5vcmcva2V5Ym9hcmRzLmh0bWxcclxuICAgICduYW1lJzogJ1lpZGRpc2gnLFxyXG4gICAgJ2tleXMnOiBbXHJcbiAgICAgIFtcclxuICAgICAgICBbJzsnLCAnficsICdcXHUwNUIwJ10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDVCMSddLFxyXG4gICAgICAgIFsnMicsICdAJywgJ1xcdTA1QjInXSxcclxuICAgICAgICBbJzMnLCAnIycsICdcXHUwNUIzJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDVCNCddLFxyXG4gICAgICAgIFsnNScsICclJywgJ1xcdTA1QjUnXSxcclxuICAgICAgICBbJzYnLCAnXicsICdcXHUwNUI2J10sXHJcbiAgICAgICAgWyc3JywgJyonLCAnXFx1MDVCNyddLFxyXG4gICAgICAgIFsnOCcsICcmJywgJ1xcdTA1QjgnXSxcclxuICAgICAgICBbJzknLCAnKCcsICdcXHUwNUMyJ10sXHJcbiAgICAgICAgWycwJywgJyknLCAnXFx1MDVDMSddLFxyXG4gICAgICAgIFsnLScsICdfJywgJ1xcdTA1QjknXSxcclxuICAgICAgICBbJz0nLCAnKycsICdcXHUwNUJDJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWycvJywgJ1xcdTIwMUYnLCAnXFx1MjAxRiddLFxyXG4gICAgICAgIFsnXFwnJywgJ1xcdTIwMUUnLCAnXFx1MjAxRSddLFxyXG4gICAgICAgIFsnXFx1MDVFNycsICdgJywgJ2AnXSxcclxuICAgICAgICBbJ1xcdTA1RTgnLCAnXFx1RkIyRicsICdcXHVGQjJGJ10sXHJcbiAgICAgICAgWydcXHUwNUQwJywgJ1xcdUZCMkUnLCAnXFx1RkIyRSddLFxyXG4gICAgICAgIFsnXFx1MDVEOCcsICdcXHUwNUYwJywgJ1xcdTA1RjAnXSxcclxuICAgICAgICBbJ1xcdTA1RDUnLCAnXFx1RkIzNScsICdcXHVGQjM1J10sXHJcbiAgICAgICAgWydcXHUwNURGJywgJ1xcdUZCNEInLCAnXFx1RkI0QiddLFxyXG4gICAgICAgIFsnXFx1MDVERCcsICdcXHVGQjRFJywgJ1xcdUZCNEUnXSxcclxuICAgICAgICBbJ1xcdTA1RTQnLCAnXFx1RkI0NCcsICdcXHVGQjQ0J10sXHJcbiAgICAgICAgWydbJywgJ3snLCAnXFx1MDVCRCddLFxyXG4gICAgICAgIFsnXScsICd9JywgJ1xcdTA1QkYnXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCcsICdcXHUwNUJCJ11cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHNdLFxyXG4gICAgICAgIFsnXFx1MDVFOScsICdcXHVGQjJBJywgJ1xcdUZCMkEnXSxcclxuICAgICAgICBbJ1xcdTA1RDMnLCAnXFx1RkIyQicsICdcXHVGQjJCJ10sXHJcbiAgICAgICAgWydcXHUwNUQyJ10sXHJcbiAgICAgICAgWydcXHUwNURCJywgJ1xcdUZCM0InLCAnXFx1RkIzQiddLFxyXG4gICAgICAgIFsnXFx1MDVFMicsICdcXHUwNUYxJywgJ1xcdTA1RjEnXSxcclxuICAgICAgICBbJ1xcdTA1RDknLCAnXFx1RkIxRCcsICdcXHVGQjFEJ10sXHJcbiAgICAgICAgWydcXHUwNUQ3JywgJ1xcdUZGMUYnLCAnXFx1RkYxRiddLFxyXG4gICAgICAgIFsnXFx1MDVEQycsICdcXHUwNUYyJywgJ1xcdTA1RjInXSxcclxuICAgICAgICBbJ1xcdTA1REEnXSxcclxuICAgICAgICBbJ1xcdTA1RTMnLCAnOicsICdcXHUwNUMzJ10sXHJcbiAgICAgICAgWycsJywgJ1wiJywgJ1xcdTA1QzAnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlciwgS2V5Ym9hcmRDbGFzc0tleS5FbnRlcl1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0LCBLZXlib2FyZENsYXNzS2V5LlNoaWZ0XSxcclxuICAgICAgICBbJ1xcdTA1RDYnLCAnXFx1MjI2MCcsICdcXHUyMjYwJ10sXHJcbiAgICAgICAgWydcXHUwNUUxJywgJ1xcdUZCNEMnLCAnXFx1RkI0QyddLFxyXG4gICAgICAgIFsnXFx1MDVEMScsICdcXHVGQjMxJywgJ1xcdUZCMzEnXSxcclxuICAgICAgICBbJ1xcdTA1RDQnLCAnXFx1MDVCRScsICdcXHUwNUJFJ10sXHJcbiAgICAgICAgWydcXHUwNUUwJywgJ1xcdTIwMTMnLCAnXFx1MjAxMyddLFxyXG4gICAgICAgIFsnXFx1MDVERScsICdcXHUyMDE0JywgJ1xcdTIwMTQnXSxcclxuICAgICAgICBbJ1xcdTA1RTYnLCAnXFx1RkI0QScsICdcXHVGQjRBJ10sXHJcbiAgICAgICAgWydcXHUwNUVBJywgJzwnLCAnXFx1MDVGMyddLFxyXG4gICAgICAgIFsnXFx1MDVFNScsICc+JywgJ1xcdTA1RjQnXSxcclxuICAgICAgICBbJy4nLCAnPycsICdcXHUyMEFBJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZSwgS2V5Ym9hcmRDbGFzc0tleS5TcGFjZV0sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0XVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3lpJ11cclxuICB9LFxyXG4gICdcXHUwNWQ5XFx1MDVkOVxcdTA1YjRcXHUwNWQzXFx1MDVkOVxcdTA1ZTkgXFx1MDVkY1xcdTA1ZTJcXHUwNWQxXFx1MDVkOCc6IHsgLy8gZnJvbSBodHRwOi8vamlkeXN6Lm5ldC9cclxuICAgICduYW1lJzogJ1lpZGRpc2ggKFlpZGlzaCBMZWJ0KScsXHJcbiAgICAna2V5cyc6IFtcclxuICAgICAgW1xyXG4gICAgICAgIFsnOycsICd+J10sXHJcbiAgICAgICAgWycxJywgJyEnLCAnXFx1MDVCMicsICdcXHUwNUIyJ10sXHJcbiAgICAgICAgWycyJywgJ0AnLCAnXFx1MDVCMycsICdcXHUwNUIzJ10sXHJcbiAgICAgICAgWyczJywgJyMnLCAnXFx1MDVCMScsICdcXHUwNUIxJ10sXHJcbiAgICAgICAgWyc0JywgJyQnLCAnXFx1MDVCNCcsICdcXHUwNUI0J10sXHJcbiAgICAgICAgWyc1JywgJyUnLCAnXFx1MDVCNScsICdcXHUwNUI1J10sXHJcbiAgICAgICAgWyc2JywgJ14nLCAnXFx1MDVCNycsICdcXHUwNUI3J10sXHJcbiAgICAgICAgWyc3JywgJyYnLCAnXFx1MDVCOCcsICdcXHUwNUI4J10sXHJcbiAgICAgICAgWyc4JywgJyonLCAnXFx1MDVCQicsICdcXHUwNUJCJ10sXHJcbiAgICAgICAgWyc5JywgJyknLCAnXFx1MDVCNicsICdcXHUwNUI2J10sXHJcbiAgICAgICAgWycwJywgJygnLCAnXFx1MDVCMCcsICdcXHUwNUIwJ10sXHJcbiAgICAgICAgWyctJywgJ18nLCAnXFx1MDVCRicsICdcXHUwNUJGJ10sXHJcbiAgICAgICAgWyc9JywgJysnLCAnXFx1MDVCOScsICdcXHUwNUI5J10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYl0sXHJcbiAgICAgICAgWycvJywgJycsICdcXHUwNUY0JywgJ1xcdTA1RjQnXSxcclxuICAgICAgICBbJ1xcJycsICcnLCAnXFx1MDVGMycsICdcXHUwNUYzJ10sXHJcbiAgICAgICAgWydcXHUwNUU3JywgJycsICdcXHUyMEFDJ10sXHJcbiAgICAgICAgWydcXHUwNUU4J10sXHJcbiAgICAgICAgWydcXHUwNUQwJywgJycsICdcXHUwNUQwXFx1MDVCNycsICdcXHVGQjJFJ10sXHJcbiAgICAgICAgWydcXHUwNUQ4JywgJycsICdcXHUwNUQwXFx1MDVCOCcsICdcXHVGQjJGJ10sXHJcbiAgICAgICAgWydcXHUwNUQ1JywgJ1xcdTA1RDVcXHUwNUI5JywgJ1xcdTA1RDVcXHUwNUJDJywgJ1xcdUZCMzUnXSxcclxuICAgICAgICBbJ1xcdTA1REYnLCAnJywgJ1xcdTA1RDVcXHUwNUQ1JywgJ1xcdTA1RjAnXSxcclxuICAgICAgICBbJ1xcdTA1REQnLCAnJywgJ1xcdTA1QkMnXSxcclxuICAgICAgICBbJ1xcdTA1RTQnLCAnJywgJ1xcdTA1RTRcXHUwNUJDJywgJ1xcdUZCNDQnXSxcclxuICAgICAgICBbJ10nLCAnfScsICdcXHUyMDFFJywgJ1xcdTIwMUQnXSxcclxuICAgICAgICBbJ1snLCAneycsICdcXHUyMDFBJywgJ1xcdTIwMTknXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCcsICdcXHUwNUJFJywgJ1xcdTA1QkUnXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2Fwc10sXHJcbiAgICAgICAgWydcXHUwNUU5JywgJ1xcdTA1RTlcXHUwNUMxJywgJ1xcdTA1RTlcXHUwNUMyJywgJ1xcdUZCMkInXSxcclxuICAgICAgICBbJ1xcdTA1RDMnLCAnJywgJ1xcdTIwQUEnXSxcclxuICAgICAgICBbJ1xcdTA1RDInLCAnXFx1MjAxRSddLFxyXG4gICAgICAgIFsnXFx1MDVEQicsICcnLCAnXFx1MDVEQlxcdTA1QkMnLCAnXFx1RkIzQiddLFxyXG4gICAgICAgIFsnXFx1MDVFMicsICcnLCAnJywgJ1xcdUZCMjAnXSxcclxuICAgICAgICBbJ1xcdTA1RDknLCAnJywgJ1xcdTA1RDlcXHUwNUI0JywgJ1xcdUZCMUQnXSxcclxuICAgICAgICBbJ1xcdTA1RDcnLCAnJywgJ1xcdTA1RjJcXHUwNUI3JywgJ1xcdUZCMUYnXSxcclxuICAgICAgICBbJ1xcdTA1REMnLCAnXFx1MDVEQ1xcdTA1QjknLCAnXFx1MDVENVxcdTA1RDknLCAnXFx1MDVGMSddLFxyXG4gICAgICAgIFsnXFx1MDVEQScsICcnLCAnJywgJ1xcdTA1RjInXSxcclxuICAgICAgICBbJ1xcdTA1RTMnLCAnOicsICdcXHUwNUU0XFx1MDVCRicsICdcXHVGQjRFJ10sXHJcbiAgICAgICAgWycsJywgJ1wiJywgJzsnLCAnXFx1MDVCMiddLFxyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyLCBLZXlib2FyZENsYXNzS2V5LkVudGVyXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnQsIEtleWJvYXJkQ2xhc3NLZXkuU2hpZnRdLFxyXG4gICAgICAgIFsnXFx1MDVENicsICcnLCAnXFx1MjAxMycsICdcXHUyMDEzJ10sXHJcbiAgICAgICAgWydcXHUwNUUxJywgJycsICdcXHUyMDE0JywgJ1xcdTIwMTQnXSxcclxuICAgICAgICBbJ1xcdTA1RDEnLCAnXFx1MDVEQ1xcdTA1QjknLCAnXFx1MDVEMVxcdTA1QkYnLCAnXFx1RkI0QyddLFxyXG4gICAgICAgIFsnXFx1MDVENCcsICcnLCAnXFx1MjAxRCcsICdcXHUyMDFDJ10sXHJcbiAgICAgICAgWydcXHUwNUUwJywgJycsICdcXHUwNTlDJywgJ1xcdTA1OUUnXSxcclxuICAgICAgICBbJ1xcdTA1REUnLCAnJywgJ1xcdTIwMTknLCAnXFx1MjAxOCddLFxyXG4gICAgICAgIFsnXFx1MDVFNicsICcnLCAnXFx1MDVFOVxcdTA1QzEnLCAnXFx1RkIyQSddLFxyXG4gICAgICAgIFsnXFx1MDVFQScsICc+JywgJ1xcdTA1RUFcXHUwNUJDJywgJ1xcdUZCNEEnXSxcclxuICAgICAgICBbJ1xcdTA1RTUnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc/JywgJ1xcdTIwMjYnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5BbHQsIEtleWJvYXJkQ2xhc3NLZXkuQWx0LCBLZXlib2FyZENsYXNzS2V5LkFsdCwgS2V5Ym9hcmRDbGFzc0tleS5BbHRdXHJcbiAgICAgIF1cclxuICAgIF0sXHJcbiAgICAnbGFuZyc6IFsneWknXVxyXG4gIH0sXHJcbiAgJ1xcdTRlMmRcXHU2NTg3XFx1NmNlOFxcdTk3ZjNcXHU3YjI2XFx1NTNmNyc6IHtcclxuICAgICduYW1lJzogJ0NoaW5lc2UgQm9wb21vZm8gSU1FJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUyMEFDJywgJ34nXSxcclxuICAgICAgICBbJ1xcdTMxMDUnLCAnISddLFxyXG4gICAgICAgIFsnXFx1MzEwOScsICdAJ10sXHJcbiAgICAgICAgWydcXHUwMkM3JywgJyMnXSxcclxuICAgICAgICBbJ1xcdTAyQ0InLCAnJCddLFxyXG4gICAgICAgIFsnXFx1MzExMycsICclJ10sXHJcbiAgICAgICAgWydcXHUwMkNBJywgJ14nXSxcclxuICAgICAgICBbJ1xcdTAyRDknLCAnJiddLFxyXG4gICAgICAgIFsnXFx1MzExQScsICcqJ10sXHJcbiAgICAgICAgWydcXHUzMTFFJywgJyknXSxcclxuICAgICAgICBbJ1xcdTMxMjInLCAnKCddLFxyXG4gICAgICAgIFsnXFx1MzEyNicsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTMxMDYnLCAncSddLFxyXG4gICAgICAgIFsnXFx1MzEwQScsICd3J10sXHJcbiAgICAgICAgWydcXHUzMTBEJywgJ2UnXSxcclxuICAgICAgICBbJ1xcdTMxMTAnLCAnciddLFxyXG4gICAgICAgIFsnXFx1MzExNCcsICd0J10sXHJcbiAgICAgICAgWydcXHUzMTE3JywgJ3knXSxcclxuICAgICAgICBbJ1xcdTMxMjcnLCAndSddLFxyXG4gICAgICAgIFsnXFx1MzExQicsICdpJ10sXHJcbiAgICAgICAgWydcXHUzMTFGJywgJ28nXSxcclxuICAgICAgICBbJ1xcdTMxMjMnLCAncCddLFxyXG4gICAgICAgIFsnWycsICd7J10sXHJcbiAgICAgICAgWyddJywgJ30nXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTMxMDcnLCAnYSddLFxyXG4gICAgICAgIFsnXFx1MzEwQicsICdzJ10sXHJcbiAgICAgICAgWydcXHUzMTBFJywgJ2QnXSxcclxuICAgICAgICBbJ1xcdTMxMTEnLCAnZiddLFxyXG4gICAgICAgIFsnXFx1MzExNScsICdnJ10sXHJcbiAgICAgICAgWydcXHUzMTE4JywgJ2gnXSxcclxuICAgICAgICBbJ1xcdTMxMjgnLCAnaiddLFxyXG4gICAgICAgIFsnXFx1MzExQycsICdrJ10sXHJcbiAgICAgICAgWydcXHUzMTIwJywgJ2wnXSxcclxuICAgICAgICBbJ1xcdTMxMjQnLCAnOiddLFxyXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHUzMTA4JywgJ3onXSxcclxuICAgICAgICBbJ1xcdTMxMEMnLCAneCddLFxyXG4gICAgICAgIFsnXFx1MzEwRicsICdjJ10sXHJcbiAgICAgICAgWydcXHUzMTEyJywgJ3YnXSxcclxuICAgICAgICBbJ1xcdTMxMTYnLCAnYiddLFxyXG4gICAgICAgIFsnXFx1MzExOScsICduJ10sXHJcbiAgICAgICAgWydcXHUzMTI5JywgJ20nXSxcclxuICAgICAgICBbJ1xcdTMxMUQnLCAnPCddLFxyXG4gICAgICAgIFsnXFx1MzEyMScsICc+J10sXHJcbiAgICAgICAgWydcXHUzMTI1JywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3poLUJPUE8nXVxyXG4gIH0sXHJcbiAgJ1xcdTRlMmRcXHU2NTg3XFx1NGVkM1xcdTk4ODlcXHU4ZjkzXFx1NTE2NVxcdTZjZDUnOiB7XHJcbiAgICAnbmFtZSc6ICdDaGluZXNlIENhbmdqaWUgSU1FJyxcclxuICAgICdrZXlzJzogW1xyXG4gICAgICBbXHJcbiAgICAgICAgWydcXHUyMEFDJywgJ34nXSxcclxuICAgICAgICBbJzEnLCAnISddLFxyXG4gICAgICAgIFsnMicsICdAJ10sXHJcbiAgICAgICAgWyczJywgJyMnXSxcclxuICAgICAgICBbJzQnLCAnJCddLFxyXG4gICAgICAgIFsnNScsICclJ10sXHJcbiAgICAgICAgWyc2JywgJ14nXSxcclxuICAgICAgICBbJzcnLCAnJiddLFxyXG4gICAgICAgIFsnOCcsICcqJ10sXHJcbiAgICAgICAgWyc5JywgJyknXSxcclxuICAgICAgICBbJzAnLCAnKCddLFxyXG4gICAgICAgIFsnLScsICdfJ10sXHJcbiAgICAgICAgWyc9JywgJysnXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5Ca3NwLCBLZXlib2FyZENsYXNzS2V5LkJrc3AsIEtleWJvYXJkQ2xhc3NLZXkuQmtzcCwgS2V5Ym9hcmRDbGFzc0tleS5Ca3NwXVxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuVGFiLCBLZXlib2FyZENsYXNzS2V5LlRhYiwgS2V5Ym9hcmRDbGFzc0tleS5UYWIsIEtleWJvYXJkQ2xhc3NLZXkuVGFiXSxcclxuICAgICAgICBbJ1xcdTYyNEInLCAncSddLFxyXG4gICAgICAgIFsnXFx1NzUzMCcsICd3J10sXHJcbiAgICAgICAgWydcXHU2QzM0JywgJ2UnXSxcclxuICAgICAgICBbJ1xcdTUzRTMnLCAnciddLFxyXG4gICAgICAgIFsnXFx1NUVGRicsICd0J10sXHJcbiAgICAgICAgWydcXHU1MzVDJywgJ3knXSxcclxuICAgICAgICBbJ1xcdTVDNzEnLCAndSddLFxyXG4gICAgICAgIFsnXFx1NjIwOCcsICdpJ10sXHJcbiAgICAgICAgWydcXHU0RUJBJywgJ28nXSxcclxuICAgICAgICBbJ1xcdTVGQzMnLCAncCddLFxyXG4gICAgICAgIFsnWycsICd7J10sXHJcbiAgICAgICAgWyddJywgJ30nXSxcclxuICAgICAgICBbJ1xcXFwnLCAnfCddXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5DYXBzLCBLZXlib2FyZENsYXNzS2V5LkNhcHMsIEtleWJvYXJkQ2xhc3NLZXkuQ2FwcywgS2V5Ym9hcmRDbGFzc0tleS5DYXBzXSxcclxuICAgICAgICBbJ1xcdTY1RTUnLCAnYSddLFxyXG4gICAgICAgIFsnXFx1NUMzOCcsICdzJ10sXHJcbiAgICAgICAgWydcXHU2NzI4JywgJ2QnXSxcclxuICAgICAgICBbJ1xcdTcwNkInLCAnZiddLFxyXG4gICAgICAgIFsnXFx1NTcxRicsICdnJ10sXHJcbiAgICAgICAgWydcXHU3QUY5JywgJ2gnXSxcclxuICAgICAgICBbJ1xcdTUzNDEnLCAnaiddLFxyXG4gICAgICAgIFsnXFx1NTkyNycsICdrJ10sXHJcbiAgICAgICAgWydcXHU0RTJEJywgJ2wnXSxcclxuICAgICAgICBbJzsnLCAnOiddLFxyXG4gICAgICAgIFsnXFwnJywgJ1wiJ10sXHJcbiAgICAgICAgW0tleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXIsIEtleWJvYXJkQ2xhc3NLZXkuRW50ZXJdXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF0sXHJcbiAgICAgICAgWydcXHVGRjNBJywgJ3onXSxcclxuICAgICAgICBbJ1xcdTk2RTMnLCAneCddLFxyXG4gICAgICAgIFsnXFx1OTFEMScsICdjJ10sXHJcbiAgICAgICAgWydcXHU1OTczJywgJ3YnXSxcclxuICAgICAgICBbJ1xcdTY3MDgnLCAnYiddLFxyXG4gICAgICAgIFsnXFx1NUYxMycsICduJ10sXHJcbiAgICAgICAgWydcXHU0RTAwJywgJ20nXSxcclxuICAgICAgICBbJywnLCAnPCddLFxyXG4gICAgICAgIFsnLicsICc+J10sXHJcbiAgICAgICAgWycvJywgJz8nXSxcclxuICAgICAgICBbS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdCwgS2V5Ym9hcmRDbGFzc0tleS5TaGlmdF1cclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIFtLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlLCBLZXlib2FyZENsYXNzS2V5LlNwYWNlXVxyXG4gICAgICBdXHJcbiAgICBdLFxyXG4gICAgJ2xhbmcnOiBbJ3poJ11cclxuICB9XHJcbn07XHJcblxyXG4vLyBhbGlhc2VzXHJcbmtleWJvYXJkTGF5b3V0c1snSHJ2YXRza2knXSA9IHtcclxuICAnbmFtZSc6ICdDcm9hdGlhbicsXHJcbiAgJ2tleXMnOiBrZXlib2FyZExheW91dHNbJ0Jvc2Fuc2tpJ10ua2V5cy5zbGljZSgwKSxcclxuICAnbGFuZyc6IFsnaHInXVxyXG59O1xyXG5cclxua2V5Ym9hcmRMYXlvdXRzWydTbG92ZW5cXHUwMTYxXFx1MDEwZGluYSddID0ge1xyXG4gICduYW1lJzogJ1Nsb3ZlbmlhbicsXHJcbiAgJ2tleXMnOiBrZXlib2FyZExheW91dHNbJ0Jvc2Fuc2tpJ10ua2V5cy5zbGljZSgwKSxcclxuICAnbGFuZyc6IFsnc2wnXVxyXG59O1xyXG5cclxua2V5Ym9hcmRMYXlvdXRzWydTcnBza2knXSA9IHtcclxuICAnbmFtZSc6ICdTZXJiaWFuIExhdGluJyxcclxuICAna2V5cyc6IGtleWJvYXJkTGF5b3V0c1snQm9zYW5za2knXS5rZXlzLnNsaWNlKDApLFxyXG4gICdsYW5nJzogWydzciddXHJcbn07XHJcblxyXG5leHBvcnQgeyBrZXlib2FyZExheW91dHMsIE1BVF9LRVlCT0FSRF9MQVlPVVRTIH07XHJcbiJdfQ==
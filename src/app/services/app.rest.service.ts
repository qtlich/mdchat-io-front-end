import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {MenuItem} from "primeng/api";
import {fromArrayLike} from "rxjs/internal/observable/innerFrom";
import { from } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class AppRestService
{

  private readonly _menuItems: MenuItem[] = [
    {
      "label": "Getting Started",
      "icon": "pi pi-home",
      "items": [
        {
          "label": "Installation",
          // "routerLink": "/installation"
        },
        {
          "label": "Configuration",
          // "routerLink": "/configuration"
        },
        {
          "label": "Accessibility",
          // "routerLink": "/accessibility"
        }
      ]
    },
    {
      "label": "Components",
      "icon": "pi pi-compass",
      "items": [
        {
          "label": "Form",
          "items": [
            {
              "label": "AutoComplete",
              // "routerLink": "/autocomplete"
            },
            {
              "label": "Calendar",
              // "routerLink": "/calendar"
            },
            {
              "label": "CascadeSelect",
              // "routerLink": "/cascadeselect"
            },
            {
              "label": "Checkbox",
              // "routerLink": "/checkbox"
            },
            {
              "label": "Chips",
              // "routerLink": "/chips"
            },
            {
              "label": "ColorPicker",
              // "routerLink": "/colorpicker"
            },
            {
              "label": "Dropdown",
              // "routerLink": "/dropdown"
            },
            {
              "label": "Editor",
              // "routerLink": "/editor"
            },
            {
              "label": "InputGroup",
              // "routerLink": "/inputgroup"
            },
            {
              "label": "InputMask",
              // "routerLink": "/inputmask"
            },
            {
              "label": "InputSwitch",
              // "routerLink": "/inputswitch"
            },
            {
              "label": "InputText",
              // "routerLink": "/inputtext"
            },
            {
              "label": "InputTextarea",
              // "routerLink": "/inputtextarea"
            },
            {
              "label": "InputNumber",
              // "routerLink": "/inputnumber"
            },
            {
              "label": "Knob",
              // "routerLink": "/knob"
            },
            {
              "label": "KeyFilter",
              // "routerLink": "/keyfilter"
            },
            {
              "label": "Listbox",
              // "routerLink": "/listbox"
            },
            {
              "label": "MultiSelect",
              // "routerLink": "/multiselect"
            },
            {
              "label": "Password",
              // "routerLink": "/password"
            },
            {
              "label": "RadioButton",
              // "routerLink": "/radiobutton"
            },
            {
              "label": "Rating",
              // "routerLink": "/rating"
            },
            {
              "label": "SelectButton",
              // "routerLink": "/selectbutton"
            },
            {
              "label": "Slider",
              // "routerLink": "/slider"
            },
            {
              "label": "TreeSelect",
              // "routerLink": "/treeselect"
            },
            {
              "label": "TriStateCheckbox",
              // "routerLink": "/tristatecheckbox"
            },
            {
              "label": "ToggleButton",
              // "routerLink": "/togglebutton"
            }
          ]
        },
        {
          "label": "Button",
          "items": [
            {
              "label": "Button",
              // "routerLink": "/button"
            },
            {
              "label": "SplitButton",
              // "routerLink": "/splitbutton"
            },
            {
              "label": "Speed Dial",
              // "routerLink": "/speeddial"
            }
          ]
        },
        {
          "label": "Data",
          "items": [
            {
              "label": "Table",
              // "routerLink": "/table"
            },
            {
              "label": "DataView",
              // "routerLink": "/dataview"
            },
            {
              "label": "Scroller",
              // "routerLink": "/scroller"
            },
            {
              "label": "OrderList",
              // "routerLink": "/orderlist"
            },
            {
              "label": "Org Chart",
              // "routerLink": "/organizationchart"
            },
            {
              "label": "Paginator",
              // "routerLink": "/paginator"
            },
            {
              "label": "PickList",
              // "routerLink": "/picklist"
            },
            {
              "label": "Tree",
              // "routerLink": "/tree"
            },
            {
              "label": "TreeTable",
              // "routerLink": "/treetable"
            },
            {
              "label": "Timeline",
              // "routerLink": "/timeline"
            },
            {
              "label": "VirtualScroller",
              // "routerLink": "/virtualscroller"
            }
          ]
        },
        {
          "label": "Panel",
          "items": [
            {
              "label": "Accordion",
              // "routerLink": "/accordion"
            },
            {
              "label": "Card",
              // "routerLink": "/card"
            },
            {
              "label": "Divider",
              // "routerLink": "/divider"
            },
            {
              "label": "Fieldset",
              // "routerLink": "/fieldset"
            },
            {
              "label": "Panel",
              // "routerLink": "/panel"
            },
            {
              "label": "Splitter",
              // "routerLink": "/splitter"
            },
            {
              "label": "ScrollPanel",
              // "routerLink": "/scrollpanel"
            },
            {
              "label": "TabView",
              // "routerLink": "/tabview"
            },
            {
              "label": "Toolbar",
              // "routerLink": "/toolbar"
            }
          ]
        },
        {
          "label": "Overlay",
          "items": [
            {
              "label": "ConfirmDialog",
              // "routerLink": "/confirmdialog"
            },
            {
              "label": "ConfirmPopup",
              // "routerLink": "/confirmpopup"
            },
            {
              "label": "Dialog",
              // "routerLink": "/dialog"
            },
            {
              "label": "DynamicDialog",
              // "routerLink": "/dynamicdialog"
            },
            {
              "label": "OverlayPanel",
              // "routerLink": "/overlaypanel"
            },
            {
              "label": "Sidebar",
              // "routerLink": "/sidebar"
            },
            {
              "label": "Tooltip",
              // "routerLink": "/tooltip"
            }
          ]
        },
        {
          "label": "File",
          "items": [
            {
              "label": "Upload",
              // "routerLink": "/fileupload"
            }
          ]
        },
        {
          "label": "Menu",
          "items": [
            {
              "label": "Breadcrumb",
              // "routerLink": "/breadcrumb"
            },
            {
              "label": "ContextMenu",
              // "routerLink": "/contextmenu"
            },
            {
              "label": "Dock",
              // "routerLink": "/dock"
            },
            {
              "label": "Menu",
              // "routerLink": "/menu"
            },

            {
              "label": "Menubar",
              // "routerLink": "/menubar"
            },
            {
              "label": "MegaMenu",
              // "routerLink": "/megamenu"
            },
            {
              "label": "PanelMenu",
              // "routerLink": "/panelmenu"
            },
            {
              "label": "Steps",
              // "routerLink": "/steps"
            },
            {
              "label": "TabMenu",
              // "routerLink": "/tabmenu"
            },
            {
              "label": "TieredMenu",
              // "routerLink": "/tieredmenu"
            }
          ]
        },
        {
          "label": "Chart",
          "items": [
            {
              "label": "Chart.js",
              // "routerLink": "/chart"
            }
          ]
        },
        {
          "label": "Messages",
          "items": [
            {
              "label": "Messages",
              // "routerLink": "/messages"
            },
            {
              "label": "Toast",
              // "routerLink": "/toast"
            }
          ]
        },
        {
          "label": "Media",
          "items": [
            {
              "label": "Carousel",
              // "routerLink": "/carousel"
            },
            {
              "label": "Galleria",
              // "routerLink": "/galleria"
            },
            {
              "label": "Image",
              // "routerLink": "/image"
            }
          ]
        },
        {
          "label": "DragDrop",
          "items": [
            {
              "label": "Drag & Drop",
              // "routerLink": "/dragdrop"
            }
          ]
        },
        {
          "label": "Misc",
          "items": [
            {
              "label": "Avatar",
              // "routerLink": "/avatar"
            },
            {
              "label": "Badge",
              // "routerLink": "/badge"
            },
            {
              "label": "BlockUI",
              // "routerLink": "/blockui"
            },
            {
              "label": "Chip",
              // "routerLink": "/chip"
            },
            {
              "label": "Inplace",
              // "routerLink": "/inplace"
            },
            {
              "label": "ScrollTop",
              // "routerLink": "/scrolltop"
            },
            {
              "label": "Skeleton",
              // "routerLink": "/skeleton"
            },
            {
              "label": "ProgressBar",
              // "routerLink": "/progressbar"
            },
            {
              "label": "ProgressSpinner",
              // "routerLink": "/progressspinner"
            },
            {
              "label": "Tag",
              // "routerLink": "/tag"
            },
            {
              "label": "Terminal",
              // "routerLink": "/terminal"
            }
          ]
        },
        {
          "label": "Directives",
          "items": [
            {
              "label": "Defer",
              // "routerLink": "/defer"
            },
            {
              "label": "FocusTrap",
              // "routerLink": "/focustrap"
            },
            {
              "label": "StyleClass",
              // "routerLink": "/styleclass"
            },
            {
              "label": "Ripple",
              // "routerLink": "/ripple"
            },
            {
              "label": "AutoFocus",
              // "routerLink": "/autofocus"
            },
            {
              "label": "AnimateOnScroll",
              // "routerLink": "/animateonscroll"
            }
          ]
        },
        {
          "label": "Utilities",
          "items": [
            {
              "label": "FilterService",
              // "routerLink": "/filterservice"
            }
          ]
        }
      ]
    },
    {
      "label": "Theming",
      "icon": "pi pi-palette",
      "items": [
        {
          "label": "Overview",
          // "routerLink": "/theming"
        },
        {
          "label": "Visual Editor",
          "href": "https://designer.primeng.org"
        },
        {
          "label": "Colors",
          // "routerLink": "/colors"
        },
        {
          "label": "SASS API",
          "href": "https://www.primefaces.org/designer/api/primeng/15.0.0"
        }
      ]
    },
    {
      "label": "Figma UI Kit",
      "icon": "pi pi-pencil",
      // "routerLink": "/uikit"
    },
    {
      "label": "Icons",
      "icon": "pi pi-eye",
      "items": [
        {
          "label": "Prime Icons",
          // "routerLink": "/icons"
        },
        {
          "label": "Custom Icons",
          // "routerLink": "/customicons"
        }
      ]
    },
    {
      "label": "Templates",
      "icon": "pi pi-star",
      // "routerLink": "/templates"
    },
    {
      "label": "PrimeBlocks",
      "icon": "pi pi-server",
      "href": "https://blocks.primeng.org"
    },
    {
      "label": "PrimeFlex CSS",
      "icon": "pi pi-table",
      "href": "https://primeflex.org"
    },
    {
      "label": "Support",
      "icon": "pi pi-question",
      "items": [
        {
          "label": "Discord Server",
          "href": "https://discord.gg/gzKFYnpmCY"
        },
        {
          "label": "Forum",
          "href": "https://github.com/orgs/primefaces/discussions"
        },
        {
          "label": "Long Term Support",
          // "routerLink": "/lts"
        },
        {
          "label": "PRO Support",
          // "routerLink": "/support"
        }
      ]
    },
    {
      "label": "PrimeTV",
      "icon": "pi pi-youtube",
      "href": "https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw"
    },
    {
      "label": "Discover",
      "icon": "pi pi-search",
      "items": [
        {
          "label": "About Us",
          "routerLink": "/team"
        },
        {
          "label": "Roadmap",
          "routerLink": "/roadmap"
        },
        {
          "label": "Source Code",
          "href": "https://github.com/primefaces/primeng"
        },
        {
          "label": "Changelog",
          "href": "https://github.com/primefaces/primeng/blob/master/CHANGELOG.md"
        },
        {
          "label": "Store",
          "href": "https://www.primefaces.org/store/"
        },
        {
          "label": "Twitter",
          "href": "https://twitter.com/prime_ng"
        },
        {
          "label": "Partners",
          "routerLink": "/partners"
        },
        {
          "label": "Newsletter",
          "href": "https://www.primefaces.org/newsletter"
        },
        {
          "label": "PrimeGear",
          "href": "https://gear.primefaces.org"
        }
      ]
    }
  ];

  constructor()
  {
  }
  // public onLoadMenuEvent():Observable<MenuItem[]>
  // {
  //   return this._menuItems;
  // }
  public getMenu(uid?:number): Observable<MenuItem[]>
  {
    return of(this._menuItems);
  }
}

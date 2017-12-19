module.exports = {

    /* region Common*/

    gFontPath: 'fonts',
    gFontFamilyName: 'OpenSans',
    gFontFamily: '$(gFontFamilyName), "Helvetica Neue", Helvetica, Arial, sans-serif',
    gFontSize: '13px',
    gBorderRadiusDefault: '3px',
    gOverlayZIndex: '10000',
    gLeftMenuResizerWidth: '6px',
    gLeftMenuCollapsedWidth: '40px',
    gLeftMenuExpandedWith: '220px',
    gTopMenuHeight: '46px',

    /* endregion Common */


    /* region Spaces*/

    gSpaceXXL: '48px',
    gSpaceXL: '32px',
    gSpaceLX: '24px',
    gSpaceL: '20px',
    gSpaceM: '16px',
    gSpaceSM: '12px',
    gSpaceS: '8px',
    gSpaceXS: '4px',

    /* endregion Spaces */


    /* region Fonts colors*/

    gFontColorDefault: '#000', /*default text color*/
    gFontColorGray: '#666', /*less important info*/
    gFontColorLightGray: '#999', /*the most unimportant info*/
    gFontColorWhite: '#fff',

    gLinkColor: '#296dcc',
    gLinkColorHover: '#0080ff',

    gMessageColorError: '#e41a1c',
    gMessageColorWarning: '#d28c00',
    gMessageColorSuccess: '#64aa1e',

    gActionColorAdd: '#64aa1e',
    gActionColorAddLight: '#8fcc52', /*on dark background*/
    gActionColorDelete: '#e41a1c',

    gFontColorAttention: '#e41a1c',
    gFontColorFailed: '#8b0000',
    gFontColorWarning: '#d28c00',
    gFontColorSuccess: '#469614',
    gFontColorSelected: '#2e6be6',

    gPassedColor: '#317600',
    gFailedColor: '#a00000',
    gOnholdColor: '#6d9bd3',
    gBlockedColor: '#e35a56',
    gNotrunColor: '#a0aeba',

    /* endregion Fonts colors*/


    /* region Backgrounds */

    gBackgroundDefault: '#fff',
    gBackgroundInvert: '#000',
    gBackgroundDisabled: '#f0f0f0',

    gHighlightBlockBackground: '#f2f5f8',
    gHighlightBlockBorderColor: 'rgb(225, 228, 231)', /*$gBackgroundColorHighlight shade(7%)*/
    gSelectedTagBackground: '#e8f2fd',

    gBoardBackground: '#e9ecf0',
    gBoardBorderColor: '#cbcdd1', /* $gBoardBackground shade(13%)*/
    gBoardSettingsBackground: '#f6f7f9', /*$gBoardBackground tint(60%)*/
    gBoardPanelBackgroundDarker: '#2a2c34',
    gBoardPanelBackgroundLighter: '#3d424d',
    gBoardPanelBackgroundLighterHover: '#333741', /*$gBoardPanelBackgroundLighter shade(16%)*/
    gCardDoneStateBackground: '#dae0e7', /*  color($gBoardBackground shade(5%) saturation(+10%))*/

    gBackgroundStrokeHighlight: '#fff6be', /*for highlight strokes without action */
    gActionBackgroundHover: '#fff6be',
    gActionBackgroundActive: '#f8e06f',
    gActionBackgroundSelected: '#f8e06f', /*for cards selection*/
    gActionBackgroundSystem: '#fff6be',
    gActionBackgroundSuccess: '#dcf0be',
    gActionBackgroundDelete: 'rgb(252, 232, 232)', /*10% from gActionColorDelete using tint*/

    gDnDPlaceholderBackground: '#73a2ff',

    /* endregion Backgrounds */


    /* region Form elements, Buttons */

    gControlBorderRadiusDefault: '2px',
    gControlWidthDefault: '210px',
    gControlWidthLarge: '315px',
    gControlWidthXLarge: '420px',
    gControlWidthSmall: '140px',
    gControlHeightDefault: '24px',
    gControlDisabledOpacity: '0.4',
    gPlaceholderColorDefault: '#7e858c',

    gControlBorderColorDefault: '#acb6bf',
    gControlBorderColorDisabled: '#d7d7d7',
    gControlBoxShadowFocusDefault: '0 0 2px 0px #2d96e6',
    gFocusBoxShadowColor: '#2d96e6',
    gControlBorderColorFocusDefault: '#2d96e6',
    gControlBoxShadowFocusError: '0 0 2px 0 #f03232',
    gControlBorderColorFocusError: '#f03232',

    gButtonLineHeightDefault: '22px',
    gButtonColorDefault: '#606c7b',
    gButtonColorChecked: '#fff',
    gButtonColorDisabled: '#d7d7d7',
    gButtonBorderColorDefault: '#acb3ba',
    gButtonBorderColorChecked: '#4d5258',
    gButtonBorderColorDisabled: '#d7d7d7',
    gButtonBackgroundDefault: 'linear-gradient(to top, #e8e8e8, #fff)',
    gButtonBackgroundHover: 'linear-gradient(to top, #d6d6d6, #fff)',
    gButtonBackgroundChecked: 'linear-gradient(to bottom, #1e1f23 0%, #727982 100%)',
    gButtonBackgroundActive: 'linear-gradient(to top, #e6e6e6 0%, #ffffff 100%)',

    /* endregion Buttons */


    /* region Icons*/

    gIconsSizeDefault: '16px',
    gIconsGeneralColor: '#acb6bf',
    gIconsColorRevert: '#a1a7b3',
    gIconsGeneralUrl: 'url(~icons-general.svg)',
    gIconsTeamColor: '#606c7b',
    gIconsTeamColorRevert: '#fff',

    /* endregion Icons*/


    /* region List view */

    gListCellResizerWidth: '5px',
    gListResizableCellMargin: '5px',
    gListCollapserWidth: '16px',

    /* endregion List view */


    /*region Dropdown*/

    gDropdownPadding: '8px',
    gDropdownItemPaddingVertical: '8px',
    gDropdownItemPaddingHorizontal: '10px',
    gDropdownGroupPadding: '8px'

    /*endregion Dropdown*/

};

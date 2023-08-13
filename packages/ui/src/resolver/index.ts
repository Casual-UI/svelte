const components = {
  CPagination: true,
  CTree: true,
  CParallax: true,
  CAjaxBar: true,
  CSkeleton: true,
  CCarouselSlider: true,
  CCarousel: true,
  CTable: true,
  CTabs: true,
  CInfoItem: true,
  CDatePicker: true,
  CToggle: true,
  CRadio: true,
  CCheckbox: true,
  CCheckboxGroup: true,
  CRadioGroup: true,
  CList: true,
  CItem: true,
  CTag: true,
  CSelect: true,
  CDropdown: true,
  CForm: true,
  CInput: true,
  CFormItem: true,
  CNotification: true,
  CButton: true,
  CLoading: true,
  CExpansion: true,
  CLoadingAudio: true,
  CLoadingBar: true,
  CLoadingCircleBars: true,
  CLoadingClock: true,
  CLoadingComment: true,
  CLoadingCube: true,
  CLoadingDot: true,
  CLoadingDots: true,
  CLoadingGear: true,
  CLoadingHeart: true,
  CLoadingHourglass: true,
  CLoadingInfinity: true,
  CLoadingLattice: true,
  CLoadingOrbit: true,
  CLoadingOval: true,
  CLoadingPie: true,
  CLoadingPuff: true,
  CLoadingRings: true,
  CLoadingSpinBox: true,
  CLoadingTail: true,
  CLoadingWifi: true,
  CTooltip: true,
  CPopup: true,
  CDialog: true,
  CDrawer: true,
}

export default () => (name: string) => {
  if (!components[name])
    return

  return {
    name,
    from: '@casual-ui/svelte',
  }
}
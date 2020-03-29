declare namespace CountryWiseDataCssModule {
  export interface ICountryWiseDataCss {
    container: string
    enabled: string
  }
}

declare const CountryWiseDataCssModule: CountryWiseDataCssModule.ICountryWiseDataCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CountryWiseDataCssModule.ICountryWiseDataCss
}

export = CountryWiseDataCssModule

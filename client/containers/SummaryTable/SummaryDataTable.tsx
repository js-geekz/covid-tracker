import React, { useEffect, useMemo } from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { CountryService } from '../../services'
import { usePromise } from '../../hooks'

import chartOptions from '../CountryWiseData/chart-options'

import * as css from '../CountryWiseData/CountryWiseData.css'

interface CountryWiseProps { }

function CountryWiseData(props: CountryWiseProps) {
    const { data, error, fetching, fetchData } = usePromise({
        service: CountryService.getCountryWiseList,
        payload: {
            limit: 10
        }
    })

    const options = useMemo(() => {
        const series = data?.map((record: Record<string, any>) => {
            return [record.country, record.cases]
        })

        return chartOptions(series)
    }, [data])

    useEffect(() => {
        fetchData()
    }, [])

    if (fetching) {
        return <div>'Loading...'</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className={css.container}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default CountryWiseData

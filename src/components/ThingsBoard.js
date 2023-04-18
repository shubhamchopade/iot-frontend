import React from 'react'
import { config } from '../data/thingsBoardConfig'



const ThingsBoard = () => {
    const { station1, station2, station3 } = config.devices
    const [station1Data, setStation1Data] = React.useState(null)
    const [station2Data, setStation2Data] = React.useState(null)
    const [station3Data, setStation3Data] = React.useState(null)



    React.useEffect(() => {
        getThingsboardData(station1, setStation1Data)
        // getThingsboardData(station2, setStation2Data)
        // getThingsboardData(station3, setStation3Data)
    }, [])

    if (!station1Data || !station2Data || !station3Data) {
        return <div>Loading...</div>
    }

    const station1Temperature = station1Data[0][station1.temperature.key]
    const station2Temperature = station2Data[0][station2.temperature.key]
    const station3Temperature = station3Data[0][station3.temperature.key]

    const station1Humidity = station1Data[1][station1.humidity.key]
    const station2Humidity = station2Data[1][station2.humidity.key]
    const station3Humidity = station3Data[1][station3.humidity.key]

    const station1Ph = station1Data[2][station1.ph.key]
    const station2Ph = station2Data[2][station2.ph.key]
    const station3Ph = station3Data[2][station3.ph.key]

    const station1Rainfall = station1Data[3][station1.rainfall.key]
    const station2Rainfall = station2Data[3][station2.rainfall.key]
    const station3Rainfall = station3Data[3][station3.rainfall.key]

    const station1N = station1Data[4][station1.n.key]
    const station2N = station2Data[4][station2.n.key]
    const station3N = station3Data[4][station3.n.key]

    const station1P = station1Data[5][station1.p.key]
    const station2P = station2Data[5][station2.p.key]
    const station3P = station3Data[5][station3.p.key]

    const station1K = station1Data[6][station1.k.key]
    const station2K = station2Data[6][station2.k.key]
    const station3K = station3Data[6][station3.k.key]



    return (
        <div>
            <h1>ThingsBoard</h1>

            {/* Table showing Station 1, Station2 and Station3 data for all the above sensors */}
            <table>
                <thead>
                    <tr>
                        <th>Station</th>
                        <th>Temperature</th>
                        <th>Humidity</th>
                        <th>pH</th>
                        <th>Rainfall</th>
                        <th>N</th>
                        <th>P</th>
                        <th>K</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Station 1</td>
                        <td>{station1Temperature && station1Temperature[station1Temperature.length - 1].value}</td>
                        <td>{station1Humidity && station1Humidity[station1Humidity.length - 1].value}</td>
                        <td>{station1Ph && station1Ph[station1Ph.length - 1].value}</td>
                        <td>{station1Rainfall && station1Rainfall[station1Rainfall.length - 1].value}</td>
                        <td>{station1N && station1N[station1N.length - 1].value}</td>
                        <td>{station1P && station1P[station1P.length - 1].value}</td>
                        <td>{station1K && station1K[station1K.length - 1].value}</td>
                    </tr>
                    <tr>
                        <td>Station 2</td>
                        <td>{station2Temperature && station2Temperature[station2Temperature.length - 1].value}</td>
                        <td>{station2Humidity && station2Humidity[station2Humidity.length - 1].value}</td>
                        <td>{station2Ph && station2Ph[station2Ph.length - 1].value}</td>
                        <td>{station2Rainfall && station2Rainfall[station2Rainfall.length - 1].value}</td>
                        <td>{station2N && station2N[station2N.length - 1].value}</td>
                        <td>{station2P && station2P[station2P.length - 1].value}</td>
                        <td>{station2K && station2K[station2K.length - 1].value}</td>
                    </tr>
                    {/* <tr>
                        <td>Station 1</td>
                        <td>{station1Temperature[station1Temperature.length - 1].value}</td>
                        <td>{station1Data[1][station1.humidity.key][station1Data[1][station1.humidity.key].length - 1].value}</td>
                        <td>{station1Data[2][station1.ph.key][station1Data[2][station1.ph.key].length - 1].value}</td>
                        <td>{station1Data[3][station1.rainfall.key][station1Data[3][station1.rainfall.key].length - 1].value}</td>
                        <td>{station1Data[4][station1.n.key][station1Data[4][station1.n.key].length - 1].value}</td>
                        <td>{station1Data[5][station1.p.key][station1Data[5][station1.p.key].length - 1].value}</td>
                        <td>{station1Data[6][station1.k.key][station1Data[6][station1.k.key].length - 1].value}</td>
                    </tr>
                    <tr>
                        <td>Station 2</td>
                        <td>{station2Temperature[station2Temperature.length - 1].value}</td>
                        <td>{station2Data[1][station2.humidity.key][station2Data[1][station2.humidity.key].length - 1].value}</td>
                        <td>{station2Data[2][station2.ph.key][station2Data[2][station2.ph.key].length - 1].value}</td>
                        <td>{station2Data[3][station2.rainfall.key][station2Data[3][station2.rainfall.key].length - 1].value}</td>
                        <td>{station2Data[4][station2.n.key][station2Data[4][station2.n.key].length - 1].value}</td>
                        <td>{station2Data[5][station2.p.key][station2Data[5][station2.p.key].length - 1].value}</td>
                        <td>{station2Data[6][station2.k.key][station2Data[6][station2.k.key].length - 1].value}</td>
                    </tr>
                    <tr>
                        <td>Station 3</td>
                        <td>{station3Temperature[station3Temperature.length - 1].value}</td>
                        <td>{station3Data[1][station3.humidity.key][station3Data[1][station3.humidity.key].length - 1].value}</td>
                        <td>{station3Data[2][station3.ph.key][station3Data[2][station3.ph.key].length - 1].value}</td>
                        <td>{station3Data[3][station3.rainfall.key][station3Data[3][station3.rainfall.key].length - 1].value}</td>
                        <td>{station3Data[4][station3.n.key][station3Data[4][station3.n.key].length - 1].value}</td>
                        <td>{station3Data[5][station3.p.key][station3Data[5][station3.p.key].length - 1].value}</td>
                        <td>{station3Data[6][station3.k.key][station3Data[6][station3.k.key].length - 1].value}</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default ThingsBoard

function getThingsboardData(station1, setData) {
    const accessToken = config.token
    const headers = {
        "X-Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
    }
    const temperatureSensor = station1.temperature
    const temperatureSensorQueryParams = getQueryParams({ key: temperatureSensor.key })
    const temperatureSensorDeviceId = temperatureSensor.deviceId

    const temperature1Res = fetch(`https://thingsboard.cloud/api/plugins/telemetry/DEVICE/${temperatureSensorDeviceId}/values/timeseries?${new URLSearchParams(temperatureSensorQueryParams)}`, { headers })

    const humiditySensor = station1.humidity
    const humiditySensorQueryParams = getQueryParams({ key: humiditySensor.key })
    const humiditySensorDeviceId = humiditySensor.deviceId

    const humidity1Res = fetch(`https://thingsboard.cloud/api/plugins/telemetry/DEVICE/${humiditySensorDeviceId}/values/timeseries?${new URLSearchParams(humiditySensorQueryParams)}`, { headers })

    const phSensor = station1.ph
    const phSensorQueryParams = getQueryParams({ key: phSensor.key })
    const phSensorDeviceId = phSensor.deviceId

    const ph1Res = fetch(`https://thingsboard.cloud/api/plugins/telemetry/DEVICE/${phSensorDeviceId}/values/timeseries?${new URLSearchParams(phSensorQueryParams)}`, { headers })

    const rainfallSensor = station1.rainfall
    const rainfallSensorQueryParams = getQueryParams({ key: rainfallSensor.key })
    const rainfallSensorDeviceId = rainfallSensor.deviceId

    const rainfall1Res = fetch(`https://thingsboard.cloud/api/plugins/telemetry/DEVICE/${rainfallSensorDeviceId}/values/timeseries?${new URLSearchParams(rainfallSensorQueryParams)}`, { headers })

    const nSensor = station1.n
    const nSensorQueryParams = getQueryParams({ key: nSensor.key })
    const nSensorDeviceId = nSensor.deviceId

    const n1Res = fetch(`https://thingsboard.cloud/api/plugins/telemetry/DEVICE/${nSensorDeviceId}/values/timeseries?${new URLSearchParams(nSensorQueryParams)}`, { headers })

    const pSensor = station1.p
    const pSensorQueryParams = getQueryParams({ key: pSensor.key })
    const pSensorDeviceId = pSensor.deviceId

    const p1Res = fetch(`https://thingsboard.cloud/api/plugins/telemetry/DEVICE/${pSensorDeviceId}/values/timeseries?${new URLSearchParams(pSensorQueryParams)}`, { headers })

    const kSensor = station1.k
    const kSensorQueryParams = getQueryParams({ key: kSensor.key })
    const kSensorDeviceId = kSensor.deviceId

    const k1Res = fetch(`https://thingsboard.cloud/api/plugins/telemetry/DEVICE/${kSensorDeviceId}/values/timeseries?${new URLSearchParams(kSensorQueryParams)}`, { headers })

    Promise.all([temperature1Res, humidity1Res, ph1Res, rainfall1Res, n1Res, p1Res, k1Res])
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(data => {
            setData(data)
        }).catch(err => {
            console.log(err)
        })
}

function getQueryParams({ key }) {
    return {
        keys: key,
        startTs: 1681789241984,
        endTs: Date.now(),
        interval: 6000000,
        limit: 100,
        agg: 'AVG'
    }
}

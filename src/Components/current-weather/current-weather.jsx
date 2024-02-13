import './current-weather.css'

const CurrentWeather = ({data}) => {
    return (
        <div className='w-[350px] rounded-[6px] shadow-[10px_-2px_20px_2px_rgb(0,0,0,0.3)] text-[#fff] bg-[#333] mx-auto mt-[20px] px-[20px] pb-[20px]'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-[600] text-[18px] tracking-1 leading-none'>{data.city}</p>
                    <p className='font-[400] text-[14px] leading-none'>{data.weather[0].description}</p>
                </div>
                <img alt="weather" src={`icons/${data.weather[0].icon}.png`} className='w-[100px]'></img>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-[600] text-[60px] tracking-[-1px] my-[10px]'>{Math.round(data.main.temp)}°C</p>
                <div className='w-full pl-[20px]'>
                    <div className= 'parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className= 'parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className= 'parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{Math.round(data.wind.speed)}</span>
                    </div>
                    <div className= 'parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className= 'parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{Math.round(data.main.pressure)} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;
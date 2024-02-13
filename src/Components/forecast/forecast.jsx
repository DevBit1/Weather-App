import './forecast.css'
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from 'react-accessible-accordion'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default function Forecast({data}) {

    const dayInTheWeek = new Date().getDay()        //This returns a number indicating the number of day 1-monday 2-tuesday
    const forecastWeek = WEEK_DAYS.slice(dayInTheWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInTheWeek))


    return(
        <>
            <label className='text-[23px] font-[700]'>Daily</label>
            <Accordion allowZeroExpanded>
                {
                    data.list.splice(0,7).map((item, idx)=>(
                        <AccordionItem key={idx}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className='bg-[#f5f5f5] rounded-[15px] h-[40px] m-[5px] flex items-center cursor-pointer text-[14px] py-[5px] px-[20px]'>
                                        <img alt='weather' src={`icons/${item.weather[0].icon}.png`} className='w-[40px]'/>
                                        <label className='text-[#212121] flex-1 font-[400] ml-[15px]'>{forecastWeek[idx]}</label>
                                        <label className='flex-1 mr-[15px] text-right'>{item.weather[0].description}</label>
                                        <label className='text-[#757575] '>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className='daily-details-grid'>
                                    <div className='daily-grid-items'>
                                        <label>Pressure</label>
                                        <label>{item.main.pressure} hpa</label>
                                    </div>
                                    <div className='daily-grid-items'>
                                        <label>Humidity</label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className='daily-grid-items'>
                                        <label>Clouds</label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                    <div className='daily-grid-items'>
                                        <label>Wind Speed</label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className='daily-grid-items'>
                                        <label>Sea Level</label>
                                        <label>{item.main.sea_level} m</label>
                                    </div>
                                    <div className='daily-grid-items'>
                                        <label>Feels Like</label>
                                        <label>{Math.round(item.main.feels_like)}°C</label>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    )
}
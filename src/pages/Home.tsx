import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { ICovid } from '../types/type'
import Card from '../components/Card'
import StateCard from '../components/StateCard'



const Home = () => {
    const [covidData, setCovidData] = useState<ICovid>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const getData = useCallback(async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('https://covidnigeria.herokuapp.com')
            setCovidData(data.data)
            
        } catch (error) {
            setError(true)
            
        }

        setLoading(false)


    }, [])
    

    useEffect(() => {
        getData()
        
    }, [getData])

    const date = new Date()
    


    if (loading) {
        return (
            <div className=' flex justify-center items-center  h-screen w-screen'>
                <p className='text-2xl'>Loading......</p>

            </div>
        )
    }
    if (error) {
        return (
            <div className=' flex justify-center items-center  h-screen w-screen'>
                <p className='text-2xl text-[#ff0000]'>An Error has occurred...... Reload your Browser</p>

            </div>
        )
    }


  return (
      <div className='pb-14'>
              <div className='lg:max-w-3xl  m-auto lg:py-20 px-6 py-10'>
                  <div className='md:text-4xl font-bold text-xl text-center'>
                      <p>Covid Today in Nigeria</p>
                      <p>{date.toDateString()}</p>
                  </div>
                  <Card data={covidData?.totalSamplesTested} text="Samples Tested" />
                  <Card data={covidData?.discharged} text="Discharged" />
                  <Card data={covidData?.totalConfirmedCases} text="Confirmed Cases" />
                  <Card data={covidData?.totalActiveCases} text="Active Cases" />
                  <Card data={covidData?.death} text="Deaths" />
              
          </div>
          <div className='flex gap-4  flex-wrap justify-center items-center'>
              {covidData?.states.map((state, index) => (
                  <StateCard key={index} state={state} />
              ))}
          </div>
      </div>
  )
}

export default Home
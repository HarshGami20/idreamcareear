
import { Button } from '../../UI/Button'

const Need = () => {
    return (
        <>
            <div>
                <h3 className='text-center tracking-wider text-lg mt-10 text-[var(--textgray)]'>Need additional Sessions?<br />
                    avail it at ₹3000 per session</h3>
            </div>
            <div className='flex tracking-wider justify-between items-center my-14 mx-32'>
                <div className='w-[500px]' >
                    <h1 className='mb-9 text-[32px] text-[#1E405E]'>Tired of the <span className='text-red-700'>complex college application</span> process for your kids?</h1>
                    <p className='mb-9 text-base text-[#6D6D73]'>Transfer your burden of shortlisting the right colleges and completing the cumbersome task of filling out the applications individually</p>
                    <Button>Speak with an Expert</Button>
                </div>
                <div>
                    <img className='w-[552px] h-[465px]' src="https://d8zm9ei35njj5.cloudfront.net/wp-content/uploads/2023/02/Group-48095858-1024x863.webp" alt="" />
                </div>
            </div>
        </>
    )
}

export default Need
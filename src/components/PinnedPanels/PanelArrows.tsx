import * as React from "react"

type PanelArrowsProp = {
    currentSlide: number,
    onClick: (number: number) => void
}

const PanelArrows = ({ currentSlide, onClick }: PanelArrowsProp) => {

    function handleClick(direction: 'prev' | 'next'){
        if(direction === 'prev' && currentSlide > 0){
            return onClick(currentSlide - 1)
        }

        if(direction === 'next' && currentSlide < 2){
            return onClick(currentSlide + 1)
        }

    }

    return (
        <div className="panels-arrows">
            <button className="panels__arrow" disabled={currentSlide === 0} onClick={() => handleClick('prev')}>
                <svg viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.66669 15.0661L17.2326 22.1473C17.7452 22.6271 18.5421 22.6271 19.0548 22.1473L19.0968 22.108C19.6593 21.5814 19.6598 20.6891 19.0978 20.162L13.665 15.0661L19.0978 9.97024C19.6598 9.44312 19.6593 8.55079 19.0968 8.02428L19.0548 7.98497C18.5421 7.50516 17.7452 7.50516 17.2326 7.98497L9.66669 15.0661Z" fill="currentColor"></path></svg>
            </button>
            <button className="panels__arrow" disabled={currentSlide === 2} onClick={() => handleClick('next')}>
                <svg viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M20.3333 14.9339L12.7674 7.85274C12.2548 7.37293 11.4579 7.37293 10.9452 7.85274L10.9032 7.89205C10.3407 8.41855 10.3402 9.31089 10.9022 9.83801L16.335 14.9339L10.9022 20.0298C10.3402 20.5569 10.3407 21.4492 10.9032 21.9757L10.9452 22.015C11.4579 22.4948 12.2548 22.4948 12.7674 22.015L20.3333 14.9339Z" fill="currentColor"></path></svg>
            </button>
        </div>
    )
}

export default PanelArrows
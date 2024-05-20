// import { cardio } from 'ldrs'
import "../../src/cloud_animation.css"


const LoadingAnimation = () => {
    return (
        <div
            id="cloud_animation"
        >
            <div
                id="background-wrap"
            >
                <div className="x1">
                    <div className="cloud"></div>
                </div>

                <div className="x2">
                    <div className="cloud"></div>
                </div>
                <div className="x3">
                    <div className="cloud"></div>
                </div>

                <div className="x4">
                    <div className="cloud"></div>
                </div>

                <div className="x5">
                    <div className="cloud"></div>
                </div>
            </div>
        </div>

    )
}
// Default values shown
export default LoadingAnimation;
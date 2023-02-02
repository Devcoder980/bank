import styles from "../style"

const getStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <p className="">
          <span>Get</span>
          <span>56</span>
        </p>
      </div>
    </div>
  )



export default getStarted 
import Title from "./Title";

const HomeBanner = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <Title className="text-3xl md:text-4xl uppercase font-bold text-center">Your Trusted Partner </Title>
            <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px]">Discover a wide range of high quality  products, from top tier cookware to fresh ingredients, designed to elevate every culinary experience. Streamline your operations with ease order online today and let excellence begin in your kitchen!</p>
        </div>
    )
}
export default HomeBanner
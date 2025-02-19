import BasicButton from "@/components/Button/BasicButton";
import ListBasicAnimation from "@/components/List/ListBasicAnimation";

export default function page(){
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <BasicButton/>
            </div>
            <div className="h-screen flex items-center justify-center relative">
                <ListBasicAnimation />
            </div>
        </>
    )
}
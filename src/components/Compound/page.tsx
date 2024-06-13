import PostCard from "./component"

export default function CompoundComponent(){
    return (
        <div>
            <h1>Compound Component</h1>
            <PostCard post={{
                 title: "Butas", 
                 date: "01/01/2000",
                 description: "blablablabla",
            }}
            >
                <PostCard.Date></PostCard.Date>
                <PostCard.Title></PostCard.Title>
                <PostCard.Description></PostCard.Description>
            </PostCard>
        </div>
    )
}
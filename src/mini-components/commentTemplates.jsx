import Ratings from "./rating";
import profileIcon from "../Assets/Icons/profileIcon.svg";

function Comments() {
  const noOfReviews = 500;
  const userReviews = [
    {
      id: 1,
      username: "Anita Kepp",
      comment: "Beautiful Craftmanship,Love the work.",
      commentDate: "06,nov 2024",
      ratings: 3.5,
    },
    {
      id: 2,
      username: "Vitoria M.",
      comment:
        "The fit is flawless and the details are stunning. Feeling like a million bucks!",
      commentDate: "10,sep 2024",
      ratings: 4.5,
    },
    {
      id: 3,
      username: "Efe Damsel",
      comment: "The fabric is luxurious and the construction is top-notch.",
      commentDate: "10,sep 2024",
      ratings: 5,
    },
    {
      id: 4,
      username: "Tasha crumbs",
      comment: "The fabric is luxurious and the construction is top-notch.",
      commentDate: "10,sep 2024",
      ratings: 5,
    },
    {
        id: 5,
        username: "Tasha crumbs",
        comment: "The fabric is luxurious and the construction is top-notch.",
        commentDate: "10,sep 2024",
        ratings: 5,
      },
  ];

  return (
    <div className="flex flex-col min-700:flex-row min-1024:flex-col min-700:min-w-full min-1024:w-[320px]  min-700:justify-between min-1024:justify-normal  items-start gap-[22px] pl-[6%]  min-200:w-[260px] min-330:w-[311px] min-400:w-[340px] min-500:w-[450px]  min-680:w-[311px]">
      <div>
        <p className="font-akaya text-gray text-[20px] mb-[19px]">
          Comments and Reviews
        </p>
        <ul className="scroll-container min-1024:w-[338px] min-1024:h-[349px] min-1024:overflow-y-scroll min-1024:overflow-x-hidden min-200:w-[260px] min-330:w-[311px] min-400:w-[340px] min-500:w-[450px]  min-680:w-[335px]">
          {userReviews.map((item) => {
            return (
              <li
                id={item.id}
                className="min-1024:gap-[5px] min-1024:bg-zinc-50 min-1024:px-[5px] min-1024:py-[7px] min-1024:w-[322px] scroll-snap-align-start w-[270px] min-330:w-[311px]  min-400:w-[340px] min-500:w-[450px] min-680:w-[311px]  mb-[15px] flex flex-col gap-[9px]"
              >
                <UsernameAndProfile username={item.username} />
                <UserComments comments={item.comment} />
                <UserRatingsAndDate
                  date={item.commentDate}
                  ratings={item.ratings}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <AddReview noOFreviews={noOfReviews} />
    </div>
  );
}

function UsernameAndProfile({ username }) {
  return (
    <div className="w-[230px] h-[28.55px] flex flex-row gap-[7px] item-start">
      <img
        className="w-[24px] h-[24px]"
        src={profileIcon}
        alt="user profile icon"
      />
      <p className="self-center w-[220px] font-FuturastdBook text-gray text-[13px] font-thin">
        {username}
      </p>
    </div>
  );
}

function UserComments({ comments }) {
  return (
    <div className="ml-[73px] min-330:ml-[60px] min-400:w-[280px] min-500:ml-[18%] min-680:ml-[73px] min-330:w-[241px] min-500:w-[370px] min-680:w-[251px] font-FuturastdBook font-light text-gray text-[15px]">
      {comments}
    </div>
  );
}

function UserRatingsAndDate({ date, ratings }) {
  return (
    <div className="self-center min-500:self-end w-[190px] h-[14px] flex flex-row gap-[16px]">
      <p className="w-[90px] h-[14px] font-FuturastdBook font-light text-[12px] text-gray ">
        {date}
      </p>
      <Ratings value={ratings} />
    </div>
  );
}

function AddReview({ noOFreviews }) {
  return (
    <div className="min-700:mr-[7%]  min-700:mt-[2%] min-1024:mr-[0%] min-1024:mt-[0%] self-start w-[270px] flex flex-col gap-[19px] items-center">
      <div className="w-[280px] h-[17px] flex flex-row items-center">
        <Ratings value={5} />
        <p className="h-[17px] font-FuturastdBook font-light text-[14px] text-gray">
          {noOFreviews} Reviews
        </p>
      </div>

      <input
        className="pl-[10px] font-FuturastdBook font-light text-[14px] w-[270px] h-[38px] border-solid border-[1px] rounded-sm border-gray"
        type="text"
        name="reviews"
        id="reviews"
      />

      <button
        className="self-end hover:text-blue-500 font-FuturastdBook font-light text-[14px] text-blue-300"
        type="submit"
      >
        Add Review
      </button>
    </div>
  );
}

export default Comments;

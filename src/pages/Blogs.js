import React from "react";
import "./Blogs.css";
import AllBlog from "../Layout/AllBlog";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="blogs-heading">
        <h1>BLOGS</h1>
      </div>
      <AllBlog
        mainHeading={"How to Stay Centered When Life Feels Out of Control"}
        imgSrc={"/images/mentalHealth1.jpg"}
        imgAlt={"MentalHealth"}
        description={
          "It seems like so much in life right now is out of our individual control, which naturally worsens symptoms of mental health challenges. Shifting your focus onto what in your own life you can affect can help ease symptoms of stress, anxiety, and depression."
        }
        blogLink={"/blog1"}
      />
      <AllBlog
        mainHeading={
          "Self-Advocate for Your Mental Health: How to Talk to Doctors"
        }
        imgSrc={"/images/mentalHealth2.jpg"}
        imgAlt={"MentalHealth2"}
        description={
          " When you have concerns about your mental health, talking with a doctor is an important step in reclaiming your wellbeing. This can be easier said than done. Use these tips for talking to a doctor about your mental health so you can be a strong self-advocate for your quality life."
        }
        blogLink={"/blog2"}
      />
      <AllBlog
        mainHeading={
          "Choosing What We Pay Attention to Affects Our Mental Health"
        }
        imgSrc={"/images/mentalHealth3.jpg"}
        imgAlt={"MentalHealth3"}
        description={
          " What we pay attention to matters.  It matters so much that helping people change their focus is an integral part of many approaches to mental health therapy, including cognitive behavioral therapy, dialectical behavior therapy, positive psychology, acceptance and commitment therapy, solution-focused brief therapy, logotherapy, and many more. The idea is that we often can’t choose what happens to us, but we can always choose how we respond to it. How we respond has a lot to do with what we pay attention to. "
        }
        blogLink={"/blog3"}
      />
      <AllBlog
        mainHeading={"How Excess Weight Impacts Our Mental Health"}
        imgSrc={
          "https://i.ndtvimg.com/i/2018-03/obesity_650x400_51520573838.jpg"
        }
        imgAlt={"blog4-img1"}
        description={
          " In a society where body image ideals are often unattainable and weight-related stigma is prevalent, the impact of excess weight on our mental health cannot be overlooked. Beyond its physical implications, carrying excess weight can have significant consequences for our psychological well-being, affecting our self-esteem, mood, and overall quality of life. "
        }
        blogLink={"/blog4"}
      />
      <AllBlog
        mainHeading={"Bipolar Disorder and Ghosting: It's a Big Problem"}
        imgSrc={"/images/popularBlog1.jpg"}
        imgAlt={"PopularBlog1"}
        description={
          "Ghosting is a contemporary term used for when a person completely cuts off all communication with a friend or romantic partner by not responding to texts, ignoring calls and acting as if the person no longer exists. It is done without a reason or an explanation from the person doing it. One day they are a part of your life, and the next day they disappear from it without warning. It negatively impacts friendships and romantic relationships. Ghosting is done by many of us living with bipolar disorder, especially during bipolar depressive episodes."
        }
        blogLink={"/blog5"}
      />
      <AllBlog
        mainHeading={"Learning to Say No After Trauma"}
        imgSrc={"/images/popularBlog2.jpg"}
        imgAlt={"PopularBlog2"}
        description={
          " Learning to say no after trauma can feel like stepping on someone's toes without stopping to apologize. In other words, it can feel harsh, cruel, rude, and downright awful to set a boundary or put your needs first. Through my experience enduring childhood sexual assault, I learned that my body was not my own. This idea made saying no after trauma very difficult."
        }
        blogLink={"/blog6"}
      />
      <AllBlog
        mainHeading={"The Link Between Addiction and Teenage Drinking"}
        imgSrc={"/images/popularBlog3.jpg"}
        imgAlt={"PopularBlog3"}
        description={
          " I left the UK to undergo alcohol treatment in South Africa, so it was inevitable that this would alter my perspective somewhat. However, after spending more time in this new environment, several striking realizations about the UK's negative relationship were crystal clear. After talking to numerous people from the same country and background, there was a common thread of early exposure to alcohol having long-lasting consequences. In short, I learned that teenage drinking can lead to addiction.  "
        }
        blogLink={"/blog7"}
      />

      <Footer />
    </>
  );
};

export default Blogs;

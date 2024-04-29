import React from "react";
import "./BlogLayout.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const BlogLayout = () => {
  return (
    <>
      <Navbar />
      <div className="blog-layout-wrapper">
        <div className="blog-layout-heading">
          <h1>How to Stay Centered When Life Feels Out of Control</h1>
        </div>
        <div className="blog-layout-img">
          <img src="/images/mentalHealth1.jpg" alt="mentalHealth1" />
        </div>
        <div className="blog-layout-content">
          <h6>
            It seems like so much in life right now is out of our individual
            control, which naturally worsens symptoms of mental health
            challenges. Shifting your focus onto what in your own life you can
            affect can help ease symptoms of stress, anxiety, and depression.
          </h6>
          <p>
            Here are a few tips for maintaining positive mental health when life
            feels out of control.
          </p>
          <div>
            <ul>
              <li>
                Focus on your own sense of purpose. Consider all the positives
                in your life. Consider creating a simple daily ritual: Brew a
                cup of tea or make some hot chocolate, sit in a favorite chair
                snuggled in a cozy blanket, and spend some time mindfully
                writing in a journal, reflecting on why you do what you do every
                day.
              </li>
              <li>
                Carry a focus object that represents this meaning. Select a
                small object or picture, and carry it with you. When you catch
                yourself feeling anxious, sad, or caught up in all that is
                wrong, pull yourself out of it by studying how it looks, what it
                feels like in your hands, and how it sounds or smells if that’s
                applicable.
              </li>
              <li>
                Separate yourself from your anxiety and other negative thoughts
                and feelings. In acceptance and commitment therapy (ACT), this
                is called defusion. When you notice that you’re caught up in
                negative thoughts, pause and remind yourself, “I’m having the
                thought that…” This acknowledges your thoughts in a
                nonjudgmental way and kindly reminds you that this is a thought
                rather than an absolute truth.
              </li>
              These tips can’t change things that are beyond our control, but
              they can help you maintain a sense of centeredness for your mental
              health.
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogLayout;

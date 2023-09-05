import React, { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistics/Statistics";
import { Notification } from "Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  updateStateCount = state => {
    this.setState(prev => ({ [state]: prev[state] + 1 }))
  }

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

  render() {
    const {good, neutral, bad} = this.state

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateStateCount}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title='Statistics'>
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    )
  }
}
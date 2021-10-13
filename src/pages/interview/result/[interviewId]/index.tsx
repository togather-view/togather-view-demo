import { memo } from "react";

// dummy
import { myAccount } from "@dummy/user.data";
import { questionToAnswer } from "@dummy/interview.data";

// components
import LayoutComponent from "@src/components/common/Layout.component";
import InterviewResultInfoComponent from "@src/components/interview/result/InterviewResultInfo.component";

// styles
import styles from "@src/styles/pages/InterviewResult.module.scss";
import TagComponent from "@src/components/common/Tag.component";
import { Button, Switch } from "antd";
import { DownCircleTwoTone } from "@ant-design/icons";

function InterviewResultPage() {
  return (
    <LayoutComponent>
      <div className={styles.container}>
        <InterviewResultInfoComponent
          useTimer={false}
          containAttitude
          interviewedAt="2021년 10월 3일"
          totalQuestion={3}
          jobList={myAccount.jobList}
          techList={myAccount.techList}
        />
        <div className={styles.list}>
          {questionToAnswer.map((x) => (
            <div key={x.id}>
              <div>
                <div>
                  <div className={styles.header}>
                    <div className={styles.tagContainer}>
                      <div className={styles.tagList}>
                        {x.question.techList.map((t) => (
                          <TagComponent
                            key={t.id}
                            title={t.name}
                            color={t.color}
                          />
                        ))}
                      </div>
                      <div className={styles.jobList}>
                        {x.question.jobGroup.map((t) => (
                          <span key={t.id}>{t.name}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.iconContainer}>
                      <Button
                        icon={<span className={styles.icon}>👀</span>}
                        shape="circle"
                      />
                      <Button
                        icon={<span className={styles.icon}>👍</span>}
                        shape="circle"
                      />
                      <Button
                        icon={<span className={styles.icon}>🔖</span>}
                        shape="circle"
                      />
                      <Button
                        icon={<span className={styles.icon}>🚨</span>}
                        shape="circle"
                      />
                    </div>
                  </div>
                  <div className={styles.contents}>
                    <h3>{x.question.contents}</h3>
                  </div>
                </div>
              </div>
              <div className={styles.answer}>{x.answer.contents}</div>
              <div className={styles.switch}>
                <p>답변을 다른 사람에게 공개할까요?</p>
                <Switch size="small" />
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </LayoutComponent>
  );
}

export default memo(InterviewResultPage);

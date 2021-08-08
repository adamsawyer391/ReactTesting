import React from 'react'
import './css/QuestionBlock.css'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import DetailsIcon from '@material-ui/icons/Details';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HistoryIcon from '@material-ui/icons/History';

function QuestionBlock() {
    return (
        <div className="question-so-container">
            <div className="question-so-left">
                <ChangeHistoryIcon />
                <h2 className="question-vote-number">
                    0
                </h2>
                <DetailsIcon />
                <BookmarkIcon />
                <HistoryIcon />
            </div>
            <div className="question-so-right">
                <p className="actual-question">
                    I want to read data from my Firebase database for all questions. For e.g. for question1 I want to store ques,ans and answeredBy into three variables. What I am currently doing is here.
                </p>
                <pre className="so-question-pre-block">
{`
private FirebaseDatabase database=FirebaseDatabase.getInstance();
private DatabaseReference 
quizRef=database.getReference("Quiz").child("Questions");
quizRef.addValueEventListener(new ValueEventListener() {
        @Override
        public void onDataChange(DataSnapshot dataSnapshot) {
            for (DataSnapshot ds:dataSnapshot.getChildren())
            {
                ModelClass modelClass=new ModelClass();
                modelClass.setQues(ds.child("question1").getValue(ModelClass.class).getQues());
                modelClass.setAns(ds.child("question1").getValue(ModelClass.class).getAns());

                textViewQuestionText.setText(modelClass.getQues());
            }
        }

        @Override
        public void onCancelled(DatabaseError error) {
            textViewQuestionText.setText("Error occurred");

        }
    })
`}
                </pre>
                <img src="https://i.stack.imgur.com/ypcWP.png" alt="" className="question-image-block" />
                <div className="tag-block">
                    <p className="actual-para-tag-block">
                        android
                    </p>
                    <p className="actual-para-tag-block">
                        firebase
                    </p>
                    <p className="actual-para-tag-block">
                        firebase-realtime-database
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuestionBlock

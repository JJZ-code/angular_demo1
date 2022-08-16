import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-publisher',
  templateUrl: './exam-publisher.component.html',
  styleUrls: ['./exam-publisher.component.scss']
})
export class ExamPublisherComponent implements OnInit {
  public order:any[]=[
    {totalScore: 6697,
      totalNumber:2,
      passingGrade: 60,
      trainingQuestions:[
      {
				id:90897200,
			  trainingId: 90894751,
			  title: '测试题001',
			  score: 6677,
			  questionType: 0,
			  questionOrder: 1,
			  picture: null,
			  createDate: 1660098142000,
        trainingQuestionOptions: [
          {
            id: 90898108,
            qiestionId: 90897200,
            itemContent: 'aaa',
            rightOrWrong: null,
            picture: null,
            optionOrder: 0,
          },
          {
            id: 90898109,
            qiestionId: 90897200,
            itemContent: 'bbb',
            rightOrWrong: null,
            picture: null,
            optionOrder: 1,
          }
            
          ]
			},
      {
				id:90897201,
			  trainingId: 90894752,
			  title: '测试题001',
			  score: 6677,
			  questionType: 0,
			  questionOrder: 1,
			  picture: null,
			  createDate: 1660098142000,
        trainingQuestionOptions: [
          {
            id: 90898108,
            qiestionId: 90897201,
            itemContent: 'aaa',
            rightOrWrong: null,
            picture: null,
            optionOrder: 0,
          },
          {
            id: 90898109,
            qiestionId: 90897201,
            itemContent: 'bbb',
            rightOrWrong: null,
            picture: null,
            optionOrder: 1,
          }
            
          ]
			},
      {
				id:90897200,
			  trainingId: 90894751,
			  title: '测试题001',
			  score: 6677,
			  questionType: 1,
			  questionOrder: 1,
			  picture: null,
			  createDate: 1660098142000,
        trainingQuestionOptions: [
          {
            id: 90898108,
            qiestionId: 90897200,
            itemContent: 'aaa',
            rightOrWrong: null,
            picture: null,
            optionOrder: 0,
          },
          {
            id: 90898109,
            qiestionId: 90897200,
            itemContent: 'bbb',
            rightOrWrong: null,
            picture: null,
            optionOrder: 1,
          }
            
          ]
			},
			
     ]
    },
   
      
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

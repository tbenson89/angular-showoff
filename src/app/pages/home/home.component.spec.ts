import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  // TODO: check that homeHeroData isn't '' or null or undefined!

  /* Test ALL homeHeroData */
  it('should have a title object with the expected properties', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.homeHeroData.title).toEqual({
      t1: 'Angular is for Lovers',
      t2: 'Angular: The Jedi of web development',
      t3: 'The Jedi of web development',
      t4: 'Ignite Apps with Angular'
    });
  });

  it('should have the correct homeHeroData tagline', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.homeHeroData.tagline).toEqual('A. Tyler Benson Angular Developer');
  });

  it('should have the correct homeHeroData summary', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.homeHeroData.summary).toEqual('A nice playground to show off different angular best practices, personal experience, somewhat of a portfolio project.');
  });

  it('should have the correct homeHeroData btn1txt', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.homeHeroData.btn1txt).toEqual('Learn More');
  });

  it('should have the correct homeHeroData btn1link', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.homeHeroData.btn1link).toEqual('#link1');
  });

  it('should have the correct homeHeroData btn2txt', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.homeHeroData.btn2txt).toEqual('Explore Me');
  });

  it('should have the correct homeHeroData btn2link', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.homeHeroData.btn2link).toEqual('#link2');
  });


  /* Test ALL pointGridData */
  it('should have a pointGridData array with the expected length', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.pointGridData.length).toEqual(4);
  });

  it('should have the correct properties for the point Object', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    const firstPoint = component.pointGridData[0];
    expect(firstPoint).toEqual({
        title: 'Point Number 1',
        summary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: 'nature'
    });
  });

  // Note: I can probably use this loop tester for titles for the title object homeHeroData
  it('should have a title property for each point in the pointGridData array', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    component.pointGridData.forEach(point => {
        expect(point.title).toBeTruthy();
    });
  });

  it('should have a summary property for each point in the pointGridData array', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    component.pointGridData.forEach(point => {
        expect(point.summary).toBeTruthy();
    });
  });

  it('should have a icon property for each point in the pointGridData array', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      const component = fixture.componentInstance;
      component.pointGridData.forEach(point => {
          expect(point.icon).toBeTruthy();
      });
  });


  /* Test ALL questions */
  it('should have a questions array with the expected length', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.questions.length).toEqual(3);
  });

  it('should have a title property for each point in the questions array', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    component.questions.forEach(q => {
        expect(q.title).toBeTruthy();
    });
  });

  it('should have a description property for each point in the questions array', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    component.questions.forEach(q => {
        expect(q.description).toBeTruthy();
    });
  });

  it('should have a link property for each point in the questions array', () => {
      const fixture = TestBed.createComponent(HomeComponent);
      const component = fixture.componentInstance;
      component.questions.forEach(q => {
          expect(q.link).toBeTruthy();
      });
  });
});

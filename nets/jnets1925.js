var cauths = [
{type:'name',url:'',color:'info',text:'Frank W. Notestein'},
{type:'article',url:'http://www.jstor.org/stable/2278490',color:'statistics',text:'1930 Differential Fertility According To Social Class, JASA'},
{type:'article',url:'http://www.jstor.org/stable/2766796',color:'sociology',text:'1931 Differential Age At Marriage According To Social Class, AJS'},
{type:'article',url:'http://www.jstor.org/stable/3347545',color:'pubh',text:'1931 The Decrease In Size Of Families From 1890 To 1910, Milbank'},
{type:'article',url:'http://www.jstor.org/stable/3347578',color:'pubh',text:'1932 The Fertility Of Specific Occupational Groups In An Urban Population, Milbank'},
{type:'article',url:'http://www.jstor.org/stable/2767479',color:'sociology',text:'1932 Trends In The Size Of Families Completed Prior To 1910, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2570112',color:'sociology',text:'1933 The Differential Rate Of Increase Among The Social Classes Of, Social Forces'},
{type:'article',url:'http://www.jstor.org/stable/41447213',color:'eugenics',text:'1934 Fertility Of The Social Classes In The Native White Population, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/3347744',color:'pubh',text:'1934 Effectiveness Of Birth Control, Milbank'},
{type:'name',url:'',color:'info',text:'Pascal K. Whelpton'},
{type:'article',url:'http://www.jstor.org/stable/3004356',color:'sociology',text:'1928 Industrial Development And Population Growth, Social Forces'},
{type:'article',url:'http://www.jstor.org/stable/2765600',color:'sociology',text:'1928 Population Of The United States, 1925 To 1975, AJS'},
{type:'article',url:'http://www.jstor.org/stable/3004872',color:'sociology',text:'1928 Industrial Development And Population Growth, Social Forces'},
{type:'article',url:'http://www.jstor.org/stable/2276854',color:'statistics',text:'1929 Differentials In True Natural Increase, JASA'},
{type:'article',url:'http://www.jstor.org/stable/2766839',color:'sociology',text:'1930 Population, AJS'},
{type:'article',url:'http://www.jstor.org/stable/1802979',color:'economics',text:'1931 Land Economics, AER'},
{type:'article',url:'http://www.jstor.org/stable/2277850',color:'statistics',text:'1932 Increase And Distribution Of Elders In Our Population, JASA'},
{type:'article',url:'http://www.jstor.org/stable/2766993',color:'sociology',text:'1932 Trends In Age Composition And In Specific Birth-Rates, 1920-30, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2767390',color:'sociology',text:'1933 Population, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2278282',color:'statistics',text:'1934 The Completeness Of Birth Registration In The United States, JASA'},
{type:'article',url:'http://www.jstor.org/stable/2278069',color:'statistics',text:'1934 On The Rapidity Of The Decline In The Birth Rate, JASA'},
{type:'name',url:'',color:'info',text:'Louis I. Dublin'},
{type:'article',url:'http://www.jstor.org/stable/2965517',color:'statistics',text:'1925 On The True Rate Of Natural Increase, JASA'},
{type:'article',url:'http://www.jstor.org/stable/2277429',color:'statistics',text:'1925 The Statistician And The Population Problem, JASA'},
{type:'article',url:'http://www.jstor.org/stable/41447029',color:'eugenics',text:'1930 The Influence Of Weight On Certain Causes Of Death, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/1802979',color:'economics',text:'1931 Land Economics, AER'},
{type:'article',url:'http://www.jstor.org/stable/2570114',color:'sociology',text:'1933 Discussion Of The Differential Fertility Of Social Classes, Social Forces'},
{type:'name',url:'',color:'info',text:'Warren S. Thompson'},
{type:'article',url:'http://www.jstor.org/stable/2277163',color:'statistics',text:'1925 Size Of Families From Which College Students Come, JASA'},
{type:'article',url:'http://www.jstor.org/stable/2766071',color:'sociology',text:'1928 Population, AJS'},
{type:'article',url:'http://www.jstor.org/stable/41447007',color:'eugenics',text:'1929 Natural Selection In The Processes Of Population Growth, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/1016975',color:'general',text:'1930 Recent Changes In The Birth Rate And Their Significance For, AAAPSS'},
{type:'name',url:'',color:'info',text:'E. Franklin Frazier'},
{type:'article',url:'http://www.jstor.org/stable/1016831',color:'general',text:'1928 The Negro Family, AAAPSS'},
{type:'article',url:'http://www.jstor.org/stable/2569813',color:'sociology',text:'1929 The Negro Community, A Cultural Phenomenon, Social Forces'},
{type:'article',url:'http://www.jstor.org/stable/2569782',color:'sociology',text:'1932 An Analysis Of Statistics On Negro Illegitimacy In The United, Social Forces'},
{type:'article',url:'http://www.jstor.org/stable/2767103',color:'sociology',text:'1933 Children In Black And Mulatto Families, AJS'},
{type:'name',url:'',color:'info',text:'G. St. J. Perrott'},
{type:'article',url:'http://www.jstor.org/stable/3347445',color:'pubh',text:'1933 Sickness And The Depression, Milbank'},
{type:'article',url:'http://www.jstor.org/stable/4580948',color:'pubh',text:'1933 Sickness And The Economic Depression, PHR'},
{type:'article',url:'http://www.jstor.org/stable/3347679',color:'pubh',text:'1934 Sickness, Unemployment, And Differential Fertility, Milbank'},
{type:'article',url:'http://www.jstor.org/stable/2277802',color:'statistics',text:'1934 The Economic Depression And Sickness, JASA'},
{type:'name',url:'',color:'info',text:'Edgar Sydenstricker'},
{type:'article',url:'http://www.jstor.org/stable/2277436',color:'statistics',text:'1925 Population Statistics Of Foreign Countries, JASA'},
{type:'article',url:'http://www.jstor.org/stable/4579371',color:'pubh',text:'1929 Differential Fertility According To Economic Status, PHR'},
{type:'article',url:'http://www.jstor.org/stable/2278490',color:'statistics',text:'1930 Differential Fertility According To Social Class, JASA'},
{type:'article',url:'http://www.jstor.org/stable/4579923',color:'pubh',text:'1931 The Incidence Of Influenza Among Persons Of Different Economic Status, PHR'},
{type:'article',url:'http://www.jstor.org/stable/3347492',color:'pubh',text:'1932 A Study Of The Fertility Of Native White Women In, Milbank'},
{type:'article',url:'http://www.jstor.org/stable/4580948',color:'pubh',text:'1933 Sickness And The Economic Depression, PHR'},
{type:'article',url:'http://www.jstor.org/stable/3347679',color:'pubh',text:'1934 Sickness, Unemployment, And Differential Fertility, Milbank'},
{type:'name',url:'',color:'info',text:'Alfred J. Lotka'},
{type:'article',url:'http://www.jstor.org/stable/2965517',color:'statistics',text:'1925 On The True Rate Of Natural Increase, JASA'},
{type:'article',url:'http://www.jstor.org/stable/2276769',color:'statistics',text:'1927 The Size Of American Families In The Eighteenth Century, JASA'},
{type:'article',url:'http://www.jstor.org/stable/85530',color:'general',text:'1928 Sterility In American Marriages, PNAS'},
{type:'article',url:'http://www.jstor.org/stable/85589',color:'general',text:'1929 Biometric Functions In A Population Growing In Accordance With A, PNAS'},
{type:'article',url:'http://www.jstor.org/stable/41447090',color:'eugenics',text:'1931 The Structure Of A Growing Population, Human Biology'},
{type:'name',url:'',color:'info',text:'Selwyn D. Collins'},
{type:'article',url:'http://www.jstor.org/stable/4578713',color:'pubh',text:'1928 Infant Mortality From Different Causes And At Different Ages In, PHR'},
{type:'article',url:'http://www.jstor.org/stable/4580606',color:'pubh',text:'1932 Excess Mortality From Causes Other Than Influenza And Pneumonia During, PHR'},
{type:'article',url:'http://www.jstor.org/stable/3347445',color:'pubh',text:'1933 Sickness And The Depression, Milbank'},
{type:'article',url:'http://www.jstor.org/stable/4580948',color:'pubh',text:'1933 Sickness And The Economic Depression, PHR'},
{type:'article',url:'http://www.jstor.org/stable/2277802',color:'statistics',text:'1934 The Economic Depression And Sickness, JASA'},
{type:'name',url:'',color:'info',text:'Sanford Winston'},
{type:'article',url:'http://www.jstor.org/stable/2766795',color:'sociology',text:'1931 The Influence Of Social Factors Upon The Sex-Ratio At Birth, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2570256',color:'sociology',text:'1931 The Migration And Distribution Of Negro Leaders In The United, Social Forces'},
{type:'article',url:'http://www.jstor.org/stable/41447116',color:'eugenics',text:'1932 Some Factors Related To Differential Sex-Ratios At Birth, Human Biology'},
{type:'name',url:'',color:'info',text:'Fred C. Frey'},
{type:'article',url:'http://www.jstor.org/stable/2766198',color:'sociology',text:'1927 The Migration To Towns And Cities. Iii, AJS'},
{type:'article',url:'http://www.jstor.org/stable/3004543',color:'sociology',text:'1928 Farmer Leaders In The United States, Social Forces'},
{type:'name',url:'',color:'info',text:'Harold Ellis Jones'},
{type:'article',url:'http://www.jstor.org/stable/2765746',color:'sociology',text:'1929 Homogamy In Intellectual Abilities, AJS'},
{type:'article',url:'http://www.jstor.org/stable/41447616',color:'eugenics',text:'1931 A Study Of Like-Sexed Twins, Human Biology'},
{type:'name',url:'',color:'info',text:'Howard Whipple Green'},
{type:'article',url:'http://www.jstor.org/stable/2277849',color:'statistics',text:'1932 Composition And Characteristics Of A Typical City Analyzed By Census, JASA'},
{type:'article',url:'http://www.jstor.org/stable/2767476',color:'sociology',text:'1932 Cultural Areas In The City Of Cleveland, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2282233',color:'statistics',text:'1933 The Use Of Census Tracts In Analyzing The Population Of, JASA'},
{type:'name',url:'',color:'info',text:'Mary Gover'},
{type:'article',url:'http://www.jstor.org/stable/4579448',color:'pubh',text:'1929 A Study Of Negro Infant Mortality, PHR'},
{type:'article',url:'http://www.jstor.org/stable/41446987',color:'eugenics',text:'1929 Increase Of The Negro Population In The United States, Human Biology'},
{type:'name',url:'',color:'info',text:'S. J. Holmes'},
{type:'article',url:'http://www.jstor.org/stable/41447094',color:'eugenics',text:'1931 Changes In The Sex Ratio In Infant Mortality According To, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/41447615',color:'eugenics',text:'1931 Differential Mortality In The American Negro, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/2277764',color:'statistics',text:'1931 The Stabilized Natural Increase Of The Negro, JASA'},
{type:'name',url:'',color:'info',text:'Xarifa Sallume'},
{type:'article',url:'http://www.jstor.org/stable/3347578',color:'pubh',text:'1932 The Fertility Of Specific Occupational Groups In An Urban Population, Milbank'},
{type:'article',url:'http://www.jstor.org/stable/2767479',color:'sociology',text:'1932 Trends In The Size Of Families Completed Prior To 1910, AJS'},
{type:'name',url:'',color:'info',text:'Clyde V. Kiser'},
{type:'article',url:'http://www.jstor.org/stable/2278637',color:'statistics',text:'1932 Fertility Of Social Classes In Various Types Of Communities Of, JASA'},
{type:'article',url:'http://www.jstor.org/stable/41447634',color:'eugenics',text:'1933 Trends In The Fertility Of Social Classes From 1900 To, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/41447213',color:'eugenics',text:'1934 Fertility Of The Social Classes In The Native White Population, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/2278062',color:'statistics',text:'1934 Pitfalls In Sampling For Population Study, JASA'},
{type:'name',url:'',color:'info',text:'Carle C. Zimmerman'},
{type:'article',url:'http://www.jstor.org/stable/2765546',color:'sociology',text:'1926 The Migration To Towns And Cities, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2765045',color:'sociology',text:'1927 The Migration To Towns And Cities. Ii, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2766198',color:'sociology',text:'1927 The Migration To Towns And Cities. Iii, AJS'},
{type:'article',url:'http://www.jstor.org/stable/3004543',color:'sociology',text:'1928 Farmer Leaders In The United States, Social Forces'},
{type:'article',url:'http://www.jstor.org/stable/2767222',color:'sociology',text:'1930 Migration To Towns And Cities, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2570185',color:'sociology',text:'1930 The Migrations To Towns And Cities, Number 6, Social Forces'},
{type:'name',url:'',color:'info',text:'C. Horace Hamilton'},
{type:'article',url:'http://www.jstor.org/stable/2767279',color:'sociology',text:'1930 Some Factors Affecting The Size Of Rural Groups In Virginia, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2570218',color:'sociology',text:'1934 Rural-Urban Migration In The Tennessee Valley Between 1920 And 1930, Social Forces'},
{type:'name',url:'',color:'info',text:'Elbridge Sibley'},
{type:'article',url:'http://www.jstor.org/stable/2277061',color:'statistics',text:'1926 The Size Of Families, JASA'},
{type:'article',url:'http://www.jstor.org/stable/4580400',color:'pubh',text:'1932 Relative Incidence Of Typhoid Fever In Urban And Rural Areas, PHR'},
{type:'name',url:'',color:'info',text:'Norman E. Himes'},
{type:'article',url:'http://www.jstor.org/stable/2765924',color:'sociology',text:'1930 Robert Dale Owen, The Pioneer Of American Neo-Malthusianism, AJS'},
{type:'article',url:'http://www.jstor.org/stable/1018516',color:'general',text:'1932 Birth Control In Historical And Clinical Perspective, AAAPSS'},
{type:'name',url:'',color:'info',text:'Raymond Pearl'},
{type:'article',url:'http://www.jstor.org/stable/41447012',color:'eugenics',text:'1929 Changes In The Incidence Of Mortality At Advanced Ages, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/41447070',color:'eugenics',text:'1931 Studies On Human Longevity, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/41447135',color:'eugenics',text:'1932 Some Data On Fertility And Economic Status, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/41447124',color:'eugenics',text:'1932 Contraception And Fertility In 2,000 Women, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/3347523',color:'pubh',text:'1933 Preliminary Notes On A Cooperative Investigation Of Family Limitation, Milbank'},
{type:'article',url:'http://www.jstor.org/stable/41447196',color:'eugenics',text:'1934 Contraception And Fertility In 4945 Married Women. A Second Report, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/41447645',color:'eugenics',text:'1934 Studies On Human Longevity Vi, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/3347894',color:'pubh',text:'1934 Second Progress Report On A Study Of Family Limitation, Milbank'},
{type:'name',url:'',color:'info',text:'Pitirim A. Sorokin'},
{type:'article',url:'http://www.jstor.org/stable/2765311',color:'sociology',text:'1927 Leaders Of Labor And Radical Movements In The United States, AJS'},
{type:'article',url:'http://www.jstor.org/stable/3004543',color:'sociology',text:'1928 Farmer Leaders In The United States, Social Forces'},
{type:'name',url:'',color:'info',text:'A. B. Wolfe'},
{type:'article',url:'http://www.jstor.org/stable/2278636',color:'statistics',text:'1932 Population Censuses Before 1790, JASA'},
{type:'article',url:'http://www.jstor.org/stable/41447142',color:'eugenics',text:'1933 The Fecundity And Fertility Of Early Man, Human Biology'},
{type:'name',url:'',color:'info',text:'C. H. Forsyth'},
{type:'article',url:'http://www.jstor.org/stable/41447031',color:'eugenics',text:'1930 The Decline In The Average Length Of Life, Human Biology'},
{type:'article',url:'http://www.jstor.org/stable/2277659',color:'statistics',text:'1932 Proposal Of A Coefficient Of Stability, JASA'},
{type:'name',url:'',color:'info',text:'Walter F. Willcox'},
{type:'article',url:'http://www.jstor.org/stable/2277051',color:'statistics',text:'1926 The Past And Future Development Of Vital Statistics In The, JASA'},
{type:'article',url:'http://www.jstor.org/stable/2277399',color:'statistics',text:'1928 The Population Of China In 1910, JASA'},
{type:'article',url:'http://www.jstor.org/stable/3347615',color:'pubh',text:'1932 Changes Since 1900 In The Fertility Of Native White Wives, Milbank'},
{type:'name',url:'',color:'info',text:'Sanford R. Winston'},
{type:'article',url:'http://www.jstor.org/stable/2765451',color:'sociology',text:'1930 The Relation Of Certain Social Factors To Fertility, AJS'},
{type:'article',url:'http://www.jstor.org/stable/2570181',color:'sociology',text:'1930 The Relation Of Educational Status To Interstate Mobility, Social Forces'},
{type:'name',url:'',color:'info',text:'Paul Popenoe'},
{type:'article',url:'http://www.jstor.org/stable/2570115',color:'sociology',text:'1933 Divorce And Remarriage From A Eugenic Point Of View, Social Forces'},
{type:'article',url:'http://www.jstor.org/stable/2768062',color:'sociology',text:'1934 Fecundity Of Families Dependent On Public Charity, AJS'},
{type:'name',url:'',color:'info',text:'Grace Abbott'},
{type:'article',url:'http://www.jstor.org/stable/1016982',color:'general',text:'1930 The Federal Government In Relation To Maternity And Infancy, AAAPSS'},
{type:'article',url:'http://www.jstor.org/stable/2767007',color:'sociology',text:'1932 The Child, AJS'},
{type:'name',url:'',color:'info',text:'Mildred Parten'},
{type:'article',url:'http://www.jstor.org/stable/2765311',color:'sociology',text:'1927 Leaders Of Labor And Radical Movements In The United States, AJS'},
{type:'article',url:'http://www.jstor.org/stable/1018513',color:'general',text:'1932 A Statistical Analysis Of The Modern Family, AAAPSS'},
{type:'name',url:'',color:'info',text:'O. D. Duncan'},
{type:'article',url:'http://www.jstor.org/stable/2766198',color:'sociology',text:'1927 The Migration To Towns And Cities. Iii, AJS'},
{type:'article',url:'http://www.jstor.org/stable/3004543',color:'sociology',text:'1928 Farmer Leaders In The United States, Social Forces'}
];
 var articles = 529;
 var journals = 12;
 var authors = 313;
 var density = 0.35;
 var cjournals = [
{title:'JASA',field: 'statistics',centrality:0.73},
{title:'Human Biology',field: 'eugenics',centrality:0.73},
{title:'Social Forces',field: 'sociology',centrality:0.55},
{title:'AJS',field: 'sociology',centrality:0.55},
{title:'Milbank',field: 'pubh',centrality:0.45},
{title:'AAAPSS',field: 'general',centrality:0.36},
{title:'AER',field: 'economics',centrality:0.36},
{title:'PHR',field: 'pubh',centrality:0.27},
{title:'PNAS',field: 'general',centrality:0.18},
{title:'Actuaries',field: 'statistics',centrality:0.0},
{title:'Science',field: 'general',centrality:0.0},
{title:'Biometrika',field: 'eugenics',centrality:0.0}
];
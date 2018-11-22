# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
artist_1 = Artist.new(name: "Drake")
artist_2 = Artist.new(name: "Travis Scott")
artist_3 = Artist.new(name: "BTS")

artist_1.images.attach(io: File.open("/Users/apollos/Downloads/Drake-scorpion-image.jpg"), filename: "Drake-scorpion-image.jpg")
artist_2.images.attach(io: File.open("/Users/apollos/Downloads/travis-scott-spotify-image-1.jpeg"), filename: "travis-scott-spotify-image-1.jpeg")
artist_3.images.attach(io: File.open("/Users/apollos/Downloads/bts-spotify-cover.jpg"), filename: "bts-spotify-cover.jpg")

artist_1.save!
artist_2.save!
artist_3.save!

album_1 = Album.new(title: "Scorpion", year: 2018, genre: "hip-hop", artist_id: 1, publisher: "© 2018 Young Money/Cash Money Records")
album_2 = Album.new(title: "ASTROWORLD", year: 2018, genre: "hip-hop", artist_id: 2, publisher: "℗ 2018 Epic Records, a division of Sony Music Entertainment. With Cactus Jack and Grand Hustle.")
album_3 = Album.new(title: "Love Yourself 轉 'Tear'", year: 2018, genre: "k-pop", artist_id: 3, publisher: "© 2018 Bighit Entertainment")
album_4 = Album.new(title: "Love Yourself 結 'Answer'", year: 2018, genre: "k-pop", artist_id: 3, publisher: "© 2018 Bighit Entertainment")

album_1.image.attach(io: File.open("/Users/apollos/Downloads/drake-scorpion-album-cover.jpg"), filename: "drake-scorpion-album-cover.jpg")
album_2.image.attach(io: File.open("/Users/apollos/Downloads/travis-scott-astroworld.jpg"), filename: "travis-scott-astroworld.jpg")
album_3.image.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/cover.jpg"), filename: "cover.jpg")
album_4.image.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/answer-cover.jpg"), filename: "answer-cover.jpg")

album_1.save!
album_2.save!
album_3.save!
album_4.save!

song_1 = Song.new(title: "Survival", album_id: 1, explicit: true, duration: "2:16" )
song_2 = Song.new(title: "Nonstop", album_id: 1, explicit: true, duration: "3:58" )
song_3 = Song.new(title: "Elevate", album_id: 1, explicit: true, duration: "3:04" )
song_4 = Song.new(title: "Emotionless", album_id: 1, explicit: true, duration: "5:02" )
song_5 = Song.new(title: "God's Plan", album_id: 1, explicit: true, duration: "3:18" )
song_6 = Song.new(title: "I'm Upset", album_id: 1, explicit: true, duration: "3:34" )
song_7 = Song.new(title: "8 Out Of 10", album_id: 1, explicit: true, duration: "3:15" )
song_8 = Song.new(title: "Mob Ties", album_id: 1, explicit: true, duration: "3:25" )
song_9 = Song.new(title: "Can't Take A Joke", album_id: 1, explicit: true, duration: "2:43" )
song_10 = Song.new(title: "Sandra's Rose", album_id: 1, explicit: true, duration: "3:36" )
song_11 = Song.new(title: "Talk Up (feat. Jay-Z)", album_id: 1, explicit: true, duration: "3:43" )
song_12 = Song.new(title: "Is There More", album_id: 1, explicit: true, duration: "3:46" )
song_13 = Song.new(title: "Peak", album_id: 1, explicit: true, duration: "3:26" )
song_14 = Song.new(title: "Summer Games", album_id: 1, explicit: false, duration: "4:07" )
song_15 = Song.new(title: "Jaded", album_id: 1, explicit: true, duration: "4:22" )
song_16 = Song.new(title: "Nice For What", album_id: 1, explicit: true, duration: "3:30" )
song_17 = Song.new(title: "Finesse", album_id: 1, explicit: false, duration: "3:02" )
song_18 = Song.new(title: "Ratchet Happy Birthday", album_id: 1, explicit: true, duration: "3:27" )
song_19 = Song.new(title: "That's How You Feel", album_id: 1, explicit: true, duration: "2:37" )
song_20 = Song.new(title: "Blue Tint", album_id: 1, explicit: true, duration: "2:42" )
song_21 = Song.new(title: "In My Feelings", album_id: 1, explicit: true, duration: "3:37" )
song_22 = Song.new(title: "Don't Matter To Me (with Michael Jackson)", album_id: 1, explicit: false, duration: "4:05" )
song_23 = Song.new(title: "After Dark (feat. Static Major & Ty Dolla $ign)", album_id: 1, explicit: true, duration: "4:49" )
song_24 = Song.new(title: "Final Fantasy", album_id: 1, explicit: true, duration: "3:39" )
song_25 = Song.new(title: "March 14", album_id: 1, explicit: true, duration: "5:09" )

song_26 = Song.new(title: "STARGAZING", album_id: 2, explicit: true, duration: "4:30" )
song_27 = Song.new(title: "CAROUSEL", album_id: 2, explicit: true, duration: "3:00" )
song_28 = Song.new(title: "SICKO MODE", album_id: 2, explicit: true, duration: "5:12" )
song_29 = Song.new(title: "R.I.P. SCREW", album_id: 2, explicit: true, duration: "3:05" )
song_30 = Song.new(title: "STOP TRYING TO BE GOD", album_id: 2, explicit: true, duration: "5:38" )
song_31 = Song.new(title: "NO BYSTANDERS", album_id: 2, explicit: true, duration: "3:38" )
song_32 = Song.new(title: "SKELETONS", album_id: 2, explicit: true, duration: "2:25" )
song_33 = Song.new(title: "WAKE UP", album_id: 2, explicit: true, duration: "3:51" )
song_34 = Song.new(title: "5% TINT", album_id: 2, explicit: true, duration: "3:16" )
song_35 = Song.new(title: "NC-17", album_id: 2, explicit: true, duration: "2:36" )
song_36 = Song.new(title: "ASTROTHUNDER", album_id: 2, explicit: true, duration: "2:22" )
song_37 = Song.new(title: "YOSEMITE", album_id: 2, explicit: true, duration: "2:30" )
song_38 = Song.new(title: "CAN'T SAY", album_id: 2, explicit: true, duration: "3:18" )
song_39 = Song.new(title: "WHO? WHAT!", album_id: 2, explicit: true, duration: "2:56" )
song_40 = Song.new(title: "BUTTERFLY EFFECT", album_id: 2, explicit: false, duration: "3:10" )
song_41 = Song.new(title: "HOUSTONFORNICATION", album_id: 2, explicit: true, duration: "3:37" )
song_42 = Song.new(title: "COFFEE BEAN", album_id: 2, explicit: true, duration: "3:29" )

song_43 = Song.new(title: "Intro：Singularity", album_id: 3, explicit: false, duration: "3:16" )
song_44 = Song.new(title: "FAKE LOVE", album_id: 3, explicit: false, duration: "4:02" )
song_45 = Song.new(title: "The Truth Untold (feat. Steve Aoki)", album_id: 3, explicit: false, duration: "4:02" )
song_46 = Song.new(title: "134340", album_id: 3, explicit: false, duration: "3:50" )
song_47 = Song.new(title: "Paradise", album_id: 3, explicit: false, duration: "3:31" )
song_48 = Song.new(title: "Love Maze", album_id: 3, explicit: false, duration: "3:41" )
song_49 = Song.new(title: "Magic Shop", album_id: 3, explicit: false, duration: "4:35" )
song_50 = Song.new(title: "Airplane pt.2", album_id: 3, explicit: false, duration: "3:38" )
song_51 = Song.new(title: "Anpanman", album_id: 3, explicit: false, duration: "3:52" )
song_52 = Song.new(title: "So What", album_id: 3, explicit: false, duration: "4:41" )
song_53 = Song.new(title: "Outro: Tear", album_id: 3, explicit: false, duration: "4:44" )

song_54 = Song.new(title: "Euphoria", album_id: 4, explicit: false, duration: "3:48" )
song_55 = Song.new(title: "Trivia 起 : Just Dance", album_id: 4, explicit: false, duration: "3:45" )
song_56 = Song.new(title: "Serendipity (Full Length Edition)", album_id: 4, explicit: false, duration: "4:36" )
song_57 = Song.new(title: "DNA", album_id: 4, explicit: false, duration: "3:43" )
song_58 = Song.new(title: "Dimple", album_id: 4, explicit: false, duration: "3:16" )
song_59 = Song.new(title: "Trivia 承 : Love", album_id: 4, explicit: false, duration: "3:45")
song_60 = Song.new(title: "Her", album_id: 4, explicit: false, duration: "3:48" )
song_61 = Song.new(title: "Singularity", album_id: 4, explicit: false, duration: "3:16" )
song_62 = Song.new(title: "Fake Love", album_id: 4, explicit: false, duration: "4:02" )
song_63 = Song.new(title: "The Truth Untold", album_id: 4, explicit: false, duration: "4:02" )
song_64 = Song.new(title: "Trivia 轉 : Seesaw", album_id: 4, explicit: false, duration: "4:06" )
song_65 = Song.new(title: "Tear", album_id: 4, explicit: false, duration: "4:44" )
song_66 = Song.new(title: "Epiphany", album_id: 4, explicit: false, duration: "4:00" )
song_67 = Song.new(title: "I'm Fine", album_id: 4, explicit: false, duration: "4:00" )
song_68 = Song.new(title: "IDOL", album_id: 4, explicit: false, duration: "3:42" )
song_69 = Song.new(title: "Answer : Love Myself", album_id: 4, explicit: false, duration: "4:11" )
song_70 = Song.new(title: "Magic Shop", album_id: 4, explicit: false, duration: "4:35" )
song_71 = Song.new(title: "Best Of Me", album_id: 4, explicit: false, duration: "3:47" )
song_72 = Song.new(title: "Airplane pt.2", album_id: 4, explicit: false, duration: "3:38" )
song_73 = Song.new(title: "Go Go", album_id: 4, explicit: false, duration: "3:55" )
song_74 = Song.new(title: "Anpanman", album_id: 4, explicit: false, duration: "3:52" )
song_75 = Song.new(title: "MIC Drop", album_id: 4, explicit: false, duration: "3:58" )
song_76 = Song.new(title: "DNA (Pedal 2 LA Mix)", album_id: 4, explicit: false, duration: "4:07" )
song_77 = Song.new(title: "FAKE LOVE (Rocking Vibe Mix)", album_id: 4, explicit: false, duration: "3:58" )
song_78 = Song.new(title: "MIC Drop (Steve Aoki Remix) [Full Length Edition]", album_id: 4, explicit: false, duration: "5:07" )
song_79 = Song.new(title: "IDOL (feat. Nicki Minaj)", album_id: 4, explicit: false, duration: "4:20" )



song_1.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-01 Survival.mp3"), filename: "1-01 Survival.mp3")
song_2.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-02 Nonstop.mp3"), filename: "1-02 Nonstop.mp3")
song_3.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-03 Elevate.mp3"), filename: "1-03 Elevate.mp3")
song_4.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-04 Emotionless.mp3"), filename: "1-04 Emotionless.mp3")
song_5.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-05 God's Plan.mp3"), filename: "1-05 God's Plan.mp3")
song_6.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-06 I'm Upset.mp3"), filename: "1-06 I'm Upset.mp3")
song_7.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-07 8 Out Of 10.mp3"), filename: "1-07 8 Out Of 10.mp3")
song_8.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-08 Mob Ties.mp3"), filename: "1-08 Mob Ties.mp3")
song_9.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-09 Can't Take a Joke.mp3"), filename: "1-09 Can't Take a Joke.mp3")
song_10.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-10 Sandra's Rose.mp3"), filename: "1-10 Sandra's Rose.mp3")
song_11.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-11 Talk Up (feat. JAY-Z).mp3"), filename: "1-11 Talk Up (feat. JAY-Z).mp3")
song_12.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/1-12 Is There More.mp3"), filename: "1-12 Is There More.mp3")
song_13.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-01 Peak.mp3"), filename: "2-01 Peak.mp3")
song_14.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-02 Summer Games.mp3"), filename: "2-02 Summer Games.mp3")
song_15.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-03 Jaded.mp3"), filename: "2-03 Jaded.mp3")
song_16.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-04 Nice For What.mp3"), filename: "2-04 Nice For What.mp3")
song_17.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-05 Finesse.mp3"), filename: "2-05 Finesse.mp3")
song_18.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-06 Ratchet Happy Birthday.mp3"), filename: "2-06 Ratchet Happy Birthday.mp3")
song_19.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-07 That's How You Feel.mp3"), filename: "2-07 That's How You Feel.mp3")
song_20.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-08-Blue-Tint.mp3"), filename: "2-08-Blue-Tint.mp3")
song_21.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-09-In-My-Feelings.mp3"), filename: "2-09-In-My-Feelings.mp3")
song_22.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-10 Don't Matter to Me (feat. Michael Jackson).mp3"), filename: "2-10 Don't Matter to Me (feat. Michael Jackson).mp3")
song_23.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-11 After Dark (feat. Static Major & Ty Dolla $ign).mp3"), filename: "2-11 After Dark (feat. Static Major & Ty Dolla $ign).mp3")
song_24.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-12 Final Fantasy.mp3"), filename: "2-12 Final Fantasy.mp3")
song_25.song_file.attach(io: File.open("/Users/apollos/Downloads/Drake-Scorpion-2018/Drake-Scorpion/2-13 March 14.mp3"), filename: "2-13 March 14.mp3")

song_26.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/01. STARGAZING.mp3"), filename: "01. STARGAZING.mp3")
song_27.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/02. CAROUSEL.mp3"), filename: "02. CAROUSEL.mp3")
song_28.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/03. SICKO MODE.mp3"), filename: "03. SICKO MODE.mp3")
song_29.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/04. R.I.P. SCREW.mp3"), filename: "04. R.I.P. SCREW.mp3")
song_30.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/05. STOP TRYING TO BE GOD.mp3"), filename: "05. STOP TRYING TO BE GOD.mp3")
song_31.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/06. NO BYSTANDERS.mp3"), filename: "06. NO BYSTANDERS.mp3")
song_32.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/07. SKELETONS.mp3"), filename: "07. SKELETONS.mp3")
song_33.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/08. WAKE UP.mp3"), filename: "08. WAKE UP.mp3")
song_34.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/09. 5% TINT.mp3"), filename: "09. 5% TINT.mp3")
song_35.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/10. NC-17.mp3"), filename: "10. NC-17.mp3")
song_36.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/11. ASTROTHUNDER.mp3"), filename: "11. ASTROTHUNDER.mp3")
song_37.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/12. YOSEMITE.mp3"), filename: "12. YOSEMITE.mp3")
song_38.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/13. CAN'T SAY.mp3"), filename: "13. CAN'T SAY.mp3")
song_39.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/14. WHO¿ WHAT!.mp3"), filename: "14. WHO¿ WHAT!.mp3")
song_40.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/15. BUTTERFLY EFFECT.mp3"), filename: "15. BUTTERFLY EFFECT.mp3")
song_41.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/16. HOUSTONFORNICATION.mp3"), filename: "16. HOUSTONFORNICATION.mp3")
song_42.song_file.attach(io: File.open("/Users/apollos/Downloads/Travis Scott-Astroworld/Travis Scott - ASTROWORLD (2018) [320]/17. COFFEE BEAN.mp3"), filename: "17. COFFEE BEAN.mp3")

song_43.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：01. 방탄소년단 - Intro：Singularity.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：01. 방탄소년단 - Intro：Singularity.mp3")
song_44.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：02. 방탄소년단 - Fake Love.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：02. 방탄소년단 - Fake Love.mp3")
song_45.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：03. 방탄소년단 - 전하지 못한 진심 (Feat. Steve Aoki).mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：03. 방탄소년단 - 전하지 못한 진심 (Feat. Steve Aoki).mp3")
song_46.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：04. 방탄소년단 - 134340.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：04. 방탄소년단 - 134340.mp3")
song_47.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：05. 방탄소년단 - 낙원.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：05. 방탄소년단 - 낙원.mp3")
song_48.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：06. 방탄소년단 - Love Maze.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：06. 방탄소년단 - Love Maze.mp3")
song_49.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：07. 방탄소년단 - Magic Shop.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：07. 방탄소년단 - Magic Shop.mp3")
song_50.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：08. 방탄소년단 - Airplane pt.2.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：08. 방탄소년단 - Airplane pt.2.mp3")
song_51.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：09. 방탄소년단 - Anpanman.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：09. 방탄소년단 - Anpanman.mp3")
song_52.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：10. 방탄소년단 - So What.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：10. 방탄소년단 - So What.mp3")
song_53.song_file.attach(io: File.open("/Users/apollos/Downloads/방탄소년단：BTS/[2018.05.18] 방탄소년단 [3집] LOVE YOURSELF 轉 `Tear`/[3집] LOVE YOURSELF 轉 'Tear'：11. 방탄소년단 - Outro：Tear.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：11. 방탄소년단 - Outro：Tear.mp3")

song_54.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/01. Euphoria.mp3"), filename: "01. Euphoria.mp3")
song_55.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/02. Trivia 起 _ Just Dance.mp3"), filename: "02. Trivia 起 _ Just Dance.mp3")
song_56.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/03. Serendipity (Full Length Edition).mp3"), filename: "03. Serendipity (Full Length Edition).mp3")
song_57.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/04. DNA.mp3"), filename: "04. DNA.mp3")
song_58.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/05. 보조개.mp3"), filename: "05. 보조개.mp3")
song_59.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/06. Trivia 承 _ Love.mp3"), filename: "06. Trivia 承 _ Love.mp3")
song_60.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/07. Her.mp3"), filename: "07. Her.mp3")
song_61.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/08. Singularity.mp3"), filename: "08. Singularity.mp3")
song_62.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/09. FAKE LOVE.mp3"), filename: "09. FAKE LOVE.mp3")
song_63.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/10. 전하지 못한 진심 (Feat. Steve Aoki).mp3"), filename: "10. 전하지 못한 진심 (Feat. Steve Aoki).mp3")
song_64.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/11. Trivia 轉 _ Seesaw.mp3"), filename: "11. Trivia 轉 _ Seesaw.mp3")
song_65.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/12. Tear.mp3"), filename: "12. Tear.mp3")
song_66.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/13. Epiphany.mp3"), filename: "13. Epiphany.mp3")
song_67.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/14. I`m Fine.mp3"), filename: "14. I`m Fine.mp3")
song_68.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/15. IDOL.mp3"), filename: "15. IDOL.mp3")
song_69.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 1/16. Answer _ Love Myself.mp3"), filename: "16. Answer _ Love Myself.mp3")

song_70.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/01. Magic Shop.mp3"), filename: "01. Magic Shop.mp3")
song_71.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/02. Best Of Me.mp3"), filename: "02. Best Of Me.mp3")
song_72.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/03. Airplane pt.2.mp3"), filename: "03. Airplane pt.2.mp3")
song_73.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/04. 고민보다 Go.mp3"), filename: "04. 고민보다 Go.mp3")
song_74.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/05. Anpanman.mp3"), filename: "05. Anpanman.mp3")
song_75.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/06. MIC Drop.mp3"), filename: "06. MIC Drop.mp3")
song_76.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/07. DNA (Pedal 2 LA Mix).mp3"), filename: "07. DNA (Pedal 2 LA Mix).mp3")
song_77.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/08. FAKE LOVE (Rocking Vibe Mix).mp3"), filename: "08. FAKE LOVE (Rocking Vibe Mix).mp3")
song_78.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/09. MIC Drop (Steve Aoki Remix) (Full Length Edition).mp3"), filename: "09. MIC Drop (Steve Aoki Remix) (Full Length Edition).mp3")
song_79.song_file.attach(io: File.open("/Users/apollos/Downloads/BTS-Love Yourself 'ANSWER'/CD 2/10. IDOL (Feat. Nicki Minaj).mp3"), filename: "10. IDOL (Feat. Nicki Minaj).mp3")

song_1.save!
song_2.save!
song_3.save!
song_4.save!
song_5.save!
song_6.save!
song_7.save!
song_8.save!
song_9.save!
song_10.save!
song_11.save!
song_12.save!
song_13.save!
song_14.save!
song_15.save!
song_16.save!
song_17.save!
song_18.save!
song_19.save!
song_20.save!
song_21.save!
song_22.save!
song_23.save!
song_24.save!
song_25.save!
song_26.save!
song_27.save!
song_28.save!
song_29.save!
song_30.save!
song_31.save!
song_32.save!
song_33.save!
song_34.save!
song_35.save!
song_36.save!
song_37.save!
song_38.save!
song_39.save!
song_40.save!
song_41.save!
song_42.save!
song_43.save!
song_44.save!
song_45.save!
song_46.save!
song_47.save!
song_48.save!
song_49.save!
song_50.save!
song_51.save!
song_52.save!
song_53.save!
song_54.save!
song_55.save!
song_56.save!
song_57.save!
song_58.save!
song_59.save!
song_60.save!
song_61.save!
song_62.save!
song_63.save!
song_64.save!
song_65.save!
song_66.save!
song_67.save!
song_68.save!
song_69.save!
song_70.save!
song_71.save!
song_72.save!
song_73.save!
song_74.save!
song_75.save!
song_76.save!
song_77.save!
song_78.save!
song_79.save!

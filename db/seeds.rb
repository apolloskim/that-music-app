# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

require 'net/http'


Artist.destroy_all
Album.destroy_all
Song.destroy_all
User.destroy_all
Playlist.destroy_all
Playlistsong.destroy_all

user_1 = User.new(username: "pikachu", password: "pokemon")


artist_1 = Artist.create!(name: "Drake", thumbnail_image: "https://i.scdn.co/image/012ecd119617ac24ab56620ace4b81735b172686", main_image: "https://i.scdn.co/image/a2ee94afb84f525ed12c58a60bf4d269b47b603a")
artist_2 = Artist.create!(name: "Travis Scott", thumbnail_image: "https://i.scdn.co/image/dc5eba5e032c2e5bc4d42c89d61ffee5875c981f", main_image: "https://i.scdn.co/image/2b2fdb7cec7dc92f14a3e8b26a3d70abe7cc1344")
artist_3 = Artist.create!(name: "BTS", thumbnail_image: "https://i.scdn.co/image/0c9057cb30520f9f883a220051260fc66a2f3ffa", main_image: "https://i.scdn.co/image/4ceff7deeccd66fb87cbe51d5aab598af8e99ff0")
artist_4 = Artist.create!(name: "Ariana Grande", thumbnail_image: "https://i.scdn.co/image/25dd6de55a74237ae84e1b53e083bbd5aadade39", main_image: "https://i.scdn.co/image/6142da41a093913f20322760226e542a0f753872")
artist_5 = Artist.create!(name: "Majid Jordan", thumbnail_image: "https://i.scdn.co/image/ac02003a89bd2d77d8277d06066a9c9c15bf89d6", main_image: "https://i.scdn.co/image/93877227805a55988191a4f9a323dbf01c2bb72b")

album_1 = Album.create!(title: "Scorpion", year: 2018, genre: "hip-hop", artist_id: artist_1.id, publisher: "© 2018 Young Money/Cash Money Records", cover_image: "https://i.scdn.co/image/542d705154be4049fc927050d006987e63739bbd")
album_2 = Album.create!(title: "ASTROWORLD", year: 2018, genre: "hip-hop", artist_id: artist_2.id, publisher: "℗ 2018 Epic Records, a division of Sony Music Entertainment. With Cactus Jack and Grand Hustle.", cover_image: "https://i.scdn.co/image/cdca7dc20c778ada42fb18506ea1f26857f01d17")
album_3 = Album.create!(title: "Love Yourself 轉 'Tear'", year: 2018, genre: "k-pop", artist_id: artist_3.id, publisher: "© 2018 Bighit Entertainment", cover_image: "https://i.scdn.co/image/2bb8b49298155123402a78f1a68a245c0051c1c0")
album_4 = Album.create!(title: "Love Yourself 結 'Answer'", year: 2018, genre: "k-pop", artist_id: artist_3.id, publisher: "© 2018 Bighit Entertainment", cover_image: "https://i.scdn.co/image/09b29171880b765c0632eaf44d10d18178a3f2c5")
album_5 = Album.create!(title: "Sweetener", year: 2018, genre: "pop", artist_id: artist_4.id, publisher: "© 2018 Republic Records, a Division of UMG Recordings, Inc.", cover_image: "https://i.scdn.co/image/381891c42f301e0abaa1b1dcfbf0390334e698eb")
album_6 = Album.create!(title: "thank u, next", year: 2018, genre: "pop", artist_id: artist_4.id, publisher: "© 2018 Republic Records, a Division of UMG Recordings, Inc.", cover_image: "https://i.scdn.co/image/77eb7c17cafe550337bbb4711235a0128db66a66")
album_7 = Album.create!(title: "The Space Between", year: 2017, genre: "r&b", artist_id: artist_5.id, publisher: "© 2017 OVO Sound/Warner Bros. Records Inc.", cover_image: "https://i.scdn.co/image/8f8a22af30187754febdd377717551107ea510f0")
album_8 = Album.create!(title: "All Over You", year: 2018, genre: "r&b", artist_id: artist_5.id, publisher: "© 2017 OVO Sound/Warner Bros. Records Inc.", cover_image: "https://i.scdn.co/image/bc466b0d038e515a66b120af07bb36467e021ba8")

song_1 = Song.new(title: "Survival", album_id: album_1.id, explicit: true, duration: "2:16" )
song_2 = Song.new(title: "Nonstop", album_id: album_1.id, explicit: true, duration: "3:58" )
song_3 = Song.new(title: "Elevate", album_id: album_1.id, explicit: true, duration: "3:04" )
song_4 = Song.new(title: "Emotionless", album_id: album_1.id, explicit: true, duration: "5:02" )
song_5 = Song.new(title: "God's Plan", album_id: album_1.id, explicit: true, duration: "3:18" )
song_6 = Song.new(title: "I'm Upset", album_id: album_1.id, explicit: true, duration: "3:34" )
song_7 = Song.new(title: "8 Out Of 10", album_id: album_1.id, explicit: true, duration: "3:15" )
song_8 = Song.new(title: "Mob Ties", album_id: album_1.id, explicit: true, duration: "3:25" )
song_9 = Song.new(title: "Can't Take A Joke", album_id: album_1.id, explicit: true, duration: "2:43" )
song_10 = Song.new(title: "Sandra's Rose", album_id: album_1.id, explicit: true, duration: "3:36" )
song_11 = Song.new(title: "Talk Up (feat. Jay-Z)", album_id: album_1.id, explicit: true, duration: "3:43" )
song_12 = Song.new(title: "Is There More", album_id: album_1.id, explicit: true, duration: "3:46" )
song_13 = Song.new(title: "Peak", album_id: album_1.id, explicit: true, duration: "3:26" )
song_14 = Song.new(title: "Summer Games", album_id: album_1.id, explicit: false, duration: "4:07" )
song_15 = Song.new(title: "Jaded", album_id: album_1.id, explicit: true, duration: "4:22" )
song_16 = Song.new(title: "Nice For What", album_id: album_1.id, explicit: true, duration: "3:30" )
song_17 = Song.new(title: "Finesse", album_id: album_1.id, explicit: false, duration: "3:02" )
song_18 = Song.new(title: "Ratchet Happy Birthday", album_id: album_1.id, explicit: true, duration: "3:27" )
song_19 = Song.new(title: "That's How You Feel", album_id: album_1.id, explicit: true, duration: "2:37" )
song_20 = Song.new(title: "Blue Tint", album_id: album_1.id, explicit: true, duration: "2:42" )
song_21 = Song.new(title: "In My Feelings", album_id: album_1.id, explicit: true, duration: "3:37" )
song_22 = Song.new(title: "Don't Matter To Me (with Michael Jackson)", album_id: album_1.id, explicit: false, duration: "4:05" )
song_23 = Song.new(title: "After Dark (feat. Static Major & Ty Dolla $ign)", album_id: album_1.id, explicit: true, duration: "4:49" )
song_24 = Song.new(title: "Final Fantasy", album_id: album_1.id, explicit: true, duration: "3:39" )
song_25 = Song.new(title: "March 14", album_id: album_1.id, explicit: true, duration: "5:09" )

song_26 = Song.new(title: "STARGAZING", album_id: album_2.id, explicit: true, duration: "4:30" )
song_27 = Song.new(title: "CAROUSEL", album_id: album_2.id, explicit: true, duration: "3:00" )
song_28 = Song.new(title: "SICKO MODE", album_id: album_2.id, explicit: true, duration: "5:12" )
song_29 = Song.new(title: "R.I.P. SCREW", album_id: album_2.id, explicit: true, duration: "3:05" )
song_30 = Song.new(title: "STOP TRYING TO BE GOD", album_id: album_2.id, explicit: true, duration: "5:38" )
song_31 = Song.new(title: "NO BYSTANDERS", album_id: album_2.id, explicit: true, duration: "3:38" )
song_32 = Song.new(title: "SKELETONS", album_id: album_2.id, explicit: true, duration: "2:25" )
song_33 = Song.new(title: "WAKE UP", album_id: album_2.id, explicit: true, duration: "3:51" )
song_34 = Song.new(title: "5% TINT", album_id: album_2.id, explicit: true, duration: "3:16" )
song_35 = Song.new(title: "NC-17", album_id: album_2.id, explicit: true, duration: "2:36" )
song_36 = Song.new(title: "ASTROTHUNDER", album_id: album_2.id, explicit: true, duration: "2:2`2" )
song_37 = Song.new(title: "YOSEMITE", album_id: album_2.id, explicit: true, duration: "2:30" )
song_38 = Song.new(title: "CAN'T SAY", album_id: album_2.id, explicit: true, duration: "3:18" )
song_39 = Song.new(title: "WHO? WHAT!", album_id: album_2.id, explicit: true, duration: "2:56" )
song_40 = Song.new(title: "BUTTERFLY EFFECT", album_id: album_2.id, explicit: false, duration: "3:10" )
song_41 = Song.new(title: "HOUSTONFORNICATION", album_id: album_2.id, explicit: true, duration: "3:37" )
song_42 = Song.new(title: "COFFEE BEAN", album_id: album_2.id, explicit: true, duration: "3:29" )

song_43 = Song.new(title: "Intro：Singularity", album_id: album_3.id, explicit: false, duration: "3:16" )
song_44 = Song.new(title: "FAKE LOVE", album_id: album_3.id, explicit: false, duration: "4:02" )
song_45 = Song.new(title: "The Truth Untold (feat. Steve Aoki)", album_id: album_3.id, explicit: false, duration: "4:02" )
song_46 = Song.new(title: "134340", album_id: album_3.id, explicit: false, duration: "3:50" )
song_47 = Song.new(title: "Paradise", album_id: album_3.id, explicit: false, duration: "3:31" )
song_48 = Song.new(title: "Love Maze", album_id: album_3.id, explicit: false, duration: "3:41" )
song_49 = Song.new(title: "Magic Shop", album_id: album_3.id, explicit: false, duration: "4:35" )
song_50 = Song.new(title: "Airplane pt.2", album_id: album_3.id, explicit: false, duration: "3:38" )
song_51 = Song.new(title: "Anpanman", album_id: album_3.id, explicit: false, duration: "3:52" )
song_52 = Song.new(title: "So What", album_id: album_3.id, explicit: false, duration: "4:41" )
song_53 = Song.new(title: "Outro: Tear", album_id: album_3.id, explicit: false, duration: "4:44" )

song_54 = Song.new(title: "Euphoria", album_id: album_4.id, explicit: false, duration: "3:48" )
song_55 = Song.new(title: "Trivia 起 : Just Dance", album_id: album_4.id, explicit: false, duration: "3:45" )
song_56 = Song.new(title: "Serendipity (Full Length Edition)", album_id: album_4.id, explicit: false, duration: "4:36" )
song_57 = Song.new(title: "DNA", album_id: album_4.id, explicit: false, duration: "3:43" )
song_58 = Song.new(title: "Dimple", album_id: album_4.id, explicit: false, duration: "3:16" )
song_59 = Song.new(title: "Trivia 承 : Love", album_id: album_4.id, explicit: false, duration: "3:45")
song_60 = Song.new(title: "Her", album_id: album_4.id, explicit: false, duration: "3:48" )
song_61 = Song.new(title: "Singularity", album_id: album_4.id, explicit: false, duration: "3:16" )
song_62 = Song.new(title: "Fake Love", album_id: album_4.id, explicit: false, duration: "4:02" )
song_63 = Song.new(title: "The Truth Untold", album_id: album_4.id, explicit: false, duration: "4:02" )
song_64 = Song.new(title: "Trivia 轉 : Seesaw", album_id: album_4.id, explicit: false, duration: "4:06" )
song_65 = Song.new(title: "Tear", album_id: album_4.id, explicit: false, duration: "4:44" )
song_66 = Song.new(title: "Epiphany", album_id: album_4.id, explicit: false, duration: "4:00" )
song_67 = Song.new(title: "I'm Fine", album_id: album_4.id, explicit: false, duration: "4:00" )
song_68 = Song.new(title: "IDOL", album_id: album_4.id, explicit: false, duration: "3:42" )
song_69 = Song.new(title: "Answer : Love Myself", album_id: album_4.id, explicit: false, duration: "4:11" )
song_70 = Song.new(title: "Magic Shop", album_id: album_4.id, explicit: false, duration: "4:35" )
song_71 = Song.new(title: "Best Of Me", album_id: album_4.id, explicit: false, duration: "3:47" )
song_72 = Song.new(title: "Airplane pt.2", album_id: album_4.id, explicit: false, duration: "3:38" )
song_73 = Song.new(title: "Go Go", album_id: album_4.id, explicit: false, duration: "3:55" )
song_74 = Song.new(title: "Anpanman", album_id: album_4.id, explicit: false, duration: "3:52" )
song_75 = Song.new(title: "MIC Drop", album_id: album_4.id, explicit: false, duration: "3:58" )
song_76 = Song.new(title: "DNA (Pedal 2 LA Mix)", album_id: album_4.id, explicit: false, duration: "4:07" )
song_77 = Song.new(title: "FAKE LOVE (Rocking Vibe Mix)", album_id: album_4.id, explicit: false, duration: "3:58" )
song_78 = Song.new(title: "MIC Drop (Steve Aoki Remix) [Full Length Edition]", album_id: album_4.id, explicit: false, duration: "5:07" )
song_79 = Song.new(title: "IDOL (feat. Nicki Minaj)", album_id: album_4.id, explicit: false, duration: "4:20" )


song_80 = Song.new(title: "raindrops (an angel cried)", album_id: album_5.id, explicit: true, duration: "0:37" )
song_81 = Song.new(title: "blazed (feat. Pharrell Williams)", album_id: album_5.id, explicit: true, duration: "3:16" )
song_82 = Song.new(title: "the light is coming (feat. Nicki Minaj)", album_id: album_5.id, explicit: true, duration: "3:48" )
song_83 = Song.new(title: "R.E.M", album_id: album_5.id, explicit: true, duration: "4:05" )
song_84 = Song.new(title: "God is a woman", album_id: album_5.id, explicit: true, duration: "3:17" )
song_85 = Song.new(title: "sweetener", album_id: album_5.id, explicit: true, duration: "3:28" )
song_86 = Song.new(title: "successful", album_id: album_5.id, explicit: true, duration: "3:47" )
song_87 = Song.new(title: "everytime", album_id: album_5.id, explicit: true, duration: "2:52" )
song_88 = Song.new(title: "breathin", album_id: album_5.id, explicit: true, duration: "3:18" )
song_89 = Song.new(title: "no tears left to cry", album_id: album_5.id, explicit: false, duration: "3:25" )
song_90 = Song.new(title: "borderline (feat. Missy Elliott)", album_id: album_5.id, explicit: true, duration: "2:57" )
song_91 = Song.new(title: "better off", album_id: album_5.id, explicit: true, duration: "2:51" )
song_92 = Song.new(title: "goodnight n go", album_id: album_5.id, explicit: true, duration: "3:09" )
song_93 = Song.new(title: "pete davidson", album_id: album_5.id, explicit: true, duration: "1:13" )
song_94 = Song.new(title: "get well soon", album_id: album_5.id, explicit: true, duration: "5:22" )

song_95 = Song.new(title: "thank u, next", album_id: album_6.id, explicit: true, duration: "3:27" )

song_96 = Song.new(title: "Intro", album_id: album_7.id, explicit: false, duration: "1:07" )
song_97 = Song.new(title: "Gave Your Love Away", album_id: album_7.id, explicit: false, duration: "4:45" )
song_98 = Song.new(title: "OG Heartthrob", album_id: album_7.id, explicit: false, duration: "4:28" )
song_99 = Song.new(title: "Body Talk", album_id: album_7.id, explicit: false, duration: "3:27" )
song_100 = Song.new(title: "Not Ashamed", album_id: album_7.id, explicit: false, duration: "4:00" )
song_101 = Song.new(title: "One I Want (feat. PARTYNEXTDOOR)", album_id: album_7.id, explicit: false, duration: "3:32" )
song_102 = Song.new(title: "You", album_id: album_7.id, explicit: false, duration: "5:42" )
song_103 = Song.new(title: "Phases", album_id: album_7.id, explicit: false, duration: "3:37" )
song_104 = Song.new(title: "Asleep", album_id: album_7.id, explicit: false, duration: "3:49" )
song_105 = Song.new(title: "What You Do to Me", album_id: album_7.id, explicit: false, duration: "3:36" )
song_106 = Song.new(title: "My Imagination (feat. dvsn)", album_id: album_7.id, explicit: false, duration: "3:45" )
song_107 = Song.new(title: "The Space Between", album_id: album_7.id, explicit: false, duration: "3:25" )
song_108 = Song.new(title: "Outro", album_id: album_7.id, explicit: false, duration: "4:21" )

song_109 = Song.new(title: "All Over You", album_id: album_8.id, explicit: false, duration: "3:35" )


song_1.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-01+Survival.mp3"), filename: "1-01 Survival.mp3")
song_2.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-02+Nonstop.mp3"), filename: "1-02 Nonstop.mp3")
song_3.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-03+Elevate.mp3"), filename: "1-03 Elevate.mp3")
song_4.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-04+Emotionless.mp3"), filename: "1-04 Emotionless.mp3")
song_5.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-05+God's+Plan.mp3"), filename: "1-05 God's Plan.mp3")
song_6.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-06+I'm+Upset.mp3"), filename: "1-06 I'm Upset.mp3")
song_7.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-07+8+Out+Of+10.mp3"), filename: "1-07 8 Out Of 10.mp3")
song_8.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-08+Mob+Ties.mp3"), filename: "1-08 Mob Ties.mp3")
song_9.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-09+Can't+Take+a+Joke.mp3"), filename: "1-09 Can't Take a Joke.mp3")
song_10.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-10+Sandra's+Rose.mp3"), filename: "1-10 Sandra's Rose.mp3")
song_11.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-11+Talk+Up+(feat.+JAY-Z).mp3"), filename: "1-11 Talk Up (feat. JAY-Z).mp3")
song_12.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/1-12+Is+There+More.mp3"), filename: "1-12 Is There More.mp3")
song_13.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-01+Peak.mp3"), filename: "2-01 Peak.mp3")
song_14.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-02+Summer+Games.mp3"), filename: "2-02 Summer Games.mp3")
song_15.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-03+Jaded.mp3"), filename: "2-03 Jaded.mp3")
song_16.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-04+Nice+For+What.mp3"), filename: "2-04 Nice For What.mp3")
song_17.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-05+Finesse.mp3"), filename: "2-05 Finesse.mp3")
song_18.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-06+Ratchet+Happy+Birthday.mp3"), filename: "2-06 Ratchet Happy Birthday.mp3")
song_19.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-07+That's+How+You+Feel.mp3"), filename: "2-07 That's How You Feel.mp3")
song_20.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-08-Blue-Tint.mp3"), filename: "2-08-Blue-Tint.mp3")
song_21.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-09-In-My-Feelings.mp3"), filename: "2-09-In-My-Feelings.mp3")
song_22.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-10+Don't+Matter+to+Me+(feat.+Michael+Jackson).mp3"), filename: "2-10 Don't Matter to Me (feat. Michael Jackson).mp3")
song_23.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-11+After+Dark+(feat.+Static+Major+%26+Ty+Dolla+%24ign).mp3"), filename: "2-11 After Dark (feat. Static Major & Ty Dolla $ign).mp3")
song_24.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-12+Final+Fantasy.mp3"), filename: "2-12 Final Fantasy.mp3")
song_25.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Drake-Scorpion/2-13+March+14.mp3"), filename: "2-13 March 14.mp3")

song_26.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/01.+STARGAZING.mp3"), filename: "01. STARGAZING.mp3")
song_27.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/02.+CAROUSEL.mp3"), filename: "02. CAROUSEL.mp3")
song_28.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/03.+SICKO+MODE.mp3"), filename: "03. SICKO MODE.mp3")
song_29.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/04.+R.I.P.+SCREW.mp3"), filename: "04. R.I.P. SCREW.mp3")
song_30.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/05.+STOP+TRYING+TO+BE+GOD.mp3"), filename: "05. STOP TRYING TO BE GOD.mp3")
song_31.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/06.+NO+BYSTANDERS.mp3"), filename: "06. NO BYSTANDERS.mp3")
song_32.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/07.+SKELETONS.mp3"), filename: "07. SKELETONS.mp3")
song_33.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/08.+WAKE+UP.mp3"), filename: "08. WAKE UP.mp3")
song_34.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/09.+5%25+TINT.mp3"), filename: "09. 5% TINT.mp3")
song_35.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/10.+NC-17.mp3"), filename: "10. NC-17.mp3")
song_36.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/11.+ASTROTHUNDER.mp3"), filename: "11. ASTROTHUNDER.mp3")
song_37.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/12.+YOSEMITE.mp3"), filename: "12. YOSEMITE.mp3")
song_38.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/13.+CAN'T+SAY.mp3"), filename: "13. CAN'T SAY.mp3")
song_39.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/14.+WHO%C2%BF+WHAT!.mp3"), filename: "14. WHO¿ WHAT!.mp3")
song_40.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/15.+BUTTERFLY+EFFECT.mp3"), filename: "15. BUTTERFLY EFFECT.mp3")
song_41.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/16.+HOUSTONFORNICATION.mp3"), filename: "16. HOUSTONFORNICATION.mp3")
song_42.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Travis+Scott+-+ASTROWORLD+(2018)+%5B320%5D/17.+COFFEE+BEAN.mp3"), filename: "17. COFFEE BEAN.mp3")

song_43.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A01.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+Intro%EF%BC%9ASingularity.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：01. 방탄소년단 - Intro：Singularity.mp3")
song_44.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A02.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+Fake+Love.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：02. 방탄소년단 - Fake Love.mp3")
song_45.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A03.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%92%E1%85%A1%E1%84%8C%E1%85%B5+%E1%84%86%E1%85%A9%E1%86%BA%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%B7+(Feat.+Steve+Aoki).mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：03. 방탄소년단 - 전하지 못한 진심 (Feat. Steve Aoki).mp3")
song_46.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A04.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+134340.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：04. 방탄소년단 - 134340.mp3")
song_47.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A05.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+%E1%84%82%E1%85%A1%E1%86%A8%E1%84%8B%E1%85%AF%E1%86%AB.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：05. 방탄소년단 - 낙원.mp3")
song_48.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A06.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+Love+Maze.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：06. 방탄소년단 - Love Maze.mp3")
song_49.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A07.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+Magic+Shop.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：07. 방탄소년단 - Magic Shop.mp3")
song_50.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A08.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+Airplane+pt.2.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：08. 방탄소년단 - Airplane pt.2.mp3")
song_51.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A09.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+Anpanman.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：09. 방탄소년단 - Anpanman.mp3")
song_52.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A10.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+So+What.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：10. 방탄소년단 - So What.mp3")
song_53.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/%5B2018.05.18%5D+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+%60Tear%60/%5B3%E1%84%8C%E1%85%B5%E1%86%B8%5D+LOVE+YOURSELF+%E8%BD%89+'Tear'%EF%BC%9A11.+%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB+-+Outro%EF%BC%9ATear.mp3"), filename: "[3집] LOVE YOURSELF 轉 'Tear'：11. 방탄소년단 - Outro：Tear.mp3")

song_54.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/01.+Euphoria.mp3"), filename: "01. Euphoria.mp3")
song_55.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/02.+Trivia+%E8%B5%B7+_+Just+Dance.mp3"), filename: "02. Trivia 起 _ Just Dance.mp3")
song_56.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/03.+Serendipity+(Full+Length+Edition).mp3"), filename: "03. Serendipity (Full Length Edition).mp3")
song_57.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/04.+DNA.mp3"), filename: "04. DNA.mp3")
song_58.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/05.+%E1%84%87%E1%85%A9%E1%84%8C%E1%85%A9%E1%84%80%E1%85%A2.mp3"), filename: "05. 보조개.mp3")
song_59.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/06.+Trivia+%E6%89%BF+_+Love.mp3"), filename: "06. Trivia 承 _ Love.mp3")
song_60.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/07.+Her.mp3"), filename: "07. Her.mp3")
song_61.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/08.+Singularity.mp3"), filename: "08. Singularity.mp3")
song_62.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/09.+FAKE+LOVE.mp3"), filename: "09. FAKE LOVE.mp3")
song_63.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/10.+%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%92%E1%85%A1%E1%84%8C%E1%85%B5+%E1%84%86%E1%85%A9%E1%86%BA%E1%84%92%E1%85%A1%E1%86%AB+%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%86%B7+(Feat.+Steve+Aoki).mp3"), filename: "10. 전하지 못한 진심 (Feat. Steve Aoki).mp3")
song_64.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/11.+Trivia+%E8%BD%89+_+Seesaw.mp3"), filename: "11. Trivia 轉 _ Seesaw.mp3")
song_65.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/12.+Tear.mp3"), filename: "12. Tear.mp3")
song_66.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/13.+Epiphany.mp3"), filename: "13. Epiphany.mp3")
song_67.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/14.+I%60m+Fine.mp3"), filename: "14. I`m Fine.mp3")
song_68.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/15.+IDOL.mp3"), filename: "15. IDOL.mp3")
song_69.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+1/16.+Answer+_+Love+Myself.mp3"), filename: "16. Answer _ Love Myself.mp3")

song_70.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/01.+Magic+Shop.mp3"), filename: "01. Magic Shop.mp3")
song_71.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/02.+Best+Of+Me.mp3"), filename: "02. Best Of Me.mp3")
song_72.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/03.+Airplane+pt.2.mp3"), filename: "03. Airplane pt.2.mp3")
song_73.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/04.+%E1%84%80%E1%85%A9%E1%84%86%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A9%E1%84%83%E1%85%A1+Go.mp3"), filename: "04. 고민보다 Go.mp3")
song_74.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/05.+Anpanman.mp3"), filename: "05. Anpanman.mp3")
song_75.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/06.+MIC+Drop.mp3"), filename: "06. MIC Drop.mp3")
song_76.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/07.+DNA+(Pedal+2+LA+Mix).mp3"), filename: "07. DNA (Pedal 2 LA Mix).mp3")
song_77.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/08.+FAKE+LOVE+(Rocking+Vibe+Mix).mp3"), filename: "08. FAKE LOVE (Rocking Vibe Mix).mp3")
song_78.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/09.+MIC+Drop+(Steve+Aoki+Remix)+(Full+Length+Edition).mp3"), filename: "09. MIC Drop (Steve Aoki Remix) (Full Length Edition).mp3")
song_79.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/BTS-Love+Yourself+'ANSWER'/CD+2/10.+IDOL+(Feat.+Nicki+Minaj).mp3"), filename: "10. IDOL (Feat. Nicki Minaj).mp3")

song_80.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/1.+raindrops+(an+angel+cried).mp3"), filename: "1.+raindrops+(an+angel+cried).mp3")
song_81.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/2.+blazed.mp3"), filename: "2.+blazed.mp3")
song_82.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/3.+the+light+is+coming.mp3"), filename: "3.+the+light+is+coming.mp3")
song_83.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/4.+R.E.M.mp3"), filename: "4.+R.E.M.mp3")
song_84.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/5.+God+is+a+woman.mp3"), filename: "5.+God+is+a+woman.mp3")
song_85.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/6.+sweetener.mp3"), filename: "6.+sweetener.mp3")
song_86.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/7.+successful.mp3"), filename: "7.+successful.mp3")
song_87.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/8.+everytime.mp3"), filename: "8.+everytime.mp3")
song_88.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/9.+breathin.mp3"), filename: "9.+breathin.mp3")
song_89.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/10.+no+tears+left+to+cry.mp3"), filename: "10.+no+tears+left+to+cry.mp3")
song_90.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/11.+borderline.mp3"), filename: "11.+borderline.mp3")
song_91.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/12.+better+off.mp3"), filename: "12.+better+off.mp3")
song_92.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/13.+goodnight+n+go.mp3"), filename: "13.+goodnight+n+go.mp3")
song_93.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/14.+pete+davidson.mp3"), filename: "14.+pete+davidson.mp3")
song_94.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande+-+Sweetener+(+320+kbps)/15.+get+well+soon.mp3"), filename: "15.+get+well+soon.mp3")


song_95.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Ariana+Grande-Thank+You+Next.mp3"), filename: "Ariana+Grande-Thank+You+Next.mp3")

song_96.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/01+Intro.mp3"), filename: "01+Intro.mp3")
song_97.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/02+Gave+Your+Love+Away.mp3"), filename: "02+Gave+Your+Love+Away.mp3")
song_98.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/03+OG+Heartthrob.mp3"), filename: "03+OG+Heartthrob.mp3")
song_99.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/04+Body+Talk.mp3"), filename: "04+Body+Talk.mp3")
song_100.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/05+Not+Ashamed.mp3"), filename: "05+Not+Ashamed.mp3")
song_101.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/06+One+I+Want+(feat.+PARTYNEXTDOOR).mp3"), filename: "06+One+I+Want+(feat.+PARTYNEXTDOOR).mp3")
song_102.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/07+You.mp3"), filename: "07+You.mp3")
song_103.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/08+Phases.mp3"), filename: "08+Phases.mp3")
song_104.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/09+Asleep.mp3"), filename: "09+Asleep.mp3")
song_105.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/10+What+You+Do+to+Me.mp3"), filename: "10+What+You+Do+to+Me.mp3")
song_106.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/11+My+Imagination+(feat.+dvsn).mp3"), filename: "11+My+Imagination+(feat.+dvsn).mp3")
song_107.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/12+The+Space+Between.mp3"), filename: "12+The+Space+Between.mp3")
song_108.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid+Jordan+-+The+Space+Between+(2017)+(Mp3+320kbps)+%5BHunter%5D/Majid+Jordan+-+The+Space+Between+(2017)/13+Outro.mp3"), filename: "13+Outro.mp3")

song_109.song_file.attach(io: EzDownload.open("https://s3.amazonaws.com/thatmusicapp-dev/Majid_Jordan_-_All_Over_You_CDQ_.mp3"), filename: "Majid_Jordan_-_All_Over_You_CDQ_.mp3")



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
song_80.save!
song_81.save!
song_82.save!
song_83.save!
song_84.save!
song_85.save!
song_86.save!
song_87.save!
song_88.save!
song_89.save!
song_90.save!
song_91.save!
song_92.save!
song_93.save!
song_94.save!
song_95.save!
song_96.save!
song_97.save!
song_98.save!
song_99.save!
song_100.save!
song_101.save!
song_102.save!
song_103.save!
song_104.save!
song_105.save!
song_106.save!
song_107.save!
song_108.save!
song_109.save!

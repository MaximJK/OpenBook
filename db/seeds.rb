# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Table name: books
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author     :string           not null
#  body       :string
#  cover_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

Book.create!(:title => "The Man Who Was Thursday",:author => "G.K. Chesterton", :body => "G. K. Chesterton's surreal masterpiece is a psychological thriller that centers on seven anarchists in turn-of-the-century London who call themselves by the names of the days of the week. Chesterton explores the meanings of their disguised identities in what is a fascinating mystery and, ultimately, a spellbinding allegory.

As Jonathan Lethem remarks in his Introduction, The real characters are the ideas. Chesterton's nutty agenda is really quite simple: to expose moral relativism and parlor nihilism for the devils he believes them to be. This wouldn't be interesting at all, though, if he didn't also show such passion for giving the devil his due. He animates the forces of chaos and anarchy with every ounce of imaginative verve and rhetorical force in his body.",
:cover_url => "https://3m7ajlsrzj92lfd1hu16hu7vc-wpengine.netdna-ssl.com/wp-content/uploads/2014/02/Chesterton-Cov.jpg")
Book.create!(:title => "The Magus",:author => "John Fowles",:body => "This daring literary thriller, rich with eroticism and suspense, is one of John Fowles's best-loved and bestselling novels and has contributed significantly to his international reputation as a writer of the first degree. At the center of The Magus is Nicholas Urfe, a young Englishman who accepts a teaching position on a remote Greek island, where he befriends a local millionaire. The friendship soon evolves into a deadly game, in which reality and fantasy are deliberately manipulated, and Nicholas finds that he must fight not only for his sanity but for his very survival.",:cover_url => "https://upload.wikimedia.org/wikipedia/en/e/ef/Themagus_cover.jpg")

Book.create!(:title => "The Discovery of Heaven",:author => "Harry Mulisch",:body => "The Discovery of Heaven begins with the meeting of Onno and Max, two complicated individuals whom fate has mysteriously and magically brought together, They share responsibility for the birth of a remarkable and radiant boy who embarks on a mandated quest that takes the reader all over Europe and to the land where all such quests begin and end. Abounding in philosophical, psychological and theological inquiries - yet laced with humour that is as infectious as it is wilful - The Discovery of Heaven convinces us that it just might be possible to bring order into the chaos of the world through a story.",:cover_url => "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349012028l/1273788.jpg")

Book.create!(:title => "2666", :author => "Roberto Bolaño",:body => "Composed in the last two years of Bolaño's life, 2666 has been greeted as his greatest achievement, surpassing even his previous work in its strangeness,beauty, and scope. Its throng of unforgettable characters include academics and convicts, an American sportswriter, an elusive German novelist, and a teenage student caring for her widowed, mentally unstable father. Their lives intersect in the desert sprawl of Santa Teresa--a fictional Juárez--on the US-Mexico border, where hundreds of young factory workers, in the novel as in life, have disappeared. Audacious, impassioned and profoundly inspired, 2666 is Roberto Bolaño’s masterwork.",:cover_url => "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327364614l/3115359.jpg")
Book.create!(:title => "The Elementary Particles",:author => "Michel Houellebecq",:body => "Brilliant, caustic, comic, and severe, The Elementary Particles is an unflinching look at a modern world plagued by consumerism, materialism, and unchecked scientific experimentation.

An international bestseller and controversial literary phenomenon that drew immediate comparison to the novels of Beckett, Huxley, and Camus, this is the story of two half-brothers abandoned by a mother who gave herself fully to the drugged-out free-love world of the sixties.

Bruno, overweight and a failure at everything, is himself a raucously promiscuous hedonist, while Michel, his younger brother, is an emotionally dead molecular biologist wholly immersed in the solitude of his work. Each is ultimately offered a final chance at genuine love, and what unfolds is an endlessly unpredictable and provocative tale that speaks to the impossible redemption of the human condition.",:cover_url => "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403180525l/58314.jpg")
Book.create!(:title => "Poems and Fragments",:author => " Friedrich Hölderlin, Michael Hamburger (Translator)",:body => "Michael Hamburger has been translating the poetry of Friedrich Hölderlin (1770-1843) for over half a century. This lifelong preoccupation culminates in this fourth bilingual edition, incorporating revisions, new translations and other supplementary material. It is the classic English edition of Hölderlin's poetry for our age.

Michael Hamburger was born in Berlin in 1924, and came to Britain as a child. He is one of our leading poets and critics, as well as the foremost contemporary translator of German poetry. His Collected Poems 1941-1994' and several later books of poetry are published by Anvil, as is his Poems of Paul Celan', for which he was awarded the EC's first European Translation Prize in 1992. Anvil has also published his selections from the poetry of Goethe, Rilke and Peter Huchel and his critical study of modern poetry, The Truth of Poetry'.",:cover_url => "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1354208324l/148038.jpg")
Book.create!(:title => "Breathturn into Timestead: The Collected Later Poetry",:author => "Paul Celan, Pierre Joris (Translator),",:body => "Some nice German poem's from the best selling author of 'Todesfugue'",:cover_url => "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1416448060l/23568532.jpg")

Book.create!(:title => "The Oedipus Cycle: Oedipus Rex, Oedipus at Colonus, Antigone",:author => "Sophocles",:body => "An old Greek family comedy. ",:cover_url => "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349012028l/1273788.jpg")


require 'faker'

puts "🌋 Clearing old data..."
User.destroy_all
User.reset_pk_sequence
Service.destroy_all
Service.reset_pk_sequence
Subscription.destroy_all
Subscription.reset_pk_sequence

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([ name: 'Star Wars' ,  name: 'Lord of the Rings' ])
#   Character.create(name: 'Luke', movie: movies.first)
puts "💻 Seeding Services..."

Service.create(name: 'Netflix', description: 'Movies', price: 10, logo: 'https://cdn.vox-cdn.com/thumbor/QuS2QKQys3HhosKiV-2IuKhphbo=/39x0:3111x2048/1400x1050/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png')
Service.create(name: 'Hulu', description: 'Movies', price: 7, logo: 'https://thisis.hulu.com/img/logo_on-green.png')
Service.create(name: 'HBO Max', description: 'Movies', price: 15, logo: 'https://play-lh.googleusercontent.com/0Kgz52XhRVOAXJlJVazUmmXgSM42aW8V5OclB629lfh-_I0glR6ut_kD7Lw-ESf4IVhs')
Service.create(name: 'Disney Plus', description: 'Movies', price: 6,  logo: 'https://media.comicbook.com/2018/11/disney-plus-logo-1143358.jpeg')
Service.create(name: 'Amazon Prime Video', description: 'Movies', price: 120, logo: 'https://i.pcmag.com/imagery/reviews/02dIsBiVpmVTMeXkrKxWy0W-13..1582749138.png')
Service.create(name: 'Spotify', description: 'Music', price: 10,  logo: 'https://ipomusic.org/wp-content/uploads/2019/10/Color-Spotify-Logo-1.jpg')
Service.create(name: 'Apple Music', description: 'Music', price: 9,  logo: 'https://miro.medium.com/max/1200/1*3mXq3Pm278v4gcS0Xgeifw.png')
Service.create(name: 'Playstation Plus', description: 'Games', price: 12,  logo: 'https://www.pngitem.com/pimgs/m/268-2687125_playstation-plus-logo-playstation-plus-hd-png-download.png')
Service.create(name: 'Xbox Live', description: 'Games', price: 8,  logo: 'https://cdn.vox-cdn.com/thumbor/1dNU_TlCoAcrIrM069UVUu7NcDU=/0x0:630x420/1200x800/filters:focal(0x0:630x420)/cdn.vox-cdn.com/assets/1272267/xbox-live-logo.jpg')
Service.create(name: 'Nintendo Online', description: 'Games', price: 2,  logo: 'https://cdn.vox-cdn.com/thumbor/L71893XsZaAXgt1n_iC7L6ZBTTo=/0x0:1440x2594/1200x800/filters:focal(616x1179:846x1409)/cdn.vox-cdn.com/uploads/chorus_image/image/55784511/nintendo_switch_online_art_1440.0.png')
Service.create(name: 'Limewire', description: 'Music', price: 0, logo: 'https://torrentfreak.com/images/limewire.jpg')
Service.create(name: 'Napster', description: 'Music', price: 0,  logo: 'https://us.napster.com/assets/runway_b2b/home/b2b_homepage/home_facebook-37fa5e73bc84126deb6442674a3e15c97be1e4d29eebfd4f2db24bed442de7c6.png')

puts "🙇 Seeding Users..."

10.times do
User.create(username: Faker::Artist.unique.name , password: "test")
end


puts "💸 Seeding Subscription..."

20.times do
    Subscription.create(period: "monthly", user_id: User.ids.sample, service_id: Service.ids.sample)
end
20.times do
    Subscription.create(period: "Weekly", user_id: User.ids.sample, service_id: Service.ids.sample)
end


puts "🙌 Seeing Complete!"
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [comments, setComments] = useState([
    { id: 1, author: 'Sakura', avatar: '🌸', text: 'Обожаю этих персонажей! Такие милые! ✨', likes: 12 },
    { id: 2, author: 'Yuki', avatar: '❄️', text: 'Кто-нибудь знает, где найти больше историй про них?', likes: 8 },
    { id: 3, author: 'Hana', avatar: '🌺', text: 'Я создала своего персонажа! Покажу скоро 💖', likes: 15 },
  ]);
  const [newComment, setNewComment] = useState('');

  const characters = [
    {
      id: 1,
      name: 'Момо',
      description: 'Милая мечтательница с розовыми волосами',
      image: 'https://cdn.poehali.dev/projects/902708ec-97a5-4453-b852-0007622defb8/files/740319b4-c174-405f-92f5-7a696912a45a.jpg',
      tags: ['Kawaii', 'Мечтатель', 'Розовый'],
    },
    {
      id: 2,
      name: 'Юки',
      description: 'Весёлая девочка с лавандовыми косичками',
      image: 'https://cdn.poehali.dev/projects/902708ec-97a5-4453-b852-0007622defb8/files/f80527e4-c364-4a74-a091-2a5ee7551eb2.jpg',
      tags: ['Энергичная', 'Магия', 'Лаванда'],
    },
    {
      id: 3,
      name: 'Хана',
      description: 'Нежная принцесса с мятными волосами',
      image: 'https://cdn.poehali.dev/projects/902708ec-97a5-4453-b852-0007622defb8/files/1e3be0eb-9fcb-48c7-859a-80e1cedd1f69.jpg',
      tags: ['Принцесса', 'Нежная', 'Мята'],
    },
  ];

  const stories = [
    { id: 1, title: 'Волшебное приключение Момо', author: 'Sakura', likes: 234, preview: 'Однажды Момо нашла волшебный портал в парке...' },
    { id: 2, title: 'День рождения Юки', author: 'Yuki', likes: 189, preview: 'Друзья приготовили сюрприз для Юки...' },
    { id: 3, title: 'Тайна королевства Ханы', author: 'Hana', likes: 312, preview: 'В далёком королевстве случилось нечто удивительное...' },
  ];

  const addComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: 'Ты',
          avatar: '⭐',
          text: newComment,
          likes: 0,
        },
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-purple-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              ✨ Gacha Life World
            </h1>
            <div className="flex gap-2 flex-wrap">
              {['home', 'characters', 'stories', 'community', 'contact'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  className="rounded-full transition-all hover:scale-105"
                  onClick={() => setActiveSection(section)}
                >
                  {section === 'home' && '🏠 Главная'}
                  {section === 'characters' && '🎭 Персонажи'}
                  {section === 'stories' && '📖 Истории'}
                  {section === 'community' && '💬 Сообщество'}
                  {section === 'contact' && '✉️ Контакты'}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center py-16 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="text-9xl animate-float">✨</div>
              </div>
              <div className="relative z-10">
                <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-scale-in">
                  Добро пожаловать в мир Gacha Life!
                </h2>
                <p className="text-xl text-purple-600 mb-8 max-w-2xl mx-auto">
                  Создавай персонажей, рассказывай истории и общайся с друзьями в самом милом сообществе! 💖
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 hover:scale-110 transition-all shadow-lg"
                    onClick={() => setActiveSection('characters')}
                  >
                    <Icon name="Sparkles" className="mr-2" />
                    Смотреть персонажей
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 border-purple-300 hover:scale-110 transition-all"
                    onClick={() => setActiveSection('community')}
                  >
                    <Icon name="Users" className="mr-2" />
                    Присоединиться к сообществу
                  </Button>
                </div>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              {characters.map((char, index) => (
                <Card
                  key={char.id}
                  className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-purple-100 overflow-hidden animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">💖</span>
                      {char.name}
                    </CardTitle>
                    <CardDescription>{char.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 flex-wrap">
                      {char.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        )}

        {activeSection === 'characters' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                🎭 Наши персонажи
              </h2>
              <p className="text-lg text-purple-600">Познакомься с милыми героями Gacha Life!</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {characters.map((char) => (
                <Card key={char.id} className="hover:shadow-2xl transition-all hover:scale-105 border-2 border-purple-200">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <span>✨</span>
                      {char.name}
                    </CardTitle>
                    <CardDescription className="text-base">{char.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {char.tags.map((tag) => (
                        <Badge key={tag} className="rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400">
                      Узнать больше
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'stories' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                📖 Истории сообщества
              </h2>
              <p className="text-lg text-purple-600">Читай и делись своими приключениями!</p>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              {stories.map((story) => (
                <Card key={story.id} className="hover:shadow-lg transition-all hover:scale-102 border-2 border-purple-100">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{story.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                            <AvatarFallback className="text-xs">{story.author[0]}</AvatarFallback>
                          </Avatar>
                          <span>{story.author}</span>
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="flex items-center gap-1 rounded-full">
                        <Icon name="Heart" size={14} />
                        {story.likes}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{story.preview}</p>
                    <Button variant="outline" className="rounded-full">
                      Читать далее <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'community' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                💬 Форум сообщества
              </h2>
              <p className="text-lg text-purple-600">Общайся с другими фанатами Gacha Life!</p>
            </div>

            <Tabs defaultValue="forum" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 rounded-full">
                <TabsTrigger value="forum" className="rounded-full">
                  💬 Форум
                </TabsTrigger>
                <TabsTrigger value="gallery" className="rounded-full">
                  🎨 Галерея
                </TabsTrigger>
              </TabsList>

              <TabsContent value="forum" className="space-y-6 mt-6">
                <Card className="border-2 border-purple-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageCircle" />
                      Написать комментарий
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea
                      placeholder="Поделись своими мыслями... ✨"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-24 rounded-xl border-2 border-purple-200"
                    />
                    <Button onClick={addComment} className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400">
                      <Icon name="Send" className="mr-2" size={16} />
                      Отправить
                    </Button>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {comments.map((comment) => (
                    <Card key={comment.id} className="hover:shadow-lg transition-all border-2 border-purple-100">
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <Avatar className="w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-300">
                            <AvatarFallback className="text-2xl">{comment.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-lg">{comment.author}</h4>
                              <Button variant="ghost" size="sm" className="rounded-full">
                                <Icon name="Heart" size={16} className="mr-1" />
                                {comment.likes}
                              </Button>
                            </div>
                            <p className="text-muted-foreground">{comment.text}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {characters.map((char) => (
                    <Card key={char.id} className="hover:shadow-xl transition-all hover:scale-105 overflow-hidden">
                      <div className="aspect-square overflow-hidden">
                        <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
                      </div>
                      <CardContent className="pt-4">
                        <p className="text-center font-semibold">{char.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                ✉️ Свяжись с нами
              </h2>
              <p className="text-lg text-purple-600">Есть вопросы или предложения? Напиши нам!</p>
            </div>

            <Card className="border-2 border-purple-200 shadow-xl">
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Мы ответим тебе как можно скорее! 💖</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Твоё имя</label>
                  <Input placeholder="Как тебя зовут?" className="rounded-xl border-2 border-purple-200" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="твой@email.com" className="rounded-xl border-2 border-purple-200" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea
                    placeholder="Расскажи нам что-нибудь..."
                    className="min-h-32 rounded-xl border-2 border-purple-200"
                  />
                </div>
                <Button className="w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-105 transition-all">
                  <Icon name="Send" className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <Card className="border-2 border-purple-100">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-2">📧</div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">hello@gachalife.com</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-2">💬</div>
                  <p className="font-semibold">Discord</p>
                  <p className="text-sm text-muted-foreground">Gacha Life Community</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-2">🌸</div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm text-muted-foreground">@gachalife</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t-2 border-purple-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-purple-600 mb-2">
            Создано с 💖 сообществом Gacha Life
          </p>
          <div className="flex justify-center gap-4 text-3xl">
            <span className="animate-float" style={{ animationDelay: '0s' }}>✨</span>
            <span className="animate-float" style={{ animationDelay: '0.5s' }}>💖</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>🌸</span>
            <span className="animate-float" style={{ animationDelay: '1.5s' }}>⭐</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import SEO from "../components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEO 
        title="Политика конфиденциальности | Мастер Манас"
        description="Политика конфиденциальности и защиты персональных данных сервиса Мастер Манас в Алматы."
      />
      <div className="max-w-4xl mx-auto px-6 bg-white p-10 rounded-[2rem] shadow-sm">
        <h1 className="text-3xl font-extrabold mb-8 text-slate-900">Политика конфиденциальности</h1>
        
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">1. Общие положения</h2>
            <p>
              Ваша конфиденциальность очень важна для нас. Настоящая Политика конфиденциальности описывает, как мы собираем, используем и защищаем вашу личную информацию при использовании нашего сайта mana.kz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">2. Сбор информации</h2>
            <p>
              Мы собираем информацию, которую вы предоставляете нам напрямую через формы обратной связи (имя, номер телефона). Эта информация используется исключительно для связи с вами и предоставления заказанных услуг.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">3. Использование данных</h2>
            <p>
              Предоставленные вами данные используются для:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Оперативной обработки вашей заявки;</li>
              <li>Связи мастера с вами для уточнения деталей заказа;</li>
              <li>Улучшения качества нашего сервиса.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">4. Защита информации</h2>
            <p>
              Мы принимаем необходимые меры безопасности для защиты ваших данных от несанкционированного доступа, изменения или раскрытия. Мы не передаем вашу личную информацию третьим лицам.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">5. Ваше согласие</h2>
            <p>
              Используя наш сайт, вы соглашаетесь с условиями настоящей Политики конфиденциальности.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">6. Контакты</h2>
            <p>
              Если у вас есть вопросы по поводу нашей политики, вы можете связаться с нами по телефону: +7 705 553 53 32.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

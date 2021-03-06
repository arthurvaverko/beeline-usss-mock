

/*
 * GET //inac/account/NPStatistic
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, dateFrom, dateTo, type
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * dateFrom(type: DateWrapper) - query parameter - Дата начала выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * dateTo(type: DateWrapper) - query parameter - Дата окончания выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * type(type: integer) - query parameter - Тип статистики ДЦТ. Если тип не передан выгрузка производится по всем типам.
 */
exports.getInacAccountNpstatistic = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('dateFrom', 'Invalid query parameter').notEmpty();
	req.checkQuery('dateTo', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/activateCreditCard
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, isAutoPayEnabled, mTopUpSessionID, creditCardEnabled
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * isAutoPayEnabled(type: boolean) - query parameter - Флаг, указывающий включение автооплаты. True - включена, false - не включена
 * mTopUpSessionID(type: string) - query parameter - Идентификатор сессии на стороне MTopUp
 * creditCardEnabled(type: boolean) - query parameter - Флаг, указывающий тип процедуры. True - привязка карты, false - отвязка карты
 */
exports.getInacAccountActivatecreditcard = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('isAutoPayEnabled', 'Invalid query parameter').notEmpty();
	req.checkQuery('mTopUpSessionID', 'Invalid query parameter').notEmpty();
	req.checkQuery('creditCardEnabled', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/activateLogin
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 */
exports.getInacAccountActivatelogin = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //inac/account/addCase
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, initiatorName, type, subtype, title, text
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 */
exports.putInacAccountAddcase = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/alias
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 */
exports.getInacAccountAlias = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/balance
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 */
exports.getInacAccountBalance = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/bonusBalance
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 */
exports.getInacAccountBonusbalance = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/bonuses
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, dateFrom, dateTo
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * dateFrom(type: DateWrapper) - query parameter - Дата начала выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * dateTo(type: DateWrapper) - query parameter - Дата окончания выборки (формат: YYYY-MM-DDTHH:mm:ss)
 */
exports.getInacAccountBonuses = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('dateFrom', 'Invalid query parameter').notEmpty();
	req.checkQuery('dateTo', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/cashflowStatistic
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, dateFrom, dateTo
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * dateFrom(type: DateWrapper) - query parameter - Дата начала выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * dateTo(type: DateWrapper) - query parameter - Дата окончания выборки (формат: YYYY-MM-DDTHH:mm:ss)
 */
exports.getInacAccountCashflowstatistic = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('dateFrom', 'Invalid query parameter').notEmpty();
	req.checkQuery('dateTo', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/changeAutoPayStatus
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, isAutoPayEnabled
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * isAutoPayEnabled(type: boolean) - query parameter - True - включить автооплату, false - выключить автооплату
 */
exports.getInacAccountChangeautopaystatus = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('isAutoPayEnabled', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/changeBlock
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: block, effDate, days, initiatorName, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * block(type: boolean) - query parameter - Флаг, указывающий тип предполагаемого действия. True - необходима блокировка, false - необходима разблокировка
 * effDate(type: DateWrapper) - query parameter - Дата начала отложенной блокировки (формат: YYYY-MM-DDTHH:mm:ss).Необходимо провести следующие валидации:<br>- не более 90 календарных дней от текущей даты<br>- не менее 30 календарных от дней от даты последнего входа в добровольную блокировку (параметр blockdate метода finInfo )<br>В случае запроса на разблокировку, параметр даты не должен передаваться.
 * endDate(type: DateWrapper) - query parameter - Дата окончания отложенной блокировки (формат: YYYY-MM-DDTHH:mm:ss).Необходимо провести следующие валидации по продолжительности блокировки, считается относительно effDate:<br>- не более 90 календарных дней<br>- при подключенном бандле или годовом контракте параметр не более 60, если соответствующие параметры на данных сервисах не заполнены.
 * days(type: integer) - query parameter - Количество дней блокировки. Необходимо провести следующие валидации:<br>- не более 90 календарных дней<br>- при подключенном бандле или годовом контракте параметр days не более 60.<br>В случае запроса на разблокировку, параметр даты не должен передаваться.
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 * login(type: string) - query parameter - Логин USS
 */
exports.getInacAccountChangeblock = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('block', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/checkConnectionAddress
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, city, street, house, flat
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USSS
 * city(type: string) - query parameter - Город (регистр не имеет значения, кодировка UTF-8)
 * street(type: string) - query parameter - Улица (регистр не имеет значения, кодировка UTF-8)
 * house(type: string) - query parameter - Дом (регистр не имеет значения, кодировка UTF-8)
 * flat(type: string) - query parameter - Квартира (регистр не имеет значения, кодировка UTF-8)
 */
exports.getInacAccountCheckconnectionaddress = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('city', 'Invalid query parameter').notEmpty();
	req.checkQuery('street', 'Invalid query parameter').notEmpty();
	req.checkQuery('house', 'Invalid query parameter').notEmpty();
	req.checkQuery('flat', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/checkIptvGuid
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, serialNumber, mac, bundleId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * serialNumber(type: string) - query parameter - 4 последних символа серийного номера
 * mac(type: string) - query parameter - mac-адрес приставки в формате 12 символов без разделителей
 * bundleId(type: string) - query parameter - Id бандла, в рамках которого осуществляется подключение тарифа ТВ
 */
exports.getInacAccountCheckiptvguid = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('serialNumber', 'Invalid query parameter').notEmpty();
	req.checkQuery('mac', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/checkWiFiRouter
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, serialNumber
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * serialNumber(type: string) - query parameter - Серийный номер роутера
 */
exports.getInacAccountCheckwifirouter = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('serialNumber', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/compensations
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, dateFrom, dateTo
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * dateFrom(type: DateWrapper) - query parameter - Дата начала выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * dateTo(type: DateWrapper) - query parameter - Дата окончания выборки (формат: YYYY-MM-DDTHH:mm:ss)
 */
exports.getInacAccountCompensations = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('dateFrom', 'Invalid query parameter').notEmpty();
	req.checkQuery('dateTo', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/contractInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 */
exports.getInacAccountContractinfo = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //inac/account/createAlias
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, alias
 * client(type: string) - query parameter - Наименование системы, использующей API
 */
exports.postInacAccountCreatealias = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/creditCardAndAutoPayInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 */
exports.getInacAccountCreditcardandautopayinfo = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE //inac/account/delIpoeAuth
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 */
exports.deleteInacAccountDelipoeauth = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/finInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 */
exports.getInacAccountFininfo = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/getCtnStatus
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * ctn(type: string) - query parameter - Номер абонента Билайн
 */
exports.getInacAccountGetctnstatus = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/internetStatistic
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, dateFrom, dateTo, groupType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * dateFrom(type: DateWrapper) - query parameter - Дата начала выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * dateTo(type: DateWrapper) - query parameter - Дата окончания выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * groupType(type: integer) - query parameter - Тип группировки.(1 - по месяцам, 2 - по дням, 3 - по сессиям)
 */
exports.getInacAccountInternetstatistic = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('dateFrom', 'Invalid query parameter').notEmpty();
	req.checkQuery('dateTo', 'Invalid query parameter').notEmpty();
	req.checkQuery('groupType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/invitedCtns
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS, передается с префиксом FTTB/
 * ctn(type: string) - query parameter - ctn абонента ШПД, передается без префикса FTTB/
 */
exports.getInacAccountInvitedctns = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/ipoeParams
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 */
exports.getInacAccountIpoeparams = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/mobileInvite
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ctn
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS, передается с префиксом FTTB/
 * ctn(type: string) - query parameter - Номер телефона Beeline
 */
exports.getInacAccountMobileinvite = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/payments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, dateFrom, dateTo
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * dateFrom(type: DateWrapper) - query parameter - Дата начала выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * dateTo(type: DateWrapper) - query parameter - Дата окончания выборки (формат: YYYY-MM-DDTHH:mm:ss)
 */
exports.getInacAccountPayments = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('dateFrom', 'Invalid query parameter').notEmpty();
	req.checkQuery('dateTo', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/promisedpayment
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 */
exports.getInacAccountPromisedpayment = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/account/sendSMSOrEmailForRecovery
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, sms, email
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * sms(type: string) - query parameter - Номер телефона
 * email(type: string) - query parameter - Адрес почты
 */
exports.getInacAccountSendsmsoremailforrecovery = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //inac/account/setPersonalData
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, initiatorName, house, flat, street, subject, locality, series, issueDate, documentType, number, issueLocation, name, birthday
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Идентификатор клиента API USSS
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 */
exports.postInacAccountSetpersonaldata = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //inac/equipment/info/addXboxGuid
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, xboxGuid
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * xboxGuid(type: string) - query parameter - Guid полученный через Xbox
 */
exports.postInacEquipmentInfoAddxboxguid = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('xboxGuid', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //inac/equipment/info/changeConsoleStatusNotification
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * login(type: string) - query parameter - Логин FTTB пользователя USS
 * guid(type: string) - query parameter - guid TV-приставки
 */
exports.putInacEquipmentInfoChangeconsolestatusnotification = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('guid', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/equipment/info/debitForRouter
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, serialNumber, ticketNumber
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * ticketNumber(type: integer) - query parameter - Номер заявки
 * serialNumber(type: string) - query parameter - Серийный номер роутера
 * datePeriodStart(type: DateWrapper) - query parameter - Будущая дата выполнения операции.
 * payMode(type: integer) - query parameter - Тип оплаты: 0 - обычная, 1 - доверительный платеж, 2 - бонусы,3 - оплата с карты
 */
exports.getInacEquipmentInfoDebitforrouter = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('hash', 'Invalid query parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('ticketNumber', 'Invalid query parameter').notEmpty();
	req.checkQuery('serialNumber', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/equipment/info/routers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, cityId, model
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * cityId(type: integer) - query parameter - ID города (СтройУчет), по умолчанию город абонента
 * model(type: string) - query parameter - Модель роутера
 */
exports.getInacEquipmentInfoRouters = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/equipment/info/statusNotification
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * login(type: string) - query parameter - Логин FTTB пользователя USS
 * guid(type: string) - query parameter - guid TV-приставки
 */
exports.getInacEquipmentInfoStatusnotification = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('guid', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/equipment/info/wifiRouterBuyTickets
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 */
exports.getInacEquipmentInfoWifirouterbuytickets = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/hd/checkMoveCode
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * code(type: string) - query parameter - Код монтажника (6 знаков)
 */
exports.getInacHdCheckmovecode = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('code', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/hd/closeTicket
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, initiatorName, reqExternalId, reactionType
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 * reqExternalId(type: string) - query parameter - Идентификатор запроса. Передается в виде H<ticket_number>
 * reactionType(type: integer) - query parameter - Тип действия, выбранный абонентом: 0 – Закрыть/проблема решена, 1 – Не закрывать/проблема все еще актуальна, 2 – Ошибка/проблема не актуальна
 */
exports.getInacHdCloseticket = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('reqExternalId', 'Invalid query parameter').notEmpty();
	req.checkQuery('reactionType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //inac/hd/createNewHouseTicket
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, houseId, flat, lastName, firstName, middleName, phone, email
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 */
exports.putInacHdCreatenewhouseticket = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //inac/hd/createServiceConnectionTicket
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, houseId, flat, lastName, firstName, middleName, phone, email
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 */
exports.putInacHdCreateserviceconnectionticket = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/hd/createTicket
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, initiatorName, type, subtype, comment, count
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 * type(type: string) - query parameter - Тип заявки
 * subtype(type: string) - query parameter - Подтип заявки
 * comment(type: string) - query parameter - Комментарий к заявке
 * count(type: integer) - query parameter - Количество заказанного оборудования
 * mac(type: string) - query parameter - MAC-адрес сдаваемой приставки
 * houseId(type: integer) - query parameter - Идентификатор дома (обязателен для новой процедуры переезда)
 * flat(type: integer) - query parameter - Номер квартиры (обязателен для новой процедуры переезда)
 * baseId(type: integer) - query parameter - Идентификатор базового предложения
 * concretePackets(type: string) - query parameter - Перечень дополнительных пакетов (через запятую)
 */
exports.getInacHdCreateticket = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('type', 'Invalid query parameter').notEmpty();
	req.checkQuery('subtype', 'Invalid query parameter').notEmpty();
	req.checkQuery('comment', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/accumParams
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, accId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * accId(type: integer) - query parameter - Идентификатор аккумулятора
 * serviceId(type: string) - query parameter - Идентификатор услуги
 */
exports.getInacServiceInfoAccumparams = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('accId', 'Invalid query parameter').notEmpty();
	req.checkQuery('serviceId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/availablePresets
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ctn, cityId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * ctn(type: string) - query parameter - Ctn мобильного абонента
 * cityId(type: integer) - query parameter - ID города абонента в системе СТРОЙУЧЕТ. Обязателен, когда в login передан мобильный логин
 */
exports.getInacServiceInfoAvailablepresets = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/availableServices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: types, searchParam, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * types(type: string) - query parameter - Список типов услуг через запятую
 * searchParam(type: string) - query parameter - Строка поиска сервисов
 * login(type: string) - query parameter - Логин абонента
 * pseudoConvergent(type: boolean) - query parameter - Флаг псевдоконвергентного абонента
 */
exports.getInacServiceInfoAvailableservices = function(req, res){
    req.checkQuery('login', 'Invalid query parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);
    
    // set response body and send
    var data = {"meta":{"status":"OK","code":20000,"message":null},"containers":[{"serviceType":"TVE_TARIFF_ENTITY","services":[{"price":249.0,"technicalName":"������� ���� ���� 2018 TVE","ussName":"������� ���� ���� 2018 TVE USSS","shortDescription":"������� ��������","fullDescription":"��������� ��������","serviceId":"519538","additionalParams":{"effectivePrice":249.0,"mobileSubscriber":false,"allowRelatedOfferByFttb":true,"channelCount":30,"basePktPrice":249.0,"mobChannelCount":0,"tvType":3,"tveDeviceLimit":5},"externalId":20882,"packetTypes":[{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"519540","parentPacketId":"519538","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"����������� �� ������","ussName":"����������� �� ������","packetId":"519543","parentPacketId":"519540","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":150.0,"technicalName":"VIP Viasat Premium","ussName":"VIP Viasat Premium","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543769","parentPacketId":"519543","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20895,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":240.0,"technicalName":"���� �������","ussName":"���� �������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543765","parentPacketId":"519543","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20893,"channelCount":1,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"Amedia Premium HD - Home of HBO","ussName":"Amedia Premium HD - Home of HBO","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543767","parentPacketId":"519543","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20894,"channelCount":2,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"������������ �� ������","ussName":"������������ �� ������","packetId":"519541","parentPacketId":"519540","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":249.0,"technicalName":"����","ussName":"����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543755","parentPacketId":"519541","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20904,"channelCount":23,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"�������","ussName":"�������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543757","parentPacketId":"519541","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20889,"channelCount":13,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"��������������","ussName":"��������������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543759","parentPacketId":"519541","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20890,"channelCount":20,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"����������","ussName":"����������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543761","parentPacketId":"519541","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20891,"channelCount":8,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"��� ��������","ussName":"��� ��������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543763","parentPacketId":"519541","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20892,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"�������� ������������","ussName":"�������� ������������","packetId":"519545","parentPacketId":"519540","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":199.0,"technicalName":"18+","ussName":"18+","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543771","parentPacketId":"519545","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20896,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":150.0,"technicalName":"ViP Play","ussName":"ViP Play","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543773","parentPacketId":"519545","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20899,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"ivi �����","ussName":"ivi �����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543775","parentPacketId":"519545","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20901,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"START","ussName":"START","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543777","parentPacketId":"519545","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20903,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"519547","parentPacketId":"519538","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"�� �������","ussName":"�� �������","packetId":"519548","parentPacketId":"519547","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":null,"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"targetedOffer":false},{"price":99.0,"technicalName":"����������� 2018 TVE","ussName":"����������� 2018 TVE USSS","shortDescription":"������� ��������","fullDescription":"��������� ��������","serviceId":"519466","additionalParams":{"effectivePrice":99.0,"mobileSubscriber":false,"allowRelatedOfferByFttb":true,"channelCount":24,"basePktPrice":99.0,"mobChannelCount":0,"tvType":3,"tveDeviceLimit":5},"externalId":20879,"packetTypes":[{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"519475","parentPacketId":"519466","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"�� �������","ussName":"�� �������","packetId":"519476","parentPacketId":"519475","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":null,"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"519468","parentPacketId":"519466","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"�������� ������������","ussName":"�������� ������������","packetId":"519473","parentPacketId":"519468","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":199.0,"technicalName":"18+","ussName":"18+","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543771","parentPacketId":"519473","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20896,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":150.0,"technicalName":"ViP Play","ussName":"ViP Play","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543773","parentPacketId":"519473","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20899,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"ivi �����","ussName":"ivi �����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543775","parentPacketId":"519473","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20901,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"START","ussName":"START","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543777","parentPacketId":"519473","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20903,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"����������� �� ������","ussName":"����������� �� ������","packetId":"519471","parentPacketId":"519468","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":150.0,"technicalName":"VIP Viasat Premium","ussName":"VIP Viasat Premium","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543769","parentPacketId":"519471","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20895,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":240.0,"technicalName":"���� �������","ussName":"���� �������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543765","parentPacketId":"519471","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20893,"channelCount":1,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"Amedia Premium HD - Home of HBO","ussName":"Amedia Premium HD - Home of HBO","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543767","parentPacketId":"519471","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20894,"channelCount":2,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"������������ �� ������","ussName":"������������ �� ������","packetId":"519469","parentPacketId":"519468","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":249.0,"technicalName":"����","ussName":"����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543755","parentPacketId":"519469","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20904,"channelCount":23,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"�������","ussName":"�������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543757","parentPacketId":"519469","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20889,"channelCount":13,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"��������������","ussName":"��������������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543759","parentPacketId":"519469","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20890,"channelCount":20,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"����������","ussName":"����������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543761","parentPacketId":"519469","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20891,"channelCount":8,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"��� ��������","ussName":"��� ��������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543763","parentPacketId":"519469","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20892,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"targetedOffer":false},{"price":300.0,"technicalName":"������� TVE ����� 300","ussName":"������� TVE ����� 300 USSS","shortDescription":"������� ��������","fullDescription":"��������� ��������","serviceId":"482998","additionalParams":{"effectivePrice":300.0,"mobileSubscriber":false,"allowRelatedOfferByFttb":true,"channelCount":30,"basePktPrice":300.0,"mobChannelCount":0,"tvType":3,"tveDeviceLimit":5},"externalId":20882,"packetTypes":[{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"483007","parentPacketId":"482998","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":-3,"showNumber":3,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"�� �������","ussName":"�� �������","packetId":"483008","parentPacketId":"483007","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":null,"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"483000","parentPacketId":"482998","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":-1,"showNumber":1,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"�������� ������������","ussName":"�������� ������������","packetId":"483005","parentPacketId":"483000","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":-2,"showNumber":2,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":199.0,"technicalName":"18+","ussName":"18+","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543771","parentPacketId":"483005","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20896,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":150.0,"technicalName":"ViP Play","ussName":"ViP Play","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543773","parentPacketId":"483005","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20899,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"ivi �����","ussName":"ivi �����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543775","parentPacketId":"483005","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20901,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"START","ussName":"START","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543777","parentPacketId":"483005","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20903,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"����������� �� ������","ussName":"����������� �� ������","packetId":"483003","parentPacketId":"483000","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":150.0,"technicalName":"VIP Viasat Premium","ussName":"VIP Viasat Premium","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543769","parentPacketId":"483003","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20895,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":240.0,"technicalName":"���� �������","ussName":"���� �������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543765","parentPacketId":"483003","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20893,"channelCount":1,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"Amedia Premium HD - Home of HBO","ussName":"Amedia Premium HD - Home of HBO","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543767","parentPacketId":"483003","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20894,"channelCount":2,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"������������ �� ������","ussName":"������������ �� ������","packetId":"483001","parentPacketId":"483000","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":249.0,"technicalName":"����","ussName":"����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543755","parentPacketId":"483001","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20904,"channelCount":23,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"�������","ussName":"�������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543757","parentPacketId":"483001","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20889,"channelCount":13,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"��������������","ussName":"��������������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543759","parentPacketId":"483001","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20890,"channelCount":20,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"����������","ussName":"����������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543761","parentPacketId":"483001","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20891,"channelCount":8,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"��� ��������","ussName":"��� ��������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543763","parentPacketId":"483001","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20892,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"targetedOffer":false},{"price":199.0,"technicalName":"������� ���� 2018 TVE","ussName":"������� ���� 2018 TVE USSS","shortDescription":"������� ��������","fullDescription":"��������� ��������","serviceId":"519514","additionalParams":{"effectivePrice":199.0,"mobileSubscriber":false,"allowRelatedOfferByFttb":true,"channelCount":30,"basePktPrice":199.0,"mobChannelCount":0,"tvType":3,"tveDeviceLimit":5},"externalId":20881,"packetTypes":[{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"519523","parentPacketId":"519514","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"�� �������","ussName":"�� �������","packetId":"519524","parentPacketId":"519523","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":null,"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"519516","parentPacketId":"519514","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"�������� ������������","ussName":"�������� ������������","packetId":"519521","parentPacketId":"519516","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":199.0,"technicalName":"18+","ussName":"18+","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543771","parentPacketId":"519521","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20896,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":150.0,"technicalName":"ViP Play","ussName":"ViP Play","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543773","parentPacketId":"519521","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20899,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"ivi �����","ussName":"ivi �����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543775","parentPacketId":"519521","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20901,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"START","ussName":"START","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543777","parentPacketId":"519521","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20903,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"����������� �� ������","ussName":"����������� �� ������","packetId":"519519","parentPacketId":"519516","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":150.0,"technicalName":"VIP Viasat Premium","ussName":"VIP Viasat Premium","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543769","parentPacketId":"519519","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20895,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":240.0,"technicalName":"���� �������","ussName":"���� �������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543765","parentPacketId":"519519","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20893,"channelCount":1,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"Amedia Premium HD - Home of HBO","ussName":"Amedia Premium HD - Home of HBO","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543767","parentPacketId":"519519","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20894,"channelCount":2,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"������������ �� ������","ussName":"������������ �� ������","packetId":"519517","parentPacketId":"519516","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":249.0,"technicalName":"����","ussName":"����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543755","parentPacketId":"519517","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20904,"channelCount":23,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"�������","ussName":"�������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543757","parentPacketId":"519517","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20889,"channelCount":13,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"��������������","ussName":"��������������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543759","parentPacketId":"519517","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20890,"channelCount":20,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"����������","ussName":"����������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543761","parentPacketId":"519517","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20891,"channelCount":8,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"��� ��������","ussName":"��� ��������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543763","parentPacketId":"519517","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20892,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"targetedOffer":false},{"price":345.0,"technicalName":"������� 2.0� 2018 TVE","ussName":"������� 2.0 USSS","shortDescription":"������� ��������","fullDescription":"��������� ��������","serviceId":"519562","additionalParams":{"effectivePrice":345.0,"mobileSubscriber":false,"allowRelatedOfferByFttb":true,"channelCount":30,"basePktPrice":345.0,"mobChannelCount":0,"tvType":3,"tveDeviceLimit":5},"externalId":20883,"packetTypes":[{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"519571","parentPacketId":"519562","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"�� �������","ussName":"�� �������","packetId":"519572","parentPacketId":"519571","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":null,"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"�������������� ������","ussName":"�������������� ������","packetId":"519564","parentPacketId":"519562","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"�������� ������������","ussName":"�������� ������������","packetId":"519569","parentPacketId":"519564","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":199.0,"technicalName":"18+","ussName":"18+","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543771","parentPacketId":"519569","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20896,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":150.0,"technicalName":"ViP Play","ussName":"ViP Play","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543773","parentPacketId":"519569","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20899,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"ivi �����","ussName":"ivi �����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543775","parentPacketId":"519569","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20901,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"START","ussName":"START","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543777","parentPacketId":"519569","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":true,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20903,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"����������� �� ������","ussName":"����������� �� ������","packetId":"519567","parentPacketId":"519564","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":150.0,"technicalName":"VIP Viasat Premium","ussName":"VIP Viasat Premium","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543769","parentPacketId":"519567","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20895,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":240.0,"technicalName":"���� �������","ussName":"���� �������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543765","parentPacketId":"519567","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20893,"channelCount":1,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"Amedia Premium HD - Home of HBO","ussName":"Amedia Premium HD - Home of HBO","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543767","parentPacketId":"519567","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20894,"channelCount":2,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null},{"price":0.0,"technicalName":"������������ �� ������","ussName":"������������ �� ������","packetId":"519565","parentPacketId":"519564","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":249.0,"technicalName":"����","ussName":"����","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543755","parentPacketId":"519565","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20904,"channelCount":23,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"�������","ussName":"�������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543757","parentPacketId":"519565","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20889,"channelCount":13,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":199.0,"technicalName":"��������������","ussName":"��������������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543759","parentPacketId":"519565","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20890,"channelCount":20,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":149.0,"technicalName":"����������","ussName":"����������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543761","parentPacketId":"519565","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20891,"channelCount":8,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"},{"price":299.0,"technicalName":"��� ��������","ussName":"��� ��������","shortDescription":"������� ��������","fullDescription":"��������� ��������","packetId":"543763","parentPacketId":"519565","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20892,"channelCount":6,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":false,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":29,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"targetedOffer":false}]}]}
    res.json(data);
};

/*
 * GET //inac/service/info/buyPhoneKit
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, phone, ticketId, futureDate
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * phone(type: string) - query parameter - Номер телефона для подключения
 * ticketId(type: integer) - query parameter - Номер заявки на подключение мобильного комплекта
 * futureDate(type: DateWrapper) - query parameter - Дата будущего списания (формат: YYYY-MM-DDTHH:mm:ss)
 */
exports.getInacServiceInfoBuyphonekit = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('phone', 'Invalid query parameter').notEmpty();
	req.checkQuery('ticketId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/checkMobileToken
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, mobileNumber, mobileToken
 * login(type: string) - query parameter - Логин пользователя USSS
 * client(type: string) - query parameter - Наименование системы, использующей API
 * mobileNumber(type: string) - query parameter - Номер телефона, на который был выслан токен (10 цифр)
 * mobileToken(type: string) - query parameter - Токен, введенный пользователем
 */
exports.getInacServiceInfoCheckmobiletoken = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('mobileNumber', 'Invalid query parameter').notEmpty();
	req.checkQuery('mobileToken', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/checkNetphoneNickname
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, nickname
 * login(type: string) - query parameter - Логин пользователя USSS
 * client(type: string) - query parameter - Наименование системы, использующей API
 * nickname(type: string) - query parameter - Никнейм пользователя
 */
exports.getInacServiceInfoChecknetphonenickname = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('nickname', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/checkPhoneKit
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, phone, ticketId
 * login(type: string) - query parameter - Логин пользователя USSS
 * client(type: string) - query parameter - Наименование системы, использующей API
 * phone(type: string) - query parameter - Номер телефона для подключения
 * ticketId(type: integer) - query parameter - Номер заявки на подключение мобильного комплекта
 */
exports.getInacServiceInfoCheckphonekit = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('phone', 'Invalid query parameter').notEmpty();
	req.checkQuery('ticketId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/connectedServices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: types,searchParam,login)
 * client(type: string) - query parameter - Наименование системы, использующей API
 * types(type: string) - query parameter - Список типов сервисов через запятую
 * searchParam(type: string) - query parameter - Строка поиска сервисов
 * login(type: string) - query parameter - Логин FTTB-пользователя USSS (FTTB/номер или буквенно-цифровой логин)
 */
exports.getInacServiceInfoConnectedservices = function(req, res){
    req.checkQuery('login', 'Invalid query parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);
    
    // set response body and send
    var jsonData = {"meta":{"status":"OK","code":20000,"message":null},"containers":[{"serviceType":"TVE_TARIFF_ENTITY","services":[{"price":424.0,"technicalName":"Базовый Лайт 2018 TVE new","ussName":"Базовый Лайт 2018 TVE new","shortDescription":"Пакет каналов различных тематик и жанров. Вы всегда найдёте, что посмотреть!","fullDescription":"Подробное описание","serviceId":"544742","bundleDiscount":0.0,"additionalParams":{"effectivePrice":225.0,"mobileSubscriber":false,"allowRelatedOfferByFttb":true,"channelCount":101,"basePktPrice":225.0,"mobChannelCount":0,"tvType":3,"tveDeviceLimit":5},"psSelected":"N","psPrior":1,"psDiscount":0.0,"externalId":20881,"packetTypes":[{"price":0.0,"technicalName":"Дополнительные пакеты","ussName":"Дополнительные пакеты","packetId":"544744","parentPacketId":"544742","packetEntityType":"PACKET_TYPE","pktMinCount":0,"pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":-1,"showNumber":1,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":0.0,"technicalName":"Тематические ТВ пакеты","ussName":"Тематические ТВ пакеты","packetId":"544745","parentPacketId":"544744","packetEntityType":"PACKET_SUB_TYPE","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"excludedPacketIds":[],"connected":false,"childPackets":[{"price":199.0,"technicalName":"Познавательный TVE","ussName":"Познавательный","shortDescription":"Вам с детства хотелось знать больше других, познать жизнь подводного мира, раскрыть исторические тайны или побывать во всех странах мира? Именно этот пакет способен расширить ваш кругозор и рассказать о последних научных открытиях!","fullDescription":"Подробное описание","packetId":"543759","parentPacketId":"544745","packetEntityType":"CONCRETE_PACKET","pktDiscountEnabled":false,"svod":false,"mobileSubscriber":false,"allowRelatedOffer":false,"externalId":20890,"channelCount":20,"excludedPacketIds":[],"publicService":true,"targetedOffer":false,"connected":true,"mobChannelCount":0,"childPackets":null,"tvType":3,"isTest":false,"segmentColour":[],"visibilityType":"A"}],"tvType":3,"cityId":54,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"tvType":3,"cityId":54,"billType":1,"isTest":false,"segmentColour":[],"visibilityType":null}],"splId":134329679,"inBundle":false,"inPreset":false,"inFttbPreset":true,"psVisible":"A","psCount":1}]},{"serviceType":"VPDN","services":[{"price":275.0,"technicalName":"500 Домашний  50 Мбит/с L2TP + ТВ","ussName":"Безлимитный","shortDescription":"Неограниченный доступ в интернет","fullDescription":"Цены и тарифы указаны в рублях с учетом НДС. Тарифный план требует обязательной настройки интернет-соединения по протоколу L2TP. Подключение по L2TP недоступно на операционных системах Windows 98, ME.","serviceId":"m124719","bundleDiscount":0.0,"additionalParams":{"serviceType":"U","vPriceOut":0.0,"trafficVolumeIn":0,"trafficVolumeOut":null,"vSpeedIn":50000,"vSpeedOut":50000,"vSpeedIn1":0,"vSpeedOut1":0,"lineHolder":false,"discountType":0,"archive":true,"changeTime":null,"changeTo1":"","fcDiscountType":null,"fcDiscount":null,"fcDiscountBc":null,"connectType":"L2TP","mobileSubscriber":false,"vsuAllowed":true,"annualContractAllowed":true,"iptvRelatedOfferEnabled":false,"netPhoneRelatedOfferEnabled":false,"ottRelatedOfferEnabled":false,"activationDate":"2018-08-01T11:28:46.000+0300"},"psSelected":"M","psPrior":1,"psDiscount":225.0,"splId":134026817,"inBundle":false,"inPreset":false,"inFttbPreset":true,"psVisible":"A","psCount":1,"psSwitchServ":"m105817"}]},{"serviceType":"FTTB_PRESET","services":[{"price":0.0,"technicalName":"Пакет NEW \"Домашний с ТВ Лайт\"","ussName":"Домашний с ТВ Лайт","shortDescription":"Пакетное предложение включает в себя неограниченный доступ в интернет и тариф телевидения с тематическими ТВ-пакетами на выбор. Аренда ТВ-приставки включена в стоимоть пакета.","fullDescription":"Цены и тарифы указаны в рублях с учетом НДС. В случае если Вы отключаете пакетное предложение или находитесь в добровольной или финансовой блокировке более 60 дней, интернет-тариф, входящий в пакетное предложение, автоматически переключается на тарифный план \"Основной\" *(с параметрами, действующими на момент подключения пакетного предложения) и аннулируется скидка на аренду комплекта ТВ-оборудования и пакет ТВ-каналов. * Указывается тарифный план, на который происходит развал.","serviceId":"pi00186","bundleDiscount":0.0,"additionalParams":{"minPriceFttbPreset":500.0},"splId":134026814,"inBundle":false,"inPreset":false,"inFttbPreset":false}]},{"serviceType":"IPTV_CONSOLE_RENT","services":[{"price":0.0,"technicalName":"Аренда TVE основная, 0","ussName":"Аренда TVE основная","serviceId":"ter0097","bundleDiscount":0.0,"additionalParams":{"guid":"VIMPELCOM_ATV495X_00017396_D7130","mac":"ACDBDA4DCC02","guidType":"STB","serial":"VMPLC18011517307","nonStop":false,"hddExists":false,"isTve":true},"psSelected":"N","psPrior":1,"psDiscount":0.0,"splId":134271971,"inBundle":false,"inPreset":false,"inFttbPreset":true,"psVisible":"A","psCount":1},{"price":150.0,"technicalName":"Аренда TVE дополнительная, 150","ussName":"Аренда TVE дополнительная","serviceId":"ter0645","bundleDiscount":0.0,"additionalParams":{"guid":"VIMPELCOM_ATV495X_00000015_B5790","mac":"ACDBDA4953E6","guidType":"STB","serial":"VMPLC17110700016","nonStop":true,"hddExists":false,"isTve":true},"psSelected":"A","psPrior":2,"psDiscount":0.0,"splId":134360175,"inBundle":false,"inPreset":false,"inFttbPreset":true,"psVisible":"A","psCount":4}]}]}
    res.json(jsonData);
};

/*
 * GET //inac/service/info/consolePrice
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, consoleType
 * login(type: string) - query parameter - Логин USSS FTTB
 * consoleType(type: string) - query parameter - Тип приставки, для которого совершается вызов. Если параметр не задан, вернутся цены для обоих типов.
 */
exports.getInacServiceInfoConsoleprice = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/globalProblems
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, houseId, globalId
 * login(type: string) - query parameter - Логин пользователя USSS
 * houseId(type: string) - query parameter - Дом для проверки наличия ГП
 * globalId(type: string) - query parameter - ID глобальной проблемы
 */
exports.getInacServiceInfoGlobalproblems = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/globalServices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, cityId, gServiceId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * cityId(type: integer) - query parameter - ID города (СтройУчет)
 * gServiceId(type: integer) - query parameter - ID Глобального сервиса:<br>1 - FTTB IPOE<br>2 - FTTB L2TP/PPTP<br>3 - IPTV<br>4 - ОТТ<br>5 - ДЦТ<br>6 - AVPC<br>7 - Компьютерная помощь<br>8 - Курьерская служба
 */
exports.getInacServiceInfoGlobalservices = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('cityId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/iptvBaseTariffStructure
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login,basePktId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * splId(type: integer) - query parameter - splId подключенного ТВ-тарифа, в составе которого находятся дополнительные пакеты, которые могут быть сохранены
 * basePktId(type: integer) - query parameter - ID базового пакета
 * searchParam(type: string) - query parameter - Строка поиска каналов
 */
exports.getInacServiceInfoIptvbasetariffstructure = function(req, res){
    req.checkQuery('basePktId', 'Invalid query parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);
    var data = {
        "meta": {
            "status": "OK",
            "code": 20000,
            "message": null
        },
        "effectivePrice": 225.0,
        "packet": {
            "price": 225.0,
            "technicalName": "Базовый Лайт 2018 TVE new",
            "ussName": "Базовый Лайт 2018",
            "shortDescription": "Пакет каналов различных тематик и жанров. Вы всегда найдёте, что посмотреть!",
            "fullDescription": "Подробное описание",
            "packetId": "544742",
            "parentPacketId": null,
            "packetEntityType": "BASE_PACKET",
            "pktDiscountEnabled": false,
            "svod": false,
            "mobileSubscriber": false,
            "allowRelatedOffer": true,
            "externalId": 20881,
            "channelCount": 101,
            "excludedPacketIds": [],
            "publicService": false,
            "targetedOffer": false,
            "connected": true,
            "mobChannelCount": 0,
            "childPackets": [{
                "price": 0.0,
                "technicalName": "Дополнительные пакеты",
                "ussName": "Дополнительные пакеты",
                "packetId": "544744",
                "parentPacketId": "544742",
                "packetEntityType": "PACKET_TYPE",
                "pktMinCount": 0,
                "pktDiscountEnabled": false,
                "svod": false,
                "mobileSubscriber": false,
                "allowRelatedOffer": false,
                "externalId": -1,
                "showNumber": 1,
                "excludedPacketIds": [],
                "connected": false,
                "childPackets": [{
                    "price": 0.0,
                    "technicalName": "Тематические ТВ пакеты",
                    "ussName": "Тематические ТВ пакеты",
                    "packetId": "544745",
                    "parentPacketId": "544744",
                    "packetEntityType": "PACKET_SUB_TYPE",
                    "pktDiscountEnabled": false,
                    "svod": false,
                    "mobileSubscriber": false,
                    "allowRelatedOffer": false,
                    "excludedPacketIds": [],
                    "connected": false,
                    "childPackets": [{
                        "price": 146.0,
                        "technicalName": "Специальный Л",
                        "ussName": "Специальный",
                        "shortDescription": "Пакет каналов различных тематик и жанров. Даже самые избирательные телезрители всегда найдут, что посмотреть!",
                        "fullDescription": "Подробное описание",
                        "packetId": "553755",
                        "parentPacketId": "544745",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": false,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20907,
                        "channelCount": 49,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "mobChannelCount": 0,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 249.0,
                        "technicalName": "Кино TVE",
                        "ussName": "Кино ",
                        "shortDescription": "Коллекция кинематографа! Самые громкие \nкинопремьеры и любимая классика! Наслаждайтесь фильмами и сериалами абсолютно любого жанра: комедии, мелодрамы, триллеры, боевики, - всё только самое интересное!",
                        "fullDescription": "Подробное описание",
                        "packetId": "543755",
                        "parentPacketId": "544745",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": false,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20904,
                        "channelCount": 23,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "mobChannelCount": 0,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 149.0,
                        "technicalName": "Детский TVE",
                        "ussName": "Детский",
                        "shortDescription": "Пакет для самых важных членов семьи - для детей! Здесь собраны любимые детские телеканалы для аудитории любого возраста, целью которых является не только развлечение, но и развитие и обучение!",
                        "fullDescription": "Подробное описание",
                        "packetId": "543757",
                        "parentPacketId": "544745",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": false,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20889,
                        "channelCount": 13,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "mobChannelCount": 0,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 199.0,
                        "technicalName": "Познавательный TVE",
                        "ussName": "Познавательный",
                        "shortDescription": "Вам с детства хотелось знать больше других, познать жизнь подводного мира, раскрыть исторические тайны или побывать во всех странах мира? Именно этот пакет способен расширить ваш кругозор и рассказать о последних научных открытиях!",
                        "fullDescription": "Подробное описание",
                        "packetId": "543759",
                        "parentPacketId": "544745",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": false,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20890,
                        "channelCount": 20,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": true,
                        "mobChannelCount": 0,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 149.0,
                        "technicalName": "Спортивный TVE",
                        "ussName": "Спортивный",
                        "shortDescription": "Следите за спортивными событиями? Не пропускаете \nни одного боксёрского поединка? Тогда этот пакет для вас! Все виды спорта - от горных лыж до захватывающих футбольных матчей!",
                        "fullDescription": "Подробное описание",
                        "packetId": "543761",
                        "parentPacketId": "544745",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": false,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20891,
                        "channelCount": 8,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "mobChannelCount": 0,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 299.0,
                        "technicalName": "Для взрослых TVE",
                        "ussName": "Для взрослых",
                        "shortDescription": "Для всех, кому исполнилось 18! Всё, что вы хотели знать об эротике, но боялись спросить. Смотрите на уникальных каналах, предназначенных специально для взрослых зрителей!",
                        "fullDescription": "Подробное описание",
                        "packetId": "543763",
                        "parentPacketId": "544745",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": false,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20892,
                        "channelCount": 6,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "mobChannelCount": 0,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }],
                    "tvType": 3,
                    "cityId": 54,
                    "billType": 1,
                    "isTest": false,
                    "segmentColour": [],
                    "visibilityType": null
                }, {
                    "price": 0.0,
                    "technicalName": "Премиальные ТВ пакеты",
                    "ussName": "Премиальные ТВ пакеты",
                    "packetId": "544747",
                    "parentPacketId": "544744",
                    "packetEntityType": "PACKET_SUB_TYPE",
                    "pktDiscountEnabled": false,
                    "svod": false,
                    "mobileSubscriber": false,
                    "allowRelatedOffer": false,
                    "excludedPacketIds": [],
                    "connected": false,
                    "childPackets": [{
                        "price": 150.0,
                        "technicalName": "ViP Viasat Premium TVE",
                        "ussName": "ViP Viasat Premium",
                        "shortDescription": "ViP Viasat Premium - для тех, кто не любит выбирать, но предпочитает лучшее: каналы на любой вкус - премьеры голливудских и российских фильмов, новые эксклюзивные сериалы одновременно со всем миром, блокбастеры и мегахиты, природа, история и спорт! Разумеется, с превосходным качеством картинки и объёмным звуком.",
                        "fullDescription": "Подробное описание",
                        "packetId": "543769",
                        "parentPacketId": "544747",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": false,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20895,
                        "channelCount": 6,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "mobChannelCount": 0,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 240.0,
                        "technicalName": "ШАНТ Премиум HD TVE",
                        "ussName": "ШАНТ Премиум HD",
                        "shortDescription": "Ведущий армянский семейный телеканал в превосходном эфирном качестве и без рекламы.",
                        "fullDescription": "Подробное описание",
                        "packetId": "543765",
                        "parentPacketId": "544747",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": false,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20893,
                        "channelCount": 1,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "mobChannelCount": 0,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 199.0,
                        "technicalName": "AMEDIA Premium HD TVE - HOME OF HBO",
                        "ussName": "AMEDIA Premium HD - HOME OF HBO",
                        "shortDescription": "Раздел лучших сериалов планеты. Премьеры одновременно со всем миром. Новые проекты и вся библиотека HBO только здесь, хиты ведущих телеканалов и студий мира (FOX, Showtime, Starz, BBC, Sony Pictures) и новые российские сериалы. \"Игра престолов\", \"Мир Дикого Запада\", \"Американская история ужасов\", \"Карточный домик\", \"Рэй Донован\", \"Твин Пикс\", \"Родина\", \"Табу\", \"Миллиарды\", \"Молодой папа\", \"Большая маленькая ложь\" и другие.",
                        "fullDescription": "Подробное описание",
                        "packetId": "543767",
                        "parentPacketId": "544747",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": false,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20894,
                        "channelCount": 2,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "mobChannelCount": 0,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }],
                    "tvType": 3,
                    "cityId": 54,
                    "billType": 1,
                    "isTest": false,
                    "segmentColour": [],
                    "visibilityType": null
                }, {
                    "price": 0.0,
                    "technicalName": "Подписки видеопроката",
                    "ussName": "Подписки видеопроката",
                    "packetId": "544749",
                    "parentPacketId": "544744",
                    "packetEntityType": "PACKET_SUB_TYPE",
                    "pktDiscountEnabled": false,
                    "svod": false,
                    "mobileSubscriber": false,
                    "allowRelatedOffer": false,
                    "externalId": -2,
                    "showNumber": 2,
                    "excludedPacketIds": [],
                    "connected": false,
                    "childPackets": [{
                        "price": 199.0,
                        "technicalName": "Фильмы ivi",
                        "ussName": "Фильмы ivi",
                        "shortDescription": "Зачем тратить время сборы в кино или на поиски  фильма, когда он уже в кармане? А точнее сотни фильмов самых популярных жанров. Выбирайте тему, и через несколько секунд просмотр уже начнется",
                        "fullDescription": "Подробное описание",
                        "packetId": "553769",
                        "parentPacketId": "544749",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": true,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20918,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 199.0,
                        "technicalName": "18+",
                        "ussName": "18+",
                        "shortDescription": "Вам уже исполнилось 18? Значит настало время расслабиться и отправиться в незабываемое путешествие в страну чувственных фантазий. Никаких ограничений и никаких табу! Вас ждут только самые красивые и незакомплексованные девушки.",
                        "fullDescription": "Подробное описание",
                        "packetId": "543771",
                        "parentPacketId": "544749",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": true,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20896,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 99.0,
                        "technicalName": "Комедии ivi",
                        "ussName": "Комедии ivi",
                        "shortDescription": "Лучшее средство поднять настроение - посмотреть хорошую комедию! Собранные здесь фильмы разгоняют хандру в два счета. Поехали!",
                        "fullDescription": "Подробное описание",
                        "packetId": "553763",
                        "parentPacketId": "544749",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": true,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20915,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 99.0,
                        "technicalName": "Детская подписка ivi",
                        "ussName": "Детская подписка ivi",
                        "shortDescription": "Дети мечтают о новых встречах с любимыми персонажами? Откройте волшебный мир анимации и кино прямо сейчас. Мы собрали фильмы, которые понравятся детям любого возраста. Приключения начинаются!",
                        "fullDescription": "Подробное описание",
                        "packetId": "553765",
                        "parentPacketId": "544749",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": true,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20916,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }, {
                        "price": 99.0,
                        "technicalName": "Боевики и триллеры ivi",
                        "ussName": "Боевики и триллеры ivi",
                        "shortDescription": "Кто сказал, что больше нет настоящих героев? Они все здесь! Бесстрашные, волевые и сильные. В очередной раз герои готовы спасать друзей, планету и ... ваш вечер. Вам осталось только выбрать фильм!",
                        "fullDescription": "Подробное описание",
                        "packetId": "553767",
                        "parentPacketId": "544749",
                        "packetEntityType": "CONCRETE_PACKET",
                        "pktDiscountEnabled": false,
                        "svod": true,
                        "mobileSubscriber": false,
                        "allowRelatedOffer": false,
                        "externalId": 20917,
                        "excludedPacketIds": [],
                        "publicService": true,
                        "targetedOffer": false,
                        "connected": false,
                        "childPackets": null,
                        "tvType": 3,
                        "isTest": false,
                        "segmentColour": [],
                        "visibilityType": "A"
                    }],
                    "tvType": 3,
                    "cityId": 54,
                    "billType": 1,
                    "isTest": false,
                    "segmentColour": [],
                    "visibilityType": null
                }],
                "tvType": 3,
                "cityId": 54,
                "billType": 1,
                "isTest": false,
                "segmentColour": [],
                "visibilityType": null
            }, {
                "price": 0.0,
                "technicalName": "Дополнительные услуги",
                "ussName": "Дополнительные услуги",
                "packetId": "544751",
                "parentPacketId": "544742",
                "packetEntityType": "PACKET_TYPE",
                "pktMinCount": 0,
                "pktDiscountEnabled": false,
                "svod": false,
                "mobileSubscriber": false,
                "allowRelatedOffer": false,
                "externalId": -3,
                "showNumber": 3,
                "excludedPacketIds": [],
                "connected": false,
                "childPackets": [{
                    "price": 0.0,
                    "technicalName": "ТВ сервисы",
                    "ussName": "ТВ сервисы",
                    "packetId": "544752",
                    "parentPacketId": "544751",
                    "packetEntityType": "PACKET_SUB_TYPE",
                    "pktDiscountEnabled": false,
                    "svod": false,
                    "mobileSubscriber": false,
                    "allowRelatedOffer": false,
                    "excludedPacketIds": [],
                    "connected": false,
                    "childPackets": null,
                    "tvType": 3,
                    "cityId": 54,
                    "billType": 1,
                    "isTest": false,
                    "segmentColour": [],
                    "visibilityType": null
                }],
                "tvType": 3,
                "cityId": 54,
                "billType": 1,
                "isTest": false,
                "segmentColour": [],
                "visibilityType": null
            }],
            "tvType": 3,
            "cityId": 54,
            "billType": 1,
            "isTest": false,
            "segmentColour": [-1],
            "visibilityType": "O",
            "tveDeviceLimit": 5
        },
        "discounts": []
    };
    // set response body and send
    res.json(data);
};

/*
 * GET //inac/service/info/iptvChannels
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * X-API-Version(type: VersionWrapper) - header parameter -
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, packetId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * packetId(type: integer) - query parameter - ID пакета
 * searchParam(type: string) - query parameter - Строка поиска каналов
 * packetIds(type: string) - query parameter - Объект запроса
 */
exports.getInacServiceInfoIptvchannels = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/iptvDiscounts
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается с разделителем(указываются запятые для множественных значений параметров. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, checked, unchecked
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Идентификатор клиента API USSS
 * checked(type: string) - query parameter - Список выбранных IPTV пакетов (через запятую). Необходимо передавать полный перечень пакетов, включая базовый, тематические, премиальные и др., входящих в состав дерева данного тарифа
 * unchecked(type: string) - query parameter - Список невыбранных IPTV пакетов (через запятую). Необходимо передавать полный перечень пакетов, включая базовый, тематические, премиальные и др., входящих в состав дерева данного тарифа
 * accParams(type: string) - query parameter - Параметры аккумуляторов. Необходимо передавать пары идентификатор пакета, идентификатор аккумулятора, разделяя пары символом ;
 */
exports.getInacServiceInfoIptvdiscounts = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/iptvRentServicePriceInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, serialNumber, mac
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * serialNumber(type: string) - query parameter - 4 последних символа серийного номера
 * mac(type: string) - query parameter - mac-адрес приставки в формате 12 символов без разделителей
 */
exports.getInacServiceInfoIptvrentservicepriceinfo = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('serialNumber', 'Invalid query parameter').notEmpty();
	req.checkQuery('mac', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/mappingServices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login,newPresetId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 * newPresetId(type: string) - query parameter - Идентификатор нового пресета
 */
exports.getInacServiceInfoMappingservices = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('newPresetId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/npUserInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * login(type: string) - query parameter - Логин USS FTTB
 */
exports.getInacServiceInfoNpuserinfo = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/ottChannels
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, ottServiceId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USSS FTTB
 * ottServiceId(type: string) - query parameter - ID сервиса OTT
 */
exports.getInacServiceInfoOttchannels = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ottServiceId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/ottDevices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин FTTB-пользователя USSS (FTTB/номер или буквенно-цифровой alias)
 */
exports.getInacServiceInfoOttdevices = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //inac/service/info/policies
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USS
 */
exports.putInacServiceInfoPolicies = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/selectedServices
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Идентификатор клиента API USSS
 */
exports.getInacServiceInfoSelectedservices = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/serviceParams
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: serviceId, splId, login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * serviceId(type: string) - query parameter - Идентификатор сервиса
 * splId(type: integer) - query parameter - ID подключенного сервиса на абоненте
 * login(type: string) - query parameter - Идентификатор клиента API USSS
 * presetId(type: string) - query parameter - Идентификатор пресета
 */
exports.getInacServiceInfoServiceparams = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/serviceStatistic
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, dateFrom, dateTo
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * dateFrom(type: DateWrapper) - query parameter - Дата начала выборки
 * dateTo(type: DateWrapper) - query parameter - Дата окончания выборки
 */
exports.getInacServiceInfoServicestatistic = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('dateFrom', 'Invalid query parameter').notEmpty();
	req.checkQuery('dateTo', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/targetedOffers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * login(type: string) - query parameter - Логин пользователя USSS
 * client(type: string) - query parameter - Наименование системы, использующей API
 * cacheRefresh(type: boolean) - query parameter - Параметр означающий нужно ли обновление кэша, если true – производится новый вызов spss, если false (по умолчанию )– метод возвращает данные из кэша
 */
exports.getInacServiceInfoTargetedoffers = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/info/tbStatistic
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, dateFrom, dateTo
 * login(type: string) - query parameter - Логин FTTB-пользователя USSS (FTTB/номер или буквенно-цифровой логин)
 * client(type: string) - query parameter - Наименование системы, использующей API
 * dateFrom(type: DateWrapper) - query parameter - Дата начала выборки (формат: YYYY-MM-DDTHH:mm:ss)
 * dateTo(type: DateWrapper) - query parameter - Дата окончания выборки (формат: YYYY-MM-DDTHH:mm:ss)
 */
exports.getInacServiceInfoTbstatistic = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('dateFrom', 'Invalid query parameter').notEmpty();
	req.checkQuery('dateTo', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //inac/service/management/activatePromisedPayment
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, initiatorName
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 */
exports.postInacServiceManagementActivatepromisedpayment = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //inac/service/management/cancelFutureTask
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, requestId, initiatorName
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Идентификатор клиента API USSS
 * requestId(type: integer) - query parameter - Идентификатор запроса USSS
 * reqExternalId(type: integer) - query parameter - Идентификатор задания для отмены
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 */
exports.postInacServiceManagementCancelfuturetask = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/management/changeFirewall
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, initiatorName, level
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин пользователя USSS
 * initiatorName(type: string) - query parameter - Логин сотрудника
 * level(type: integer) - query parameter - Тип файрвола: 0 - Отключен, 1 - Средний, 2 - Максимальный, 10 - Средний+ блокировка SMTP
 */
exports.getInacServiceManagementChangefirewall = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('level', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST //inac/service/management/changeTicketParams
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * ticketNumber(type: integer) - query parameter - Номер тикета на изменение задания будущей датой
 * newScheduledDate(type: DateWrapper) - query parameter - Новая дата исполнения задачи на изменение сервисов в формате yyyy-MM-ddTHH:mm
 * cancelTransaction(type: boolean) - query parameter - Флаг отмены транзакции, по умолчанию false. Если передано значение true, параметр newScheduledDate игнорируется
 */
exports.postInacServiceManagementChangeticketparams = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('login', 'Invalid query parameter').notEmpty();
	req.checkQuery('ticketNumber', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/management/delOttDevice
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, deviceID, expDate
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 * deviceID(type: string) - query parameter - Идентификатор устройства
 * expDate(type: DateWrapper) - query parameter - Дата отключения устройства в будущем
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 */
exports.getInacServiceManagementDelottdevice = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('deviceID', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/management/futureInfo
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин USSS
 */
exports.getInacServiceManagementFutureinfo = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //inac/service/management/label
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, equipmentId, equipmentType
 * login(type: string) - query parameter - Логин абонента
 * equipmentId(type: string) - query parameter - Id оборудования
 * equipmentType(type: string) - query parameter - Тип оборудования
 * label(type: string) - query parameter - Метка
 */
exports.putInacServiceManagementLabel = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('equipmentId', 'Invalid query parameter').notEmpty();
	req.checkQuery('equipmentType', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET //inac/service/management/sendUserReactionToSpss
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, initiatorName, ctn, campId, subgroupId, channelType, response, responseDate, fttbUiId, billingRequestId
 * login(type: string) - query parameter - Логин пользователя USSS
 * initiatorName(type: string) - query parameter - Логин сотрудника BO (для имперсонализации)
 * client(type: string) - query parameter - Наименование системы, использующей API
 * ctn(type: string) - query parameter - 10-значный номер лицевого счета клиента FTTB
 * campId(type: integer) - query parameter - Идентификатор целевой кампании
 * subgroupId(type: integer) - query parameter - Идентификатор подгруппы/предложения целевой кампании
 * channelType(type: integer) - query parameter - Тип канала: 4 – Канал Личный кабинет (мобильный абонент) 5 – Канал Мобильное приложение (мобильный абонент) 13 – Toolbar25 – Канал ЛК FTTB (абонент ШПД)
 * response(type: integer) - query parameter - ID ответа абонента(Подумает - 11180<br>Будет - 538<br>Не будет - 539)
 * responseDate(type: DateWrapper) - query parameter - Дата-время ответа (формат: YYYY-MM-DDTHH:mm:ss)
 * fttbUiId(type: integer) - query parameter - Идентификатор раздела на сайте ЛК FTTB, в которых было показано предложение.<br>Возможные значения:<br>12017 – Баннер на профиле (раздел «Предложения для вас»).<br>12018 – Каталог предложений (в зависимости от типа предложения оно должно выводиться в тарифы, услуги, пакеты, оборудование и т.д.).<br>12019 – Рекомендованные предложения.<br>12020 – Блок «с этим еще покупают».
 * billingRequestId(type: integer) - query parameter - Идентификатор заявки на подключение услуги.
 */
exports.getInacServiceManagementSenduserreactiontospss = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	req.checkQuery('ctn', 'Invalid query parameter').notEmpty();
	req.checkQuery('campId', 'Invalid query parameter').notEmpty();
	req.checkQuery('subgroupId', 'Invalid query parameter').notEmpty();
	req.checkQuery('channelType', 'Invalid query parameter').notEmpty();
	req.checkQuery('response', 'Invalid query parameter').notEmpty();
	req.checkQuery('responseDate', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //inac/service/management/servicesManagement
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * Impersonation-Context(type: string) - header parameter - Контекст имперсонализации
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, payMode, datePeriodStart, datePeriodEnd, bundleServiceId, initiatorName
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 */
exports.putInacServiceManagementServicesmanagement = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT //inac/service/management/servicesManagementCheck
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * token(type: string) - cookie parameter - Token
 * hash(type: string) - query parameter - Hash для проверки token. Конкатенация параметров для формирования hash делается без разделителя. Параметры, участвующие в конкатенации в указанном порядке, следующие: login, bundleServiceId
 * client(type: string) - query parameter - Наименование системы, использующей API
 * login(type: string) - query parameter - Логин абонента
 */
exports.putInacServiceManagementServicesmanagementcheck = function(req, res) {
	req.check('token', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};